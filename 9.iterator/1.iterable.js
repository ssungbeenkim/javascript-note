// Iterable 하다는건! 순회가 가능하다는 거지!
// [Symbol.iterator](): IterableIterator<T>;
// 심볼정의를 가진 객체나, 특정한 함수가 IterableIterator<T>를 리턴한다는것은
// 순회 가능한 객체다! 라는것을 의미한다
// 순회가 가능하면 무엇을 할 수 있나?
// 바로! 빙글 빙글 도는 반복문, 연산자들을 사용할 수 있어.
const iteratorFn = Array.prototype[Symbol.iterator];
console.log(iteratorFn); //[Function: values]

const iteratorobj = Array.prototype[Symbol.iterator]();
console.log(iteratorobj); //Object [Array Iterator] {}

const array = [1, 2, 3];
console.log(array.values());
console.log(array.entries());
console.log(array.keys());

// iterator 사용해 보기!

const arr = [1, 2, 3];
const ite = arr[Symbol.iterator]();

console.log(ite.next()); //{ value: 1, done: false }
console.log(ite.next()); //{ value: 2, done: false }
console.log(ite.next()); //{ value: 3, done: false }
console.log(ite.next()); //{ value: undefined, done: true }
console.log(typeof ite); // object
const iterator = array.values();

/* 
이터러블한 객체는 심볼이터레이터 함수 호출시 이터러블 프로토콜을 따르는 객체를 리턴한다. 
그리고 그 객체 내부에는 next() 로 값을 순환하는 함수가 있다. 
next를 호출하면 Iterator Result 객체를 리턴하고 그 객체 안에는 value, done이라는 프로퍼티가 있다. 
*/

while (true) {
  // for of 는 아마도 내부적으로 이런식으로 구현되어 있을 것이다.
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value); // 1 2 3
}

for (let item of array) {
  console.log(item);
}

for (let item of array.values()) {
  console.log(item);
}

const obj = { id: 123, name: 'Ellie' };
for (const key in obj) {
  console.log(key);
}
