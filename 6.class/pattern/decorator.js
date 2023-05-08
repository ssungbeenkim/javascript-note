// https://velog.io/@moggy/Javascript-%EC%9E%A5%EC%8B%9D%EC%9E%90decorator-%ED%8C%A8%ED%84%B4

/*  
장식자(Decorator) 패턴은 객체에 새로운 행동을 추가하는 가장 효과적인 방법입니다. 
새로운 행동이 필요해서 이를 구현한 정적 클래스를 추가로 생성하는 것은 유연하지 못한 설계입니다. 
그보다 필요한 시점에 새로운 행동을 동적으로 장식할 수 있다면 클래스 계통의 상부측 클래스에 많은 책임과 기능이 누적되는 것을 피할 수 있습니다.
 */

// 장식자 패턴 구현을 위한 클래스를 믹스인(Mixins) 클래스로 정의하겠습니다
// 믹스인은 특정 기능(행위)만을 담당하는 클래스로, 단독 사용(Stand-alone use)이 아닌
// 다른 클래스에 탑재되어 사용될 목적으로 작성된 (조각) 클래스를 의미합니다.

// 아래 Decoratable 믹스인 클래스는 기존 메서드의 연산 결과물을 동적으로 장식할 수 있는 역할을 담당하는 decorate 메서드를 제공합니다.

// Decoratable 믹스인 클래스
const Decoratable = (superclass) =>
  class extends superclass {
    decorate(referenceName, decorator) {
      // reference 는 기존 메서드를 참조
      const reference = this[referenceName];
      // 오버라이딩을 통해 장식자 구현
      this[referenceName] = (...args) => {
        // reference 메서드 연산수행 후, 결과를 첫번째 인자로 담아 decorator 호출
        return decorator.apply(this, [reference.call(this, ...args), ...args]);
      };
    }
  };
// Decoratable 믹스인 클래스는 decorate 메서드를 통해 장식자를 구현할 수 있도록 합니다.

// 예시를 통해 이해해 보자.

// super class
class PureElement {
  constructor(name) {
    this.name = name;
  }

  element() {
    return document.createElement('div');
  }
}

// BorderedElement 는 PureElement 와 Decoratable 을 상속.
class BorderedElement extends Decoratable(PureElement) {
  constructor(name) {
    super(name);

    // This is private
    const appendBorder = (element) => {
      element.style.border = '1px solid';
      return element;
    };

    // 실제 decorating 수행
    this.decorate('element', (decoObj) => {
      return appendBorder(decoObj);
    });
  }
}

new BorderedElement('borderDiv').element();
// [output] ==> <div style="border:1px solid"></div>

//  decorate 메서드는 element 메서드에 대한 장식을 수행하고 그 결과를 반환(return)합니다.

// 데코레이팅은 본래 기존 연산에 덫붙이는 작업이 필요할 때 사용하는 디자인 패턴입니다.
let el = new BorderedElement('borderedDiv');
el.decorate('element', (decoObj) => {
  decoObj.style.background = '#eee';
  return decoObj;
});

el.element();
// [output] ==> <div style="border:1px solid #eee"></div>
// 위 예제는 코드 작성자가 최종 결과물을 전달받아 element 메서드를 다시한번 장식하는 과정을 보여줍니다. (decorate 는 public 메서드이기에 가능합니다.)
