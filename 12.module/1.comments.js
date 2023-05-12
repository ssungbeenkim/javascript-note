// 주석 Comments
// 한줄 짜리 주석을 작성할 떄 씀
// TODO(엘리): 해야할 일을 작성
// TODO(엘리): XX기능 구현하기

/**
 * 주석은 코드 자체를 설명하는 것이 아니라,
 * 왜(WHY)와 어떻게(HOW)를 설명하는것이 좋음
 * (단, 정말 필요한 경우에만)
 */

// 외부에서 많이 쓰이는 함수 API인 경우 JSDoc을 사용하면 좋음
// JS Doc: https://github.com/jsdoc/jsdoc
// 함수 위에서 /** 를 입력하면 자동으로 주석 생성됨
// 추후에 커맨드라인을 사용하여 문서를 만들 수도 있다.
/**
 * @param {*} a 숫자 1
 * @param {*} b 숫자 2
 * @returns a와 b를 더한값
 */
function add(a, b) {
  return a + b;
}
[].map;
