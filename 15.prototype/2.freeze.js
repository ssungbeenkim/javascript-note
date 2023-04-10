/* 
객체 불변성
이전 노트에서 객체가 값만 가지고 있는 것이 아니라 discriptor 라는 객체를 가지고 있고 그 안에 
여러 속성을 가지고 있었다. 우리는 오브젝트의 불변성을 추구할 때 이것들을 활용할 수 있다. 
그러면 이것들을 세밀하게 조정할 때는 Object.defineProperty()을 사용하나? 
아니다. 유용하게 사용할 수 있는 함수가 있다. 오늘은 그 함수 3가지에 대해 알아보자. 
*/

// 동결! Object.freeze 추가 ❌, 삭제 ❌, 수정 ❌, 속성 재정의(define Property이용) ❌
// 단, 얕은 얼림이다.
const vincent = { name: 'vincent' };
const dog = { name: '와우', emoji: '🐶', owner: vincent };
Object.freeze(dog);
dog.name = '멍멍';
console.log(dog); //와우, 수정 불가
dog.age = 4;
console.log(dog); // 나이에 대한 정보가 추가되지 않았음.
delete dog.name;
console.log(dog); // 키 삭제 불가능
vincent.name = 'vincentKing';
console.log(dog); // vincent.name은 변경이 가능하다.
// 특정 객체를 얼려도 그 객체에서 참조하고 있는 객체는 얼려지지 않는다.

// 밀봉! Object.seal 값의 수정 ✅, 추가 ❌, 삭제 ❌, 속성 재정의 ❌
const cat = { ...dog };
//Object.assign(cat, dog); // 객체를 복사. spread 연산자와 동일하다. 1레벨 깊이에서 복사 수행
Object.seal(cat);
console.log(cat);
cat.name = '냐옹';
console.log(cat); // 수정이 가능
delete cat.emoji;
console.log(cat); // 삭제 안됨
vincent.name = 'jieun';
console.log(cat); // 1레벨에서 복사되었음
// 값만 수정하는 것이 다능하다.

/* freese, seal 되었는지 확인이 가능 */
console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions 추가 ❌
const tiger = { name: '어흥' };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = '어흐응';
console.log(tiger); //값의 수정 가능
delete tiger.name;
console.log(tiger); // 삭제도 가능
tiger.age = 1;
console.log(tiger); // 새로운 프로퍼티 추가가 불가능

// 특정 객체의 프로퍼티를 수정, 추가, 삭제,
