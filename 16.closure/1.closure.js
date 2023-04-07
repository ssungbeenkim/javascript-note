/* 
함수와 함수 외부를 둘러싼 렉시컬 환경의 조합이다. 즉, 
내부 함수에서 외부 함수의 스코프에 접근할 수 있는 것을 말한다. 
블록 스코프와 비슷하지만 클로저는 함수에 대한 것을 말한다. 
 */

const text = 'hello';
function func() {
  console.log(text); // 외부의 text에 접근 가능
}
func();

/* 
엄밀히 말하면 위와 같이 외부의 값에 접근할 수 있다고 해서 다 클로저라고 하지는 않고, 
중첩된 함수에서 내부 함수가 외부 함수의 스코프에 있는 데이터에 접근할 수 있는 것을 말한다. 
아래의 예를 살펴보자. 
*/

function outer() {
  const x = 0;
  function inner() {
    console.log(`inside inner: ${x}`);
  }
  return inner;
}
const func1 = outer();
func1(); // 클로저에 의해 함수가 리턴이 될 때 함수의 outer lexical 환경이 함께 리턴되므로 접근 가능하다.
