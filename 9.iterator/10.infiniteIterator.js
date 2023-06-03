const pipe = (x0, ...fns) => fns.reduce((x, f) => f(x), x0);

function* scanl(reducer, initalVal, iterator) {
  let b = initalVal;
  yield b;
  for (const x of iterator) {
    b = reducer(b, x);
    yield b;
  }
}

function* repeat(val) {
  while (true) {
    yield val;
  }
}

const add = (a, b) => a + b;
const genNat = pipe(repeat(1), (ones) => scanl(add, 0, ones));

const take = (n) =>
  function* (iterable) {
    let i = 0;
    for (let x of iterable) {
      if (i >= n) return;
      yield x;
      i++;
    }
  };
