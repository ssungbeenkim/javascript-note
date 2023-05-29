{
  // 위 링크를 따라가다가 이해가 되지 않아서 보는중. 함수형 프로그래밍과 관련이 있는 것 같다.
  const flow =
    (...fns) =>
    (x0) =>
      fns.reduce((x, f) => f(x), x0);

  const add = (x) => (y) => x + y;
  const multiply = (x) => (y) => x * y;

  const addAndMultiply = flow(add(1), multiply(2));
  console.dir(addAndMultiply, null);

  console.log(addAndMultiply(3)); // 8
}

/* 참고자료
https://velog.io/@dev_boku/%EB%88%84%EA%B5%AC%EB%82%98-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A0%9C%EB%84%88%EB%A0%88%EC%9D%B4%ED%84%B0-%ED%95%A8%EC%88%98%EA%B0%80-%ED%95%84%EC%9A%94%ED%95%9C-%EC%9D%B4%EC%9C%A0%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80%EC%9A%94

*/
