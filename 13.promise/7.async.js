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

  Promise.all([aa(), bb(), cc()]).then(console.log);
}
