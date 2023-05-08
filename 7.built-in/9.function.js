/* 함수가 가지고 있는 기본 메서드 
call, apply, bind */
// https://www.zerocho.com/category/JavaScript/post/57433645a48729787807c3fd

// 함수를 호출하는 방법 세가지
var example = function (a, b, c) {
  return a + b + c;
};
example(1, 2, 3);
example.call(null, 1, 2, 3);
example.apply(null, [1, 2, 3]);

// null은 this를 대체하고 있는 것이다.

var obj = {
  string: 'zero',
  yell: function () {
    alert(this.string);
  },
};
var obj2 = {
  string: 'what?',
};
obj.yell(); // 'zero';
obj.yell.call(obj2); // 'what?'

// 마지막 줄에서 obj.yell.call(obj2)를 호출하면 obj2의 string이 출력된다.
// 다른 객체의 함수를 자기 것처럼 사용할 수 있다.

function example() {
  console.log(arguments);
}
example(1, 'string', true); // [1, 'string', true]

// arguments는 함수 안에서 사용할 수 있는 지역변수이다.
// 함수를 호출할 때 넣어준 인자들이 배열 형태로 arguments에 저장된다.

function example2() {
  console.log(arguments.join());
}
example2(1, 'string', true); // Uncaught TypeError: arguments.join is not a function
// arguments는 유사배열이므로 배열 메서드를 사용할 수 없다.

function example3() {
  console.log(Array.prototype.join.call(arguments));
}
example3(1, 'string', true); // '1,string,true'
// 배열의 prototype에 있는 join 메서드를 빌려와서 사용할 수 있다.

var obj = {
  string: 'zero',
  yell: function () {
    alert(this.string);
  },
};
var obj2 = {
  string: 'what?',
};
var yell2 = obj.yell.bind(obj2);
yell2(); // 'what?'

// bind는 함수를 호출하지 않고 this로 사용할 객체만 전달해준다.

/* call, apply, bind의 차이점
call과 apply는 모두 함수를 호출하는 메서드이다.
첫번째 인자로는 함수 내부에서 this로 사용할 객체를 넣어준다.
call은 그 뒤로는 함수에 넣을 인자를 콤마로 구분해서 넣어준다.
apply는 그 뒤로는 함수에 넣을 인자를 배열로 묶어서 넣어준다.
bind는 함수를 호출하지 않고 this로 사용할 객체만 전달해준다.
그리고 나중에 함수를 호출할 때 사용할 인자들을 미리 넣어줄 수 있다. */
