/* 객체지향의 가장 큰 특징 중의 하나는 상속을 통한 코드의 재사용성이라고 할 수 있다.  
프로토타입을 활용해서 상속을 구현해보자. 
브라우저에서 상속관계를 확인해보며 진행해보도록 하자. */

function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  // Animal을 상속해서 printName 함수를 재사용 할 수 있게 해보자.
  Animal.call(this, name, emoji);
  // 클래스에서의 super(name, emoji)와 비슷하다.
  // Animal생성자 함수의 call()을 사용하여
  // Dog의 this를 활용해서 name, emoji를생성자 함수에 등록하도록 한다.
  this.owner = owner;
}
// Dog.prototype = Object.create(Object.prototype);
// 기본적으로는 Dog의 프로토타입은 Object를 상속
Dog.prototype = Object.create(Animal.prototype);
// 인자로 전달한 프로토타입을 베이스로 새로운 오브젝트를 만들어줌

Dog.prototype.play = () => {
  console.log('같이 놀자옹!');
};

const dog1 = new Dog('멍멍', '🦮', 'vincent');
console.log(dog1); // 브라우저 출력시 Dog => Animal => Object의 상속관계 확인.
dog1.play();
dog1.printName(); // Animal.call() 해주지 않으면 undefined가 출력된다.

function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}

Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log('사냥하자! ..🐇..');
};

const dog1 = new Dog('멍멍', '🐶', '엘리');
dog1.play();
dog1.printName();
const tiger1 = new Tiger('어흥', '🐯');
tiger1.printName();
tiger1.hunt();
/* 이렇게 상속을 구현해 보았다. 복잡하다. 최신 자바스크립트에서 제공하는 클래스를 활용하자. */

/* 상속도 확인하기 */
console.log(dog1 instanceof Dog); // true
console.log(dog1 instanceof Animal); // true
console.log(dog1 instanceof Tiger); // f
console.log(tiger1 instanceof Dog); //f
console.log(tiger1 instanceof Animal); //t
console.log(tiger1 instanceof Tiger); //t
