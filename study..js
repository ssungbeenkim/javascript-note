const a = '2023-01-01';
const b = '2023-01-02';
const c = '2023-01-03';
const arr = [1, 3, 2, 4];
const arrd = [a, c, b];
console.log(arr.sort((a, b) => a - b));
console.log(arrd.sort((a, b) => (a < b ? -1 : 1)));
console.log(a > b);
