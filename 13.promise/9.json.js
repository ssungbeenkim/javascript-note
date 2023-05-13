// JSON: JavaScript Object Notation
// 서버와 클라이언트(브라우저, 모바일) 간의 HTTP 통신을 위한 오브젝트 형태의 텍스트 포맷
// stringify(object): JSON
// parse(JSON): object
const ellie = {
  name: 'ellie',
  age: 20,
  eat: () => {
    console.log('eat');
  },
};

// 직렬화 Serializing: 객체를 통신으로 주고받기 편한 형태의 문자열로 변환
const json = JSON.stringify(ellie);
console.log(ellie); // { name: 'ellie', age: 20, eat: [Function: eat] }
console.log(json); // {"name":"ellie","age":20} -> 함수는 포함되지 않는다!

/* object를 json으로 변환할 때는 객체의 property만, 데이터만 변환된다.  */

// 역직렬화 Deserializing: 문자열 데이터를 자바스크립트 객체로 변환
const obj = JSON.parse(json);
console.log(obj); // { name: 'ellie', age: 20 }
