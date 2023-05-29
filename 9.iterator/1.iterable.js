/* 도움이 되는 글
* Iterable : javascriptinfo https://ko.javascript.info/iterable 
* 이터러블, 이터레이터에 대한 이해. https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EC%9D%B4%ED%84%B0%EB%9F%AC%EB%B8%94-%EC%9D%B4%ED%84%B0%EB%A0%88%EC%9D%B4%ED%84%B0-%F0%9F%92%AF%EC%99%84%EB%B2%BD-%EC%9D%B4%ED%95%B4
  - 이터러블이란 내부에 [Symbol.iterator]() 메서드를 가지는 객체를 말한다.
  그리고 이 메서드는 Iterator 객체를 반환한다. 
  - Iterator 객체는 next() 라는 메서드를 가지고 있고, 이 메서드는 value와 done이라는 프로퍼티를 가진 객체를 리턴한다.

* https://velog.io/@thumb_hyeok/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-%EC%9D%B4%ED%84%B0%EB%9F%AC%EB%B8%94
  - 이터레이션 프로토콜에는 이터러블/이터레이터 프로토콜이 있다. 각각의 프로토콜을 만족하는 객체를 
  각각 이터러블, 이터레이터라고 한다. 


  [Symbol.iterator](): IterableIterator<T>;
*/

const iteratorFn = Array.prototype[Symbol.iterator];
console.log(iteratorFn); //[Function: values]

const iteratorobj = Array.prototype[Symbol.iterator]();
console.log(iteratorobj); //Object [Array Iterator] {} <- iterable iterator

const array = [1, 2, 3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());

// iterator 사용해 보기!

const arr = [1, 2, 3];
const iteratorObject = arr[Symbol.iterator]();

// next(...args: [] | [TNext]): IteratorResult<T, TReturn>;

console.log(iteratorObject.next()); //{ value: 1, done: false }
console.log(iteratorObject.next()); //{ value: 2, done: false }
console.log(iteratorObject.next()); //{ value: 3, done: false }
console.log(iteratorObject.next()); //{ value: undefined, done: true }
console.log(typeof iteratorObject); // object

const iterator = array.values();

while (true) {
  // for of 는 아마도 내부적으로 이런식으로 구현되어 있을 것이다.
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value); // 1 2 3
}

for (let item of array) {
  console.log(item); // 1 2 3
}

for (let item of array.values()) {
  console.log(item); // 1 2 3
}

const obj = { id: 123, name: 'Vincent' };
for (const key in obj) {
  console.log(key);
}

/* 요약 

Itorable 객체 내부의 [Symbol.iterator]()함수 호출시 Itorator 를 리턴한다. 
Itorator 내부에는 next() 로 값을 순환하는 함수가 있다. 
next를 호출하면 Iterator Result 객체를 리턴하고 그 객체 안에는 value, done이라는 프로퍼티가 있다. 
*/

// 220529
// 비동기 이터레이터
//https://ko.javascript.info/async-iterators-generators
{
  let range = {
    from: 1,
    to: 5,

    // for await..of 최초 실행 시, Symbol.asyncIterator가 호출됩니다.
    [Symbol.asyncIterator]() {
      // (1)
      // Symbol.asyncIterator 메서드는 이터레이터 객체를 반환합니다.
      // 이후 for await..of는 반환된 이터레이터 객체만을 대상으로 동작하는데,
      // 다음 값은 next()에서 정해집니다.
      return {
        current: this.from,
        last: this.to,

        // for await..of 반복문에 의해 각 이터레이션마다 next()가 호출됩니다.
        async next() {
          // (2)
          //  next()는 객체 형태의 값, {done:.., value :...}를 반환합니다.
          // (객체는 async에 의해 자동으로 프라미스로 감싸집니다.)

          // 비동기로 무언가를 하기 위해 await를 사용할 수 있습니다.
          await new Promise((resolve) => setTimeout(resolve, 1000)); // (3)

          if (this.current <= this.last) {
            return { done: false, value: this.current++ };
          } else {
            return { done: true };
          }
        },
      };
    },
  };

  (async () => {
    for await (let value of range) {
      // (4)
      console.log(value); // 1,2,3,4,5가 1초 간격으로 출력된다.
    }
  })();
}
