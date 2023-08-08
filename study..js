const obj = { a: 'a', b: 'b', c: 'c' };

function printAll(obj) {
  const { a, b, c } = obj;
  console.log(a, b, c);
}

printAll(obj);
