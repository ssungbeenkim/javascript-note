function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍌');
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('🍎');
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error('no orange'));
}

// 바나나와 사과를 같이 가지고 오기
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

// Promise.all 병렬적으로 한번에 모든 Promise들을 실행!
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log('all', fruits));

// Promise.race 주어진 Promise중에 제일 빨리 수행된것만 반환한다.
Promise.race([getBanana(), getApple()]) //
  .then((fruit) => console.log('race', fruit));

// 에러가 발생하는 것을 함께 all 로 묶어서 실행하면 unhandled promise rejection 출력이 되고,
// then이 호출되지 않는다.
Promise.all([getBanana(), getApple(), getOrange()])
  .then((fruits) => console.log('all-error', fruits)) // 출력되지 않음.
  .catch(console.log); // 에러 캐치는 출력이 되지만 3가지 모두 resolve가 아니면 then은 출력되지 않는다.

// 성공하든 실패하든 모든 결과를 배열로 묶어서 리턴해 준다.
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log('all-settle', fruits))
  .catch(console.log);
/* all-settle [
  { status: 'fulfilled', value: '🍌' },
  { status: 'fulfilled', value: '🍎' },
  {
    status: 'rejected',
    reason: Error: no orange */
