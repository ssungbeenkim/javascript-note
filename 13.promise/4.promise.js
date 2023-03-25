/* 
프로미스는 무겁고 오래 걸리는 일이 있으면 코드 내부에서 조금 더 비동기적으로 처리할 수 있게 도와주는 역할을 한다. 
얼마나 걸릴지 모르겠지만, 일이 끝나면 약속했던 일(콜백)을 실행해 준다. 
그리고 오래 걸리는 그 일을 1.실패 또는 2.성공 또는 둘과 상관없이 끝나면 3.무조건 할일에 대해 
옵션을 줄 수가 있다. 
*/

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error('seconds가 0보다 작음'));
    }
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay(2)
  .then(() => console.log('타이머 완료!'))
  .catch(console.error)
  .finally(() => console.log('끝났다!'));
