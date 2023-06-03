/* 합수 합성 
함수 합성이란 두 개의 함수를 하나의 함수로 결합하는 것이다. 
*/

// 함수 합성의 예시
const funcA = (x) => x + 1;
const funcB = (x) => x * 2;
const c2 = (funcA, funcB) => (x) => funcA(funcB(x));
// 두 함수를 합성함수로 결합하는 함수 c2를 정의한다. c2는 함수를 반환한다. 반환된 함수는 인자로 받은 두 함수를 합성한 함수이다.

// 이렇게 사용할 수 있다.
const imagify = (str) =>
  str.replace(/!\[([^\]"<]*)\]\(([^)<"]*)\)/g, '<img src="$2" alt="$1" />');
const linkify = (str) =>
  str.replace(
    /\[([^\]"<]*)\]\(([^)<"]*)\)/g,
    '<a href="$2" rel="noopener nowfollow">$1</a>'
  );

const linkifyAndImagify = c2(linkify, imagify);
// 위 함수는 아래의 것과 동일하게 작동한다.
const linkifyAndImagify2 = (str) => linkify(imagify(str));

// 두개 이상의 함수를 합성하고 싶다면 어떻게 해야 할까?
const emphasize = (str) => str.replace(/_([^_]*)_/g, '<em>$1</em>');
const processComment = c2(linkify, c2(imagify, emphasize));
// 이렇게 해 볼 수 있다. 위의 함수는 아래와 같이 직접 합성한 것과 동일하게 동작한다.
const processComment2 = (str) => linkify(imagify(emphasize(str)));

/* Compose */
const compose =
  (...fns) =>
  (x0) =>
    fns.reduceRight((x, f) => f(x), x0);
// 함수 합성을 위한 compose 함수를 정의한다. compose 함수는 함수를 반환한다. 반환된 함수는 인자로 받은 함수들을 합성한 함수이다.
// 후에 받은 함수부터 실행되도록 하기 위해 reduceRight를 사용했다.

// 사용 예제.
const headalize = (str) => str.replace(/^###\s+([^\n<"]*)/gm, '<h3>$1</h3>');
const processComment3 = compose(linkify, imagify, emphasize, headalize);
// 아래와 같다.
const processComment4 = (str) => linkify(imagify(emphasize(headalize(str))));
// ? 마지막에 전달된 것이 먼저 실행된다는 점이 어색하게 느껴질 수 있다.

// 조금 더 자연스럽게 만들어보자. 데이터의 흐름이 위에서 아래로 흐르는 것처럼 만들기

/* Flow */
const flow =
  (...fns) =>
  (x0) =>
    fns.reduce((x, f) => f(x), x0); // 방향이 왼쪽에서 오른쪽으로 흐르기 때문에 flow라고 부른다.

// 이렇게 사용해 볼 수 있다.
const codify = (str) => str.replace(/`([^`<"]*)`/g, '<code>$1</code>');
const processComment5 = flow(headalize, emphasize, imagify, linkify, codify);
// flow는 왼쪽에서 오른쪽으로 함수를 수행. 문자열에서 시작해 headalize(), emphasize(),
// imagify(), linkify(), 마지막으로 codify()를 수행한 뒤 문자열을 반환한다.

// flow()는 확실히 더 깔끔하고 이해하기도 좋다.

// 이 함수를 재사용할 필요 없이 단 한번만 사용해야 한다면? 즉시 실행 시킬 수 있다.
{
  const commentStr = `alskdjlfkj`;
  const processedComment = flow(
    headalize,
    emphasize,
    imagify,
    linkify,
    codify
  )(commentStr);
} // 하지만 이중 괄호는 못생겼다.

// 이를 해결하기 위해 Pipe를 사용할 수 있다.
const pipe = (x0, ...fns) => fns.reduce((x, f) => f(x), x0);
/* 
flow() 와 pipe() 
pipe() 함수는 flow()와 다른 두가지 중요한 포인트가 있다. 
1. pipe()는 함수가 아닌 값을 반환한다. 다시 말해서, flow()는 항상 함수를 반환하는 반면 pipe()는 모든 종류의 값을 반환할 수 있다. 
2. pipe()에서 첫 번째 인수는 함수에 전달하려는 값이다. flow()에서는 첫 번째 인수가 함수에 전달되는 값이 아니라 첫 번째 함수이다.
*/

// pipe() 유용한 사용 예제
// 처리한 문자열 배열이 있다고 가정하고, 배열에서 작동하는 몇가지 유틸리티 함수를 정의한다.
const map = (f) => (arr) => arr.map(f);
const filter = (p) => (arr) => arr.filter(p);
const take = (n) => (arr) => arr.slice(0, n);
const join = (s) => (arr) => arr.join(s);

//문자열에서 사용되는 몇 가지 유틸리티 함수도 정의한다.
const itemize = (str) => `<li>${str}</li>`;
const orderedListify = (str) => `<ol>${str}</ol>`;
const chaoticListify = (str) => `<ul>${str}</ul>`;
const mentionsNazi = (str) => /\bnazi\b/i.test(str);

// 두 함수들을 조합해서 pipe()에 넣어보자.
const comments = pipe(
  commentStrs,
  filter(noNazi),
  take(10),
  map(emphasize),
  map(itemize),
  join('\n')
);

// 넓은 시각에서 보면 배열 메서드 체이닝과 크게 다르지 않다.
const comments2 = commentStrs
  .filter(noNazi)
  .slice(0, 10)
  .map(emphasize)
  .map(itemize)
  .join('\n');

// pipe()함수는 체이닝 방식보다 좋은 점이 있다. 파이프의 값을 함수에 사용하지 않더라도 함수를 파이프라인에 추가할 수 있다.
const comments3 = pipe(
  commentStrs,
  filter(noNazi),
  take(10),
  map(emphasize),
  map(itemize),
  join('\n'),
  chaoticListify
);
/* chaoticListify() 함수를 추가했다. 이런 식으로 필요하다면 파이프라인에 함수를 계속해서 추가할 수 있다.
그리고 이 방식으로 전체 어플리케이션 구축이 가능하다.  */

// 풀어서 작성하면 아래와 같이 작성이 가능하다.
const withoutNazis = commentStrs.filter(noNazi);
const topTen = withoutNazis.slice(0, 10);
const itemizedComments = topTen.map(itemize);
const emphasizedComments = itemizedComments.map(emphasize);
const joinedList = emphasizedComments.join('\n');
const comments4 = chaoticListify(joinedList);
// 6번의 선언으로 작성되었다.

/*  왜 pipe()를 귀찮게 사용하는가?
변수 할당을 통해 작성된 경우 총 6개의 선언(statement)을 작성한다. 
pipe()로 작성된 경우 전체를 표현(expression)으로 합성했다.(표현을 통한 코딩은 함수형 프로그래밍의 핵심)
일련의 선언으로 코드를 작성하는 것은 사고의 전환을 조장하지 않는다. 
상위 레벨의 의도를 변경하지 않고 구현 세부 정보를 변경할 수 있다. 
 */

// 예를 들어, 아래와 같이 헬퍼함수의 구현사항을 다르게 구현할 수도 있다. (실행 결과는 동일하다.)
// 파이프라인의 코드는 그대로 두어도 정확히 동일하게 동작하게 된다.
{
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
}

/* 참고자료 
함수 합성 https://velog.io/@nittre/JavaScript-%ED%95%A8%EC%88%98-%ED%95%A9%EC%84%B1Function-Composition 
함수 합성 조금 더 전문적인 글 https://jrsinclair.com/articles/2022/javascript-function-composition-whats-the-big-deal/#flow 
 */
{
  // 연습코드
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
}
