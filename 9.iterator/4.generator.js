// const multiple = {
//   [Symbol.iterator]: () => {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

/* 제너레이터 https://ko.javascript.info/generators */
/* 도움이 되는 글 
  
 */
// 제너레이터 함수는 사용자에게 제어권을 양도한다.

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next); // { value: 0, done: false }
// multiple.return();
// multiple.throw('Error!'); // 중간에 에러를 발생시키면 제너레이터 함수가 종료된다.

next = multiple.next();
console.log(next); // { value: 1, done: false }
// 제너레이터를 이용하면 비동기적인 함수를 만들 수 있으나, 프로미스를 사용하는 것이 훨씬 코드도 깔끔하고 간편하다.

// generator 함수 개념 정리
/* 더 많은 예제는 https://ko.javascript.info/generators 참고
제너레이터 컴포지션 
제너레이터 정보 교환 등

*/

{
  function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
  }

  // '제너레이터 함수'는 '제너레이터 객체'를 생성.
  let generator = generateSequence();
  console.log(generator); // [object Generator]
  let one = generator.next();
  let two = generator.next();
  console.log(one); // {value: 1, done: false}
  console.log(two); // {value: 2, done: false}

  // 제너레이터는 이터러블이다.

  for (let value of generator) {
    console.log(value); // 1, 2까지만 출력됨. for..of 이터레이션이 done: true일 때 마지막 value를 무시하기 때문
  }
}

{
  function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }
  let generator = generateSequence();
  for (let value of generator) {
    console.log(value); // 3까지 출력하기 위해서는 reutrn이 아닌 yield를 사용해야 한다.
  }
  // 물론 spread도 사용이 가능하다.
  let sequence = [0, ...generateSequence()];
  console.log(sequence); // 0, 1, 2, 3
}

{
  // 이터러블 대신 제너레이터 사용하기
  let range = {
    from: 1,
    to: 5,

    *[Symbol.iterator]() {
      // [Symbol.iterator]: function*()를 짧게 줄인 것이다.
      for (let value = this.from; value <= this.to; value++) {
        yield value;
      }
    },
  };

  console.log([...range]); // 1, 2, 3, 4, 5
}
