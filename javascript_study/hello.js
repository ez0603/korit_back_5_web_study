// node.js 설치 LTS
// 코드 실행 단축키 ctrl + alt + n
// << 자바스크립트 >>

// 베이스 문법 -> 자바
// 타입리스

var num = 10;
num = "안녕";
console.log(num);

// object num = 10; -> 자바에서
// num = "안녕";

// typeof 키워드

// 값이 들어가는 순간 (타입이)정의됨 = 자바스크립트
console.log(typeof(10)); // -> number 타입은 정수,실수 구분 X
console.log(typeof("10")); // -> string 타입
console.log(typeof(true)); // -> boolean 타입
var n;
console.log(typeof(n)); // -> undefined 타입 (선언은 했지만 타입이 정의 되지 않음, 값 X)
console.log(n); // -> undefined 타입
n = null;
console.log(typeof(n)); // -> object 타입
console.log(n); // -> null 출력
console.log(() => {}); // [Function (anonymous)] 타입 익명함수 (화살표함수 람다식)
