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
// 제너레이터 함수는 사용자에게 제어권을 양도한다.

function* multipleGenerator() {
  //
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      yield i ** 2;
    }
  } catch (error) {
    console.log(error);
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return();
multiple.throw('Error!');

next = multiple.next();
console.log(next.value, next.done);
// 제너레이터를 이용하면 비동기적인 함수를 만들 수 있으나, 프로미스를 사용하는 것이 훨씬 코드도 깔끔하고 간편하다.
