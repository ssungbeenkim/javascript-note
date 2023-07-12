const obj = {
  a: 'a',
  b: { c: 'c' },
};

console.log(obj.b.d === 'c'); // false
console.log(obj.c); // undefined
console.log(obj.a.b); // undefined
// console.log(obj.c.d); // Error

const obj2 = {};

console.log(obj2.a); // undefined
// console.log(obj2.a.b); // Error

// undefined.something => 객체가 아닌 것에서 찾으려 하면 에러가 난다.
console.log(obj2?.a?.b); // undefined (optional chaining)

//!
const obj3 = { a: null };
console.log(obj3.a);
console.log(typeof obj3.a); // object
// console.log(obj3.a.b); // Error -> null의 타입은 object이지만 이렇게 접근은 허용하지 않는다.
