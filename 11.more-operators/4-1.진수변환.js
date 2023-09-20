// * javascriptd에서 진수 표현
// - 2진수, 8진수, 16진수를 사용할 때는 0b, 0o, 0x를 붙여준다.
const aa = 0b11; // 2진법(binary) # (1*2) + (1*1) = 3
console.log(aa); // 출력: 3

const bb = 0o11; // 8진법(octal) # (1*8) + (1*1) = 9
console.log(bb); // 출력: 9

const cc = 11; // 10진법(decimal) # (1*10) + (1*1) = 11
console.log(cc); // 출력: 11

const dd = 0x11; // 16진법(hexadecimal) # (1*16) + (1*1) = 17
console.log(dd); // 출력: 17

// - n진수로 출력하고 싶을 때는 toString(n)을 사용한다. 0b, 0o, 0x는 붙지 않는다.
// (그냥 console.log()를 사용하면 10진수로 출력된다.)
console.log(dd.toString(16)); // 출력: 11
console.log(dd.toString(8)); // 출력: 21
console.log(dd.toString(2)); // 출력: 10001

// parseInt() 함수를 사용하면 n진수를 10진수로 변환할 수 있다.
console.log(parseInt('11', 2)); // 출력: 3
console.log(parseInt('11', 8)); // 출력: 9
console.log(parseInt('11', 10)); // 출력: 11
console.log(parseInt('11', 16)); // 출력: 17

// * 진수변환

// 10진수를 다른 진수로 변환하는 방법은 다음과 같다.

// 1. 10진수 -> 2진수
console.log((11).toString(2)); // 출력: 1011

// 2. 10진수 -> 8진수
console.log((11).toString(8)); // 출력: 13

// 3. 10진수 -> 16진수
console.log((11).toString(16)); // 출력: b

// 다른 진수로 표햔된 문자열 수를 10진수 수로 변환하는 방법은 다음과 같다.

// 4. 2진수 -> 10진수
console.log(parseInt('1011', 2)); // 출력: 11

// 5. 8진수 -> 10진수
console.log(parseInt('13', 8)); // 출력: 11

// 6. 16진수 -> 10진수
console.log(parseInt('b', 16)); // 출력: 11

// 7. 2진수 -> 8진수
console.log(parseInt('1011', 2).toString(8)); // 출력: 13

// 8. 2진수 -> 16진수
console.log(parseInt('1011', 2).toString(16)); // 출력: b

// 9. 8진수 -> 2진수
console.log(parseInt('13', 8).toString(2)); // 출력: 1011

// 10. 8진수 -> 16진수
console.log(parseInt('13', 8).toString(16)); // 출력: b

// 11. 16진수 -> 2진수
console.log(parseInt('b', 16).toString(2)); // 출력: 1011

// 12. 16진수 -> 8진수
console.log(parseInt('b', 16).toString(8)); // 출력: 13
