// 자바스크립트 배열은 자바의 ArrayList와 유사

let numbers1 = []; // 빈 배열 / 배열안에 직접 값을 넣어서도 사용 가능
let numbers2 = new Array(); // 빈 배열

numbers1.push(10);
console.log(numbers1);
numbers1.push(20);
console.log(numbers1);
console.log(numbers1[0]);
numbers1[0] = 30;
console.log(numbers1);
numbers1[2] = 50;
console.log(numbers1);
numbers1[5] = 100;
console.log(numbers1);
console.log(numbers1[3]);

for(let i = 0; i < 10; i++) {  // i < numbers.lenght 가능
    console.log(numbers1[i]); // 빈 인덱스에는 undefined, 인덱스 초과 오류 X
}

// 향상된 for문
for(let num of numbers1) { // 마지막 값이 들어있는 곳 까지만 반복 
    console.log(num);
}

numbers1.forEach(n => console.log(n)); // undefined 무시하고 출력


