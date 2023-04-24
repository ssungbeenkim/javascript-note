/* 합수 합성 */

// https://velog.io/@nittre/JavaScript-%ED%95%A8%EC%88%98-%ED%95%A9%EC%84%B1Function-Composition

{
  // 두 함수를 합성하는 함수를 만들어보자
  const add2 = (num) => num + 2;
  const square = (num) => num * num;
  const add2AndSquare = (num) => sqaure(add2(num));

  const compose = (func1, func2) => (val) => func2(func1(val));

  const compute = compose(add2, square); // f square(add2(val))

  console.log(compute(5)); //49
}
