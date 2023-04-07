/* 
프로토타입이란 일반적으로 '원형'이라는 의미로 쓰인다. 
자바스크립트에서는 객체지향 프로그래밍을 위해서 프로토타입을 이용하고 있다. 
대부분의 객체지향 언어에서는 객체지향 프로그래밍을 위해 클래스를 이용하지만 자바스크립트는 프로토타입을 이용한다.
물론 최근에는 클래스가 추가되었지만 일종의 synthetic sugar일 뿐, 근본적으로는 prototype을 활용한다. 
그래서 자바스크립트의 내부 동작 원리를 이해하는데 있어 prototype에 대한 이해가 중요하다. 
 */

const dog = { name: '와우', emoji: '🐶' };

console.log(Object.keys(dog));
console.log(Object.values(dog));
console.log(Object.entries(dog));

console.log('name' in dog);
console.log(dog.hasOwnProperty('name'));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const desc = Object.getOwnPropertyDescriptor(dog, 'name');
console.log(desc);

Object.defineProperty(dog, 'name', {
  value: '멍멍',
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(dog.name);
console.log(Object.keys(dog));
delete dog.name;
console.log(dog.name);

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
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(' ');
    },
    configurable: true,
  },
});
console.log(student);
