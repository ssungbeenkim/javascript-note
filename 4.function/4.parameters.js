// 매개변수의 기본값은 무조건 undefined
// 매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
// 매개변수 기본값 Default Parameters a = 1, b = 1
// arguments is an array-like object
function add(a = 1, b = 1) {
  console.log(a);
  console.log(b);
  console.log(arguments); // [Arguments] {}
  console.log(arguments[1]); // undefined
  console.log(a + b);
  return a + b;
}
add();
console.log('------');
add(1, 2, 3, 4, 5, 6, 7, 8, 9);
/* 
------
1
2
[Arguments] {
  '0': 1,
  '1': 2,
  '2': 3,
  '3': 4,
  '4': 5,
  '5': 6,
  '6': 7,
  '7': 8,
  '8': 9
}
2
3
*/

console.log('------');

// Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers) {
  console.log(a);
  console.log(b);
  console.log(numbers); // [ 3, 4, 5, 6, 7, 8 ]
  console.log(arguments); /* 
  [Arguments] {
    '0': 1,
    '1': 2,
    '2': 3,
    '3': 4,
    '4': 5,
    '5': 6,
    '6': 7,
    ' */
}
sum(1, 2, 3, 4, 5, 6, 7, 8);
