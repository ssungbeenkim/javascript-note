// 자바스크립트의 함수는 만능 슈퍼맨!
// 함수처럼 사용, 생성자 함수로 사용 (클래스)
// 하지만, 이걸 위해서 불필요한 무거운 프로토타입(많은 데이터를 담고 있는 객체) 생성됨
const dog = {
  name: 'Dog',
  play: function () {
    // 💩
    console.log('논다멍');
  },
};
dog.play();
const obj = new dog.play(); // 💩
console.log(obj);

// ES6
const cat = {
  name: 'cat',
  play() {
    // 객체의 메서드 (오브젝트에 속한 함수)
    console.log('냐옹');
  },
};
cat.play();
// const obj1 = new cat.play(); // 생성자 함수로 사용할 수 없다.

/**
 * 화살표 함수의 특징
 * 1. 문법이 깔끔함
 * 2. 생성자 함수로 사용이 불가능 (무거운 프로토타입을 만들지 ❌)
 * 3. 함수 자체 arguments를 가지고 있지 않음
 * 4. this에 대한 바인딩이 정적으로 결정됨
 *    - 함수에서 제일 근접한 상위 스코프의 this에 정적으로 바인딩됨
 */
console.log('-------------------');
function sum(a, b) {
  console.log(arguments);
}
sum(1, 2); // [Arguments] { '0': 1, '1': 2 }

const add = (a, b) => {
  console.log(arguments); // 함수의 arguments가 아니라 외부의 arguments가 출력된다.
};
add(1, 2);

const printArrow = () => {
  console.log(this); // 스코프상에거 가장 가까운 this를 가리킴. (글로벌 객체)
};
printArrow(); //{}
cat.printArrow = printArrow;
cat.printArrow(); // {} 바인딩 된 global 객체

// 정리하면, 정적으로 바인딩이 되기 때문에 Class 나 생성자 함수, 객체 내에서는 arrow function을 사용하는 것이 좋다.
