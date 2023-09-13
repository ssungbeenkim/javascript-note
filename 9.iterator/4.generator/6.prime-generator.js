const take = (n) =>
  function* (iterable) {
    let i = 0;
    for (let x of iterable) {
      if (i >= n) return;
      yield x;
      i++;
    }
  };

const pop = (iterator) => {
  const result = iterator.next();
  if (result.done) return;
  return [result.value, iterator];
};

const primes = () => sieve(drop(2, genNat()));

console.log([...take(100)(primes())]);
// [ 2, 3, 5, 7, 11, 13, 17, 19, 23 ]

function* sieve(nums) {
  const result = pop(nums);
  if (!result) return;
  const [n, rest] = result;
  yield n;
  yield* sieve(filter((x) => x % n !== 0, rest)); // n의 배수 제외한 수 다시 sieve
}

function* filter(p, xs) {
  // p 조건에 맞는 값을 하나씩 생성.
  for (const x of xs) if (p(x)) yield x;
}

function* genNat() {
  // natural numbers
  for (let i = 1; true; i++) yield i;
}

function* drop(n, iterable) {
  // n부터 시작하게 해줌.
  let i = 1;
  for (const val of iterable) {
    if (i >= n) yield val;
    else i++;
  }
}
