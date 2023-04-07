function loop() {
  const array = [];
  // var i; => 이렇게 선언해 두는 것과 동일하게 작동한다.
  for (var i = 0; i < 5; i++) {
    array.push(function () {
      console.log(i);
    });
  }
  return array;
}

const array = loop();
array.forEach((func) => func()); // 5 5 5 5 5

/* 
var로 선언된 변수는 함수 스코프만 된다. 안된다. 따라서 var로 선언된 변수는 
loop() 스코프에서 1->5로 바뀌게 된다. 결국 array가 리턴 될 때 array 안의 요소로 들어있는 
i를 출력하는 함수는 loop()함수 스코프와 함께 최종적으로 변경된 i의 정보를 출력하게 된다. 
*/
