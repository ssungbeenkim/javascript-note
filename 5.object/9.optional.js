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
