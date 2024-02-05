const submitButton = document.querySelector(".input-submit");


// 이벤트 속성 (onclick)
submitButton.onclick = () => { // onclick 속성 -> 버튼에 클릭이 일어났을 때 함수 실행
    const input = document.querySelector(".inputs");
    // alert(input.value); // alert = 알림창 역할, input안에있는 value값을 알림창에 출력
    const dataList = document.querySelector(".data-list");
    // innerHTML = 태그안에 자식태그
    dataList.innerHTML += `<li>${input.value}</li>`; // += 자기자신 대입

}

/*
    let submitButton = { submitButton = 객체
        onclick: null (key: value)
    }

    submitButton.onclick = () => {

    }
*/