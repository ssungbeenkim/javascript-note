// https://velog.io/@moggy/Javascript-%EB%AF%B9%EC%8A%A4%EC%9D%B8-%EA%B8%B0%EB%B2%95Mixin-technique

class Animal {
  constructor(name) {
    this.name = name;
  }
}

// ES2015에 새롭게 도입된 클래스 문법을 이용하면 믹스인 클래스들을 손쉽게 정의할 수 있습니다.

// 나는 행위를 담당하는 Mixin
const FlyToMixin = (superclass) =>
  class extends superclass {
    flyTo(destination) {
      console.log(`${this.name} is flying to the ${destination}`);
    }
  };

// 먹는 행위를 담당하는 Mixin
const EatMixin = (superclass) =>
  class extends superclass {
    eat(food) {
      console.log(`${this.name} is eating ${food}`);
    }
  };

// 헤엄치는 행위를 담당하는 Mixin
const SwimAtMixin = (superclass) =>
  class extends superclass {
    swimAt(place) {
      console.log(`${this.name} is swiming at the ${place}`);
    }
  };

// 믹스인을 탑재한 Mouse
class Mouse extends SwimAtMixin(EatMixin(Animal)) {
  /*...*/
}

const mickyMouse = new Mouse('Micky Mouse');
mickyMouse.swimAt('river'); // Micky Mouse is swiming at the river
mickyMouse.eat('cheese'); // Micky Mouse is eating cheese

class MightyMouse extends FlyToMixin(Mouse) {
  /*...*/
}
// MightyMouse는 Mouse를 상속받고, Mouse는 EatMixin과 SwimAtMixin을 상속받고, EatMixin과 SwimAtMixin은 Animal을 상속받습니다.
