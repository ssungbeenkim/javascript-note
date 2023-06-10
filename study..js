function* drop(n, iterable) {
  //
  let i = 1;
  for (const val of iterable) {
    console.log(i, val);
    if (i >= n) yield val;
    else i++;
  }
}

function* genNat() {
  // natural numbers
  for (let i = 1; true; i++) yield i;
}

const test = drop(2, genNat());

console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
console.log(test.next());
