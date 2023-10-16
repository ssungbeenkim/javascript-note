/* 
스코프라는 것은 변수를 참조할 수 있는(접근할 수 있는)유효한 범위를 말한다. 
또는 식별자(변수, 함수, 클래스)가 유효한 범위를 뜻한다. 
식별자가 선언된 위치에 따라 스코프가 결정된다. 
스코프는 블럭으로 결정이 된다. 블럭 안의 변수는 블럭 안에서만 유효하다. 
스코프는 이름 충돌을 방지하며 블럭 안의 변수는 블럭이 끝나면 GC에 의해 제거되므로 메모리를 절약한다.
그렇기에 변수는 최대한 필요한 곳에서 정의하여야 한다. 
 */

// 코드 블럭: { }, if() { }, for() { }, function() { }
// 블럭 외부에서는 블럭 내부의 변수를 참조할 수 없다.
{
  const a = 'a';
}
// console.log(a); // app crushed
const b = 'b';

// 함수 외부에서는 함수 내부의 변수를 참조할 수 없다.
function print() {
  const message = 'Hello World';
  console.log(message);
}
// console.log(message); // app crushed

// 함수 외부에서는 함수의 매개변수를 참조할 수 없다.
function sum(a, b) {
  console.log(a, b);
}
// console.log(a, b); // app crushed
