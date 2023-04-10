/* 
자바스크립트 초창기에는 생성자함수를 사용해서 비슷한 유형의 객체를 조금 더 편하게 만들 수 있었다. 
최신 자바스크립트와 타입스크립트에서는 프로토타입을 직접적으로 이용하지 않고 클래스를 이용하지만 
클래스는 프로토타입을 한단계 감싸는 synthetic sugar일 뿐 내부적으로는 프로토타입으로 동작한다.  */

// const dog1 = { name: '뭉치', emoji: '🐶' };
// const dog2 = { name: '코코', emoji: '🐩' };

function Dog(name, emoji) {
  this.name = name;
  this.emoji = emoji;
  // 인스턴스 레벨의 함수
  /* this.printName = () => {
    console.log(`${this.name} ${this.emoji}`);
  }; */
  // 만들어진 instance마다 이 함수를 동일하게 가지고 있게 된다. 메모리가 낭비될 수 있음.
}
// const dog1 = new Dog('뭉치', '🐶');
// const dog2 = new Dog('코코', '🐩');
// console.log(dog1, dog2);

// 프로토타입 레벨의 함수로 만들어 메모리를 절약할 수 있다.
Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};
const dog1 = new Dog('뭉치', '🐶');
const dog2 = new Dog('코코', '🐩');
console.log(dog1, dog2); // 만들어진 인스턴스에서 함수를 가지고 있지 않는다.
dog1.printName();
dog2.printName(); // 프로토타입에 등록되어 있기 때문에 함수 사용이 가능하다.
// 브라우저에서 해당 오브젝트를 출력해 보면 프로로타입을 가지고 있는 것을 확인 가능하다.

/* 클래스와 같이 오버라이딩도 가능하다. 
인스턴스 레벨에서(자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 됨) */
dog1.printName = function () {
  console.log('안녕!!');
};
dog1.printName();

// 정적 레벨, 클래스에서의 static 함수처럼 만들 수 있다.
Dog.hello = () => {
  console.log('Hello!');
};
// dog1.hello() // Error, 생성자 함수의 이름으로만 접근이 가능하다.
Dog.hello();
Dog.MAX_AGE = 20;
// 정적 레벨의 메서드와 속성을 정의하고 사용할 수 있다.
