/* 
프로미스는 무겁고 오래 걸리는 일이 있으면 코드 내부에서 조금 더 비동기적으로 처리할 수 있게 도와주는 역할을 한다. 
얼마나 걸릴지 모르겠지만, 일이 끝나면 약속했던 일(콜백)을 실행해 준다. 프린터기를 떠올려 볼 수 있다. 
그리고 오래 걸리는 그 일의 결과에 따라( 1.실패 또는 2.성공 또는 둘과 상관없이 끝나면 3.무조건 할일에 대해 
)실행할 일을 각각 등록해 줄 수 있다. 
*/

/* unhandled promise rejection은 안나올 수 있음 */

/* 참고로 프로미스의 then은 Micro task queue로 간다.  */

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    /* resolve는 then을 호출할 때, reject는 catch에서 사용할 콜백이다. */
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음')); // reject를 할 때는 error 객체를 전달해야 한다.
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(0) // 함수를 호출하면 즉각적으로 프로미스 객체를 리턴한다.
  .then(() => console.log('타이머 완료!')) // 프로미스 객체를 통해 성공, 실패를 알려주고, 그에 따른 콜백을 수행.
  .catch(console.error) // catch 해주지 않으면 에러는 아니지만 warning이 출력된다. unhandled promise rejection!
  .finally(() => console.log('끝났다!'));
/* 프로미스를 활용하면 try catch 콜백함수 전달 등의 복잡해보이는 문법 대신 함수형 프로그래밍과 같은 
깔끔한 문법으로 작성이 가능하다.  */
