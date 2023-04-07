// var의 특징 (안좋은..)
// -> 일반 코딩 방식과 어긋나서 개발하면서 멘붕 메이커임.
// -> 코드의 가독성과 유지보수성에 좋지 않음
// 'use strict'; 를 해도 블록레벨 안되는것과 중복선언은 동일하게 동작하니 안쓴느게 답이다.

// 1. 변수 선언하는 키워드 없이 선언 & 할당이 가능함
something = '💩'; // var를 사용하는 것과 동일하다.
console.log(something);

// 2. 중복 선언이 가능함
// 선언인지, 재할당인지 구분하기 어렵다. 재선언시 문제없이 덮어씌워진다.
var poo = '💩';
var poo = '💩';
console.log(poo); // 잘 출력된다.

// 3. 블록 레벨 스코프 안됨 ❌
var apple = '사과';
{
  var apple = '🍎';
  {
    var apple = '🍏';
  }
}
console.log(apple); //'🍏'
// 블럭을 개무시하고 그냥 마지막에 선언된 것이 되어버림.

// 4. 근데 또 함수 레벨 스코프만 지원 됨
function example() {
  var dog = '🦮';
}
console.log(dog); // Error: dog is not defined

// 결론: let과 const만 쓰자.
