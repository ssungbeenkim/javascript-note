function a() {
  console.log('a');
  for (let i = 0; i < 100000; i++) {}
  console.log('return');
  return 1;
}

function b() {
  console.log('b');
  return a() + 1;
}

function c() {
  console.log('c');
  return b() + 1;
}

console.log('시작했다!');
const result = c();
console.log(result);
