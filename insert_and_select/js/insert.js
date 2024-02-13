function handleSubmitClick() {
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

    fetch("http://localhost:8080/insert_and_select/data/addition", option)
    .then((response) => {  // then = 비동기 처리가 정상처리 되었을 때 실행할 함수를 ()안에 넣음
        response.json() 
        .then((json) => {
            console.log(json)
        });
    });  // 비동기처리의 프로미스

    console.log("test");
    // const dataObj = JSON.parse(jsonData); // json객체를 parse로 보내주면
    // console.log(dataObj); 
}