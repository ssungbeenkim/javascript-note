/* 
이전 노트에서 객체가 값만 가지고 있는 것이 아니라 discriptor 라는 객체를 가지고 있고 그 안에 
여러 속성을 가지고 있었다. 우리는 오브젝트의 불변성을 추구할 때 이것들을 활용할 수 있다. 
이것들을 세밀하게 조정할 때는 Object.defineProperty()를 사용하는 것이 아니라 
유용하게 사용할 수 있는 함수가 있다. 
*/

// 동결! Object.freeze 추가 ❌, 삭제 ❌, 쓰기 ❌, 속성 재정의 ❌
// (단, 얕은 꽁꽁 얼림!)
const ellie = { name: '엘리' };
const dog = { name: '와우', emoji: '🐶', owner: ellie };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
ellie.name = '엘리얌';
console.log(dog);

// 밀봉! Object.seal 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
//Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions 추가 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
