// Bubbling up, Propagating 🧼

// 에러는 최종적으로 호출한 곳까지 전달된다.
function a() {
  throw new Error('error!');
}

function b() {
  try {
    a();
  } catch (error) {
    console.log('생각해보니깐 이 에러는 내가 핸들링 할 수 없을 것 같군!');
    throw error; // 잡은 에러를 핸들린 하지 않고 에러를 다시 던진다.
  }
}

function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log('Catched!');
}
console.log('done!');
