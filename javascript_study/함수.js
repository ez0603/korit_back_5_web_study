function add(num1, num2) {
    console.log("num1: " + num1);
    console.log(`num2: ${num2}`) //  EL표현식 : 문자열 안에 변수 사용 가능
    console.log("aa" + num1 + "bb" + num2 + "cc" + num1);
    console.log(`aa${num1}bb${num2}cc${num1}`) // +를 안쓰고 EL표현식으로 사용 가능
    return num1 + num2; // return을 하고싶으면 넣고 안넣어도 상관 X
}

console.log(add(10, 20));

let addFunction = add;

console.log(add); // 자바스크립트는 함수 자체를 값(주소값)으로 씀, 함수를 변수에 담기 가능 -> [Function: add] 출력
console.log(addFunction); // [Function: add] 출력
console.log(addFunction(30, 40)); 

let user = {
    username: "junil",
    password: "1234",
    addFunction: function add(a, b) { // 함수의 이름을 변수명으로 변경 가능
        return a + b
    } 
}

console.log(user.addFunction(10, 20)); // 30 출력

// 익명 함수
let sub = function sub(a, b) {
    return a-b;
}

let result1 = sub(10, 5);
console.log(result1);

console.log(sub);

// 화살표함수(람다식)
// let div = function (a, b) {
//     return a / b;
// }
let div = (a, b) => {
    return a / b;
}

console.log(div(10, 5));

div = (a, b) => a / b; // 중괄호 생략하고 바로 값 리턴
console.log(div(20, 5));
console.log(div);