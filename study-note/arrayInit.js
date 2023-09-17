let list1 = new Array(4).map(() => 1);
// empty인 경우 순회 대상이 되지 않는다.
console.log(list1); // [ <4 empty items> ]

console.log('------------------1');
// 할당된 undefined는 순회 대상이 된다.
let list2 = new Array(4).fill(undefined).map(() => 1);
console.log(list2); // [ 1, 1, 1, 1 ]

console.log('------------------2');

let list3 = new Array(4).fill(null).map(() => 1);
// null은 object이므로 순회 대상이 된다.
console.log(list3); // [ 1, 1, 1, 1 ]
