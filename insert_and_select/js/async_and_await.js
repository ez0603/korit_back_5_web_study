async function fx1() { // 비동기 먼저 실행
    console.log("fx1 비동기 호출");
    return 10;
    // throw new Error(); // throw = 예외를 강제로 발생(async의 reject)
} // async를 쓰면 resolve를 호출해 주지 않아도 이미 처리 되어있음 -> return이 없어도 then이 호출됨

async function fx2(num) {
    console.log("fx2 비동기 호출");
    console.log(num + "출력");
}

async function fx3() { // await = async함수 안에서만 사용 가능
    let arg = 0;
    // fx1().then((result) => {
    //     arg =result;
    //     console.log(arg);
    //     fx2(arg); // fx2가 then 밖에 있으면 동기처리 되기 때문에 값이 0이 먼저 출력됨 -> 값 10을 넣어주기 위해서는 then 안에 있어야함
    // });
    let fx1Resutl = await fx1(); // await = fx1의 return값을 바로 fx1Resutl에 담아줌, await을 안달아주면 promis(fx1) 출력 / await = fx1의 비동기가 끝이 날 때 까지 기다려줌(비동기를 동기로 바꿔주는 것)
    arg = fx1Resutl;
    fx2(arg);
    
}

async function handleSubmitClick2() { // async를 해줌으로써 동기 처리됨
    await fx3();
    
    // fx1().then((result) => {
    //     console.log("then 호출");
    //     console.log(result);
    //     // fx1의 리턴값 10을 콘솔에 찍고싶을때는 함수.then을 해준다
    // }).catch(() => {
    //     console.log("오류생성"); // async안에서의 reject
    // }) 

    // console.log("동기 실행"); // 비동기 처리된 then 보다 먼저 출력됨
    
    // console.log(fx1()); // fx 함수에 async를 달아주면 return이 promise 타입 / fx1를 console에 찍어보면 리턴 값 10이 아닌 promise 출력
}

function handleSubmitClick() {
    const p1 = new Promise((resolve, reject) => { // Promise = 생성되자 마자 실행
        console.log("p1 프로미스 실행");
        // resolve(); // 정의하는 순간에 바로 호출 -> 내가 원할때 호출하고 싶으면 함수로 빼주기(async function)
        reject();
    }); 

    // (than)비동기 처리 자체가 동기 처리 됨 -> than이 순서대로 실행 / than = promise -> 자기 자신을 리턴
    p1.then(() => { // p1이 실행완료 후 동작 , then = resolve가 호출이 되야 실행 / resolve 호출에 대한 정의 = then
        console.log("p1 then 실행");
        return 10;
    }).then((num) => { // return 된 값을 전달받음
        console.log(num);
    }).then(() => {
        console.log("세번째 than");
    }).catch(() => {
        console.log("오류")
    }) // reject = 예외 처리이기 때문에  reject가 호출되면 catch가 실행; 
    
    const p2 = new Promise((resolve,reject) => {
        console.log("p2 프로미스 실행");
    });

    console.log("동기 실행");

}