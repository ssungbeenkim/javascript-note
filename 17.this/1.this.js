// 'use strict';
/**
 * 글로벌 컨텍스트의 this
 *  - 브라우저: window
 *  - 노드: 모듈 (commonJS)
 */
console.log(this); // 텅 빈 객체가 출력됨
const x = 0;
module.exports.x = x; //
console.log(this); // { x: 0 }
console.log(globalThis); // 노드에서 사용하는 글로벌 객체
// globalThis.setTimeout()
// setTimeout() globalThis 생략 가능
// 브라우저에서 globalThis는 Window객체

/**
 * 함수 내부에서의 this는 글로벌 객체.
 * 엄격모드에서는 undefined
 */
function fun() {
  console.log(this);
}
fun();

/**
 * 생성자 함수 또는 클래스에서의 this, 앞으로 생성될 인스턴스 자체를 가리킴
 */
function Cat(name) {
  this.name = name;
  this.printName = function () {
    console.log(this.name);
  };
}
const cat1 = new Cat('냐옹');
const cat2 = new Cat('미야옹');
cat1.printName(); // 냐옹
cat2.printName(); // 미야옹

{
  // 연습
  ('use strict');

  class Cl {
    printThis() {
      console.log(this);
    }
    printThis2 = () => {
      console.log(this);
    };
    printThis3 = function () {
      console.log(this);
    };
  }

  const obj = new Cl();
  obj.printThis(); // cl {}
  obj.printThis2(); // cl {}
  obj.printThis3(); // cl {}

  const printThis = obj.printThis;
  printThis(); // undefined
  const printThis2 = obj.printThis2;
  printThis2(); // cl {}
  const printThis3 = obj.printThis3;
  printThis3(); // undefined

  console.log('-------------------');

  function Co() {
    this.printThis4 = () => {
      console.log(this);
    };
    this.printThis5 = function () {
      console.log(this);
    };
  }

  const obj2 = new Co();
  obj2.printThis4(); // Co {}
  obj2.printThis5(); // Co {}

  const printThis4 = obj2.printThis4;
  printThis4(); // Co {} -> 화살표 함수는 this가 정적으로 결정됨
  const printThis5 = obj2.printThis5;
  printThis5(); // undefined -> this 정보를 잃어버리게 된다. strict모드 아닐때는 globalThis를 가리킴
}
