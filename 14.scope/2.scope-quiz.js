{
  // 블럭 밖에서는 내부를 참조할 수 없다.
  const x = 1;
  {
    const y = 2;
    console.log(x); //1
  }
  console.log(x);
  console.log(y); // app crushed
}

// 현재 블럭에 변수가 없으면 가장 가까운 상위 블럭에 있는 변수를 참조한다.

const text = 'global'; // 글로벌 변수, 글로벌 스코프
{
  const text = 'inside block1'; // 로컬변수, 로컬스코프
  {
    const text = 'inside block2';
    console.log(text); // inside block1
  }
}
