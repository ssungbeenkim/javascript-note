/* 
프로미스는 무겁고 오래 걸리는 일이 있으면 코드 내부에서 조금 더 비동기적으로 처리할 수 있게 도와주는 역할을 한다. 
얼마나 걸릴지 모르겠지만, 일이 끝나면 약속했던 일(콜백)을 실행해 준다. 
그리고 오래 걸리는 그 일의 결과에 따라( 1.실패 또는 2.성공 또는 둘과 상관없이 끝나면 3.무조건 할일에 대해 
)실행할 일을 각각 등록해 줄 수 있다. 
*/

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    /* resolve는 then을 호출할 때, reject는 catch에서 사용할 콜백이다. */
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2) // 함수를 호출하면 즉각적으로 프로미스 객체를 리턴한다.
  .then(() => console.log('타이머 완료!')) // 프로미스 객체를 통해 성공, 실패를 알려주고, 그에 따른 콜백을 수행.
  .catch(console.error)
  .finally(() => console.log('끝났다!'));
/* 프로미스를 활용하면 try catch 콜백함수 전달 등의 복잡해보이는 문법 대신 함수형 프로그래밍과 같은 
깔끔한 문법으로 작성이 가능하다.  */
