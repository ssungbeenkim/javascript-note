// 날짜의 기준은 UTC기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)
// UTC: Universal Time Coordinated https://www.ibm.com/docs/ko/i/7.3?topic=concepts-coordinated-universal-time
// mdn : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
console.log(typeof new Date()); // object
console.log(new Date()); // 2023-08-11T01:13:42.287Z
console.log(new Date('Jun 5, 2022')); // 2022-06-04T15:00:00.000Z
console.log(new Date('2022-12-17T03:24:00')); // 2022-12-17T03:24:00.000Z

console.log(Date.now()); // 1628626422287
console.log(Date.now() / 1000 / 60 / 60 / 24 / 365); // 1970 ~ 현재까지의 년도
console.log(Date.parse('2022-12-17T03:24:00'));

console.log('-------------------');

const now = new Date();
now.setFullYear(2023); // 인스턴스 메서드
now.setMonth(0); // 0부터 시작
now.setDate(1);
console.log(now.getFullYear()); // 2023
console.log(now.getMonth()); // 0
console.log(now.getDate()); //1
console.log(now.getDay()); // 0 일요일일부터, 1... 6: 토요일
console.log(now.getTime()); // 1672531200000
console.log(now);

console.log(now.toString()); // Sun Jan 01 2023 10:23:26 GMT+0900 (Korean Standard Time)
console.log(now.toDateString()); // Sun Jan 01 2023
console.log(now.toTimeString()); // 10:23:26 GMT+0900 (Korean Standard Time)
console.log(now.toISOString()); // ISO 8601 형식 2023-01-01T01:23:26.318Z
console.log(now.toLocaleString('en-US')); // 1/1/2023, 10:23:26 AM
console.log(now.toLocaleString('ko-KR')); // 2023. 1. 1. 오전 10:23:26

// date의 차이는 최신 날짜가 더 크다. 이를 통해 정렬을 하거나 여러 조건을 줄 수 있다.

{
  const a = '2023-01-01';
  const b = '2023-01-02';
  const c = '2023-01-03';
  const arr = [1, 3, 2, 4];
  const arrd = [a, c, b];
  console.log(arr.sort((a, b) => a - b));
  console.log(arrd.sort((a, b) => (a < b ? -1 : 1)));
  console.log(a > b);
}
