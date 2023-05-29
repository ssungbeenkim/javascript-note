// 비동기 제너레이터
async function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    yield i;
  }
}

(async () => {
  let generator = generateSequence(1, 5);
  for await (let value of generator) {
    console.log(value); // 1, 2, 3, 4, 5가 1초 간격으로 출력된다.
  }
})();

// 커스텀 이터러블에서의 비동기 제너레이터
let range = {
  from: 1,
  to: 5,

  async *[Symbol.asyncIterator]() {
    // [Symbol.asyncIterator]: async function*()와 동일
    for (let value = this.from; value <= this.to; value++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      yield value;
    }
  },
};

(async () => {
  for await (let value of range) {
    console.log(value); // 1, 2, 3, 4, 5
  }
})();

// 더 정리할 부분 : pagenation 관련하여 사용하는 예제
