/* 
hoisting이란 JS 엔진이 코드를 실행하기 전에 변수, 함수, 클래스의 선언문을 
최상단으로 끌어 올리는 것을 말한다. 변수의 선언과 초기화를 분리해서 선언만 최상단으로 끌어올린다. 
할당된 값 말고 변수가 선언된 사실만 알고 있는 것이다. 

*/

// - 함수와 변수, 클래스의 hoisting

// 함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
// 함수의 선언문은 선언 이전에도 호출이 가능함

print();

function print() {
  console.log('Hello');
}

// 변수(let, const)와 클래스는 함수와 다르게 선언만 호이스팅된다.
// 초기화 전, 변수에 접근하면 컴파일(빌드)에러가 발생한다.
// 즉, 선언(정의)은 되어 있지만 값이 초기화(할당) 되지 않은 상태이기에 에러가 발생하는 것이다.
console.log(hi); // Cannot access before initialization !
let hi = 'hi';
func1(); //* error! 표현식으로 선언된 함수 또한 마찬가지로 변수 선언만 호이스팅 된다.
let func1 = function () {};

const cat = new Cat(); // 초기화 전에 접근 불가.
class Cat {}

//?
let x = 1;
{ 
  console.log(x); //* Error! 블럭 안에서 변수 x의 선언이 호이스팅 되고, 값을 할당하기 전이므로 에러가 발생하다.
  let x = 2;
}
