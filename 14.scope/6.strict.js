'use strict';
// MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
// 엄격 모드 strict mode
// 리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드로 설정되어 있어서 코딩시 실수를 만회할 수 있게 도와준다.
// 엄격모드에서 할 수 없는것들

//1. 키워드 삭제 불가
var x = 1;
delete x;

//2. 선언되지 않은 변수를 사용할 수 없다.
function add(x) {
  var a = 2;
  b = a + x;
  console.log(this); // 함수 내부에서 this 출력시 undefined가 나온다.
}
// strict mode가 아닐 때는 글로벌 객체가 출력 된다.
add(1);
//3. for of문 안에서 변수를 선언하지 않고 사용할 수 없다. for문에서는 let
const array = [1, 2, 3];
for (const num of array) {
  console.log(num);
}

// 함수 레벨에서도 적용이 가능하다.
