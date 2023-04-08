/* 
프로토타입이란 일반적으로 '원형'이라는 의미로 쓰인다. 
자바스크립트에서는 객체지향 프로그래밍을 위해서 프로토타입을 이용하고 있다. 
대부분의 객체지향 언어에서는 객체지향 프로그래밍을 위해 클래스를 이용하지만 자바스크립트는 프로토타입을 이용한다.
물론 최근에는 클래스가 추가되었지만 일종의 synthetic sugar일 뿐, 근본적으로는 prototype을 활용한다. 
그래서 자바스크립트의 내부 동작 원리를 이해하는데 있어 prototype에 대한 이해가 중요하다. 
 */

/* 프로토타입 눈으로 확인하기 */

const obj1 = {};
// obj1. 점을 찍는 순간 hasOwnProperty toSteing..등의 함수와 속성들을 볼 수 있다.
console.log(obj1); //{}
/* 
브라우저 콘솔에서 출력해 보면, obj1에 별도의 상태나 함수는 없지만 Object라는 프로토타입을 가지고 있으며
프로토타입 안에 obj.을 통해 볼 수 있었던 생성자 함수와 함수, 속성들이 들어있는 것을 확인해 볼 수 있다.  
-> 클래스, 생성자 함수등을 어떤것을 이용해 만들던지 상관없이 객체라면 기본적으로 Object라는 프로토타입을 가지고 있다. 
-> 모든 객체는 객체간에 상속을 위해 내부에 숨겨진 [[Prototype]]을 가지고 있다. */

/* 
외부에서 직접 프로토타입에 접근하는 것은 불가하며, __proto__속성으로 접근하거나 
Object.getPrototypeOf() 또는 Object.setPrototypeOf()를 통해 get 하고 set 할 수 있다. 
예외적으로 생성자함수에서는 'prototype' 속성으로 접근이 가능하다. 
*/

const x = {};
const y = {};
console.log(x); //{}
console.log(y); //{}
console.log(x.toString()); // [object Object]
console.log(x.__proto__ === y.__proto__); // true
/* -> 자바스크립트의 모든 객체는 동일한 프로토타입을 상속한다.  */

const array = [];
console.log(array);
// 콘솔에서 Array라는 prototype을 상속하고 그 안에 Object proto 를 가지고 있는 것을 볼 수 있다.
// array -> Array -> Object

// -> 객체간의 상속 연결고리는 프로토타입 체인으로 연결되어 있다.

/* 프로퍼티 디스크립터 **
MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
자바스크립트 내부적으로 object의 상태를 가지고 있는 디스크립터라는 것이 있다. 

*/
const dog = { name: '와우', emoji: '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog)); // key와 value를 pair로 받아온다.

console.log('name' in dog); // in 연산자로 특정 key가 있는지 확인.
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

// {
// name: { value: '와우', writable: true, enumerable: true, configurable: true },
// emoji: { value: '🐶', writable: true, enumerable: true, configurable: true }
// }
/* 
writable - 값을 수정할 수 있는지 
enumerable - 값을 열거(iterate) 할 수 있는지 
configurable - key를 삭제하는 등 업데이트 할 수 있는지 
*/

const desc = Object.getOwnPropertyDescriptor(dog, 'name'); // 하나의 프로퍼티에 대해서만 받아옴.
console.log(desc);

Object.defineProperty(dog, 'name', {
  // propery descriptor 수정이 가능.
  value: '멍멍',
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name); // 멍멍
console.log(Object.keys(dog)); // [ 'emoji' ]
//열거 불가능하기 때문에 values, entries에도 포함되지 않는다.
delete dog.name; // 삭제가 불가능
console.log(dog.name); // 멍멍

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: '영희',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: '김',
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    // 객체에 대해서 get과 set을 만들 수도 있다.
    get() {
      return `${this.lastName} ${this.firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student); //{ firstName: '영희', lastName: '김' }
console.log(student.fullName); //김 영희
student.fullName = '김 밥';
console.log(student); // { firstName: '밥', lastName: '김' }
