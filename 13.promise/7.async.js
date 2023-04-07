/* 
getBanana() 
  .then((banana) =>
    getApple() 
      .then((apple) => [banana, apple])
  )
  .then(console.log); 
*/ // 이건 callback hell 이나 다름 없다.

/* 이전 promise.all() 에서 then을 체이닝 하는 과정에서 복잡해지는 것을 볼 수 있었다. 
비동기적인 코드를 동기적으로 사용할 수 있는 방법이 있다. 
async await을 활용해 동기적인 코드처럼 보이지만 비동기적인 코드를 작성할 수 있다. 
 */

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

// 바나나과 사과를 같이 가지고 오기
async function fetchFruits() {
  // async를 붙인 함수 또한 Promise를 리턴한다.
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits() //
  .then((fruits) => console.log(fruits));

// 지금까지의 연습을 하며 익숙해지기
{
  function aa() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('a');
      }, 1000)
    );
  }

  function bb() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('b');
      }, 1000)
    );
  }

  function cc() {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('c');
      }, 1000)
    );
  }

  async function getAbc() {
    const a = await aa();
    const b = await bb();
    const c = await cc();
    return [a, b, c];
  }

  getAbc().then(console.log);

  Promise.all([aa(), bb(), cc()]).then(console.log); // 이건 병렬적으로 수행됨
}
