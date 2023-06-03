const pipe = (x0, ...fns) => fns.reduce((x, f) => f(x), x0);
const commentStrs = ['asd', 'asdf', 'asdf2', 'lwkjeewa', 'wlwakejrlk'];

const map = (f) =>
  function* (iterable) {
    for (let x of iterable) yield f(x);
  };

const filter = (p) =>
  function* (iterable) {
    for (let x of iterable) {
      if (p(x)) yield x;
    }
  };
const take = (n) =>
  function* (iterable) {
    let i = 0;
    for (let x of iterable) {
      if (i >= n) return;
      yield x;
      i++;
    }
  };
const join = (s) => (iterable) => [...iterable].join(s);

const comments = pipe(
  commentStrs,
  filter(lessThen5),
  map(emphasize),
  map(itemize),
  join('\n')
);

function lessThen5(str) {
  if (str.length < 5) {
    return true;
  } else {
    return false;
  }
}

function emphasize(str) {
  return str.toUpperCase();
}

function itemize(str) {
  return `<li>${str}</li>`;
}

console.log(comments);
