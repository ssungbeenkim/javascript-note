/* 
클로저의 활용예재를 살펴보자. 
내부 정보를 은닉하고, 공개 함수(public, 외부)를 통한 데이터 조작을 위해 쓰인다. 
즉, 캡슐화와 정보은닉을 위해 쓰인다. 
클래스 private 필드 또는 메소드를 사용하는 효과와 동일하다. 
이전 브라우저에서는 private과 class가 없었기 때문에 클로저의 특징을 활용해 정보를 은닉하고 
공개 함수를 통해서만 데이터를 조작할 수 있게 하기 위해 쓰였다. 
*/
function makeCounter() {
  let count = 0; // count를 렉시컬 환경에 숨겨두고
  function increase() {
    //외부에서는 increase라는 public 함수만을 사용해서 조작할 수 있게 했다.
    count++;
    console.log(count);
  }
  return increase;
}
const increase = makeCounter();
increase();
increase();
increase();

/* 
클로저라는 특징을 활용해서 함수를 활용해 은닉하고자 하는 정보를 감추고 오직 퍼블릭 함수를 통해서만 
내부 데이터를 조작할 수 있게 했다.  */
{
  // mdn에 있는 좋은 예제.
  const counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }

    // 외부에서는 이 세가지 함수만을 이용해서 내부 데이터를 조작할 수 있다.
    return {
      increment() {
        changeBy(1);
      },

      decrement() {
        changeBy(-1);
      },

      value() {
        return privateCounter;
      },
    };
  })();

  console.log(counter.value()); // 0.

  counter.increment();
  counter.increment();
  console.log(counter.value()); // 2.

  counter.decrement();
  console.log(counter.value()); // 1.
}

/* 
하지만 더이상 이렇게 정보를 은닉할 필요는 없다. 이제 클래스를 사용하면 된다. 
*/

class Counter {
  #count = 0;
  increase() {
    this.#count++;
    console.log(this.#count);
  }
}
const counter = new Counter();
counter.increase();
