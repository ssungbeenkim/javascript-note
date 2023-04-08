'use strict';

const animal = {
  name: 'dori',
  age: 3,
  sayHello: function () {
    console.log(this); // { name: 'dori', age: 3, sayHello: [Function: sayHello] }
  },
};

console.time('animal');
animal.sayHello();
console.timeEnd('animal');

const person = {
  name: 'John',
  age: 30,
  introduce() {
    console.log(this); // { name: 'John', age: 30, introduce: [Function: introduce] }
  },
};

console.time('person');
person.introduce();
console.timeEnd('person');

const obj = {
  name: '엘리',
  age: 'maybe 20',
  printName: () => {
    console.log(this.age); // undefined
    console.log(this.name); // undefined
    console.log(this); //글로벌 객체
  },
};
obj.printName();

/*
  
*/
