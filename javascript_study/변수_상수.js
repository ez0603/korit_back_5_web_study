// 변수 var, let
// 상수 const

var num1 = 10;
var num2 = 20;

console.log(num1 + num2); 

// 호이스팅 : 메모리 참조 이전에 선언이 무조건 먼저 일어나는 현상 (대입은 나중 -> console.log(num1 + num2);이 위에 있어도 var num3 = 40;이 먼저)
console.log(num1 + num3); // NaN
var num3 = 40; 
console.log(num3);
// var num3 = "안녕"; -> 변수의 선언은 한번만 가능해야하지만 var을 쓰면 오류가 뜨지 않기 때문에 쓰지않음
// console.log(num3);

// let은 호이스팅 불가능
// console.log(num4);
let num4 = 10;
num4 = 20;
console.log(num4);

// 상수 -> 값 변경 불가능
const num5 = 30;
// num5 = 40;
console.log(num5);