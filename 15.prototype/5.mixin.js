// 여러가지 기능을 함께 섞을 때 Mixin을 사용할 수 있다.
// 다중 상속이 허용되는 언어도 있지만 대부분 클래스를 상속하는 경우에 하나의 클래스만 상속이 가능하다.

// 오브젝트는 단 하나의 prototype을 가리킬 수 있다 (부모는 단 하나!)
// 하지만! 여러 객체의 함수들을 다중 상속하고 싶다면 Mixin을 사용할 수 있다.
const play = {
  play: function () {
    console.log(`${this.name} 놀아요!`);
  },
};

const sleep = {
  sleep: function () {
    console.log(`${this.name} 자요!`);
  },
};

function Dog(name) {
  this.name = name;
}

Object.assign(Dog.prototype, play, sleep);
// Dog.prototype에 play와 sleep을 할당.
const dog = new Dog('멍멍');
console.log(dog);
dog.play();
dog.sleep();

/* 클래스에서는? */
class Animal {}
class Tiger extends Animal {
  constructor(name) {
    super();
    this.name = name;
  }
}

Object.assign(Tiger.prototype, play, sleep);
// 클래스 또한 내부적으로 prototype으로 이루어져 있기 때문에 Mixin을 사용할 수 있다.
const tiger = new Tiger('어흥!');
tiger.play();
tiger.sleep();
