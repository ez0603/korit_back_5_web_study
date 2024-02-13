// const { reject } = require("async");

console.log(1);
console.log(2);
console.log(3); // 동기처리

setTimeout(() => { // setTimeout = 몇초 뒤 출력하게 할 수 있음
    console.log(4);
    setTimeout(() => {
        console.log(5)
    }, 2000);
}, 3000); // 3000 = 3초, 3초 뒤에 실행 -> 비동기 처리
// -> 3초뒤에 4출력 , 4출력된 후 2초 후 5출력
console.log(5);

new Promise((resolve, reject) => { // Promise(비동기) = 매개변수로 resolve, reject를 받음
    setTimeout(() => {
        console.log("1번");
    }, 2000);
    resolve("3번"); // resolve = then 안에 들어있는 함수 호출
}).then((result) => {
    console.log(result);
}); // Promise = 

console.log("2번"); // Promise가 비동기 이기때문에 1번,3번보다 2번 먼저 출력

// Promise를 쓰는 이유 : 
console.log("프로그램 시작");

const p = new Promise((resolve, reject) => { // Promise의 정의
    console.log("여기서");
    console.log("여기까지"); 
    if(0 === 0) {
        resolve();
    } else { // then 부분이 실행되는게 아닌 catch 부분이 실행
        reject(new Error("오류입니다."));
    }
});

p.then(() => { // p라는 비동기가 끝나고 resolve가 호출 되었을 때 실행
    console.log("3초 뒤에 출력");
}).catch((error) => { // reject가 호출되면 catch
    console.log(error);
}).finally(() => {

});

console.log("여기가 먼저");