async function handleSubmitClick() {
    const dataInputs = document.querySelectorAll(".data-inputs");

    const data = {
        name: dataInputs[0].value,
        age: dataInputs[1].value
    };

    console.log(data);
    const jsonData = JSON.stringify(data); // JSON 객체로 바꿔준것 -> 실제 서버에 보낼때는 json객체를 보내야함
    console.log(jsonData);

    const option = {
        method: "post",
        headers: { // headers = 객체가 들어가야함
            "Content-Type": "application/json"
        },
        body: jsonData
    };

    try { // await을 쓸때는 try, catch 필수
        const response = await fetch("http://localhost:8080/insert_and_select/data/addition", option)

        if(!response.ok) { // ok가 false면 = 이미 등록된 이름이라면
            throw await response.json(); // catch로 이동
        }

        console.log(response);
    
        const json = await response.json();
    
        console.log(json);

        console.log("test");
    } catch(error) {   
        alert(error.errorMessage); // errorMessage = 키값 
    }

    // async, await을 써서 동기처리 하기 전
    // fetch("http://localhost:8080/insert_and_select/data/addition", option) 
    // .then((response) => {  // then(비동기) = 비동기 처리가 정상처리 되었을 때 실행할 함수를 ()안에 넣음
    //     response.json() 
    //     .then((json) => {
    //         console.log(json)
    //         console.log("test");
    //     }); // 비동기처리의 프로미스
    // }).catch((error) => { // 해당 요청이 가지 않았을 때 catch -> promise 자체가 예외처리됨
    //     console.log("에러 처리")
    //     console.log(error);
    // });  

    // const dataObj = JSON.parse(jsonData); // json객체를 parse로 보내주면
    // console.log(dataObj); 
}