const addBoxButton = document.querySelector(".add-box-button");

addBoxButton.onclick = () => {
    const boxContainer = document.querySelectorAll(".box-container"); // box-container가 2개 이기 때문에 All로 바꿔줌
    boxContainer[0].innerHTML += `<div class="box"></div>`; // 박스컨테이너가 2개가 되었기때문에 인덱스가 0인 박스에만 추가해줘야함
    // boxContainer.removeChild(); // ()안에 객체가 지워짐
    // boxContainer.appendChild(); // ()안에 객체가 추가됨

    /* 한번 클릭했을때 파란색/ 한번더 클릭하면 빨간색 세번째 눌렀을 때 원상복구*/
    const boxList = document.querySelectorAll(".box");

    // boxList[0].onclick = () => {
    //     boxList[0].classList.add("red-box");
    //     let isBlueBox = boxList[0].classList.contains("blue-box"); // blue box가 있는지 확인
    //     alert(isBlueBox);  
    // }

    // boxList[1].onclick = () => {
    //     boxList[1].classList.add("blue-box");
    // }
    for(let i = 0; i < boxList.length; i++) { // for문 돌려서 반복
        boxList[i].onclick = () => { 
            if(!boxList[i].classList.contains("blue-box") && !boxList[i].classList.contains("red-box")) { // 위의 boxList 안에 blue,red box가 둘다 없다면
                boxList[i].classList.add("blue-box") // 첫번째로 눌렀을 때 bluebox가 나와야 하기 때문에 bluebox를 add
            } else if(boxList[i].classList.contains("blue-box")) { // 만약 bluebox가 있다면 
                boxList[i].classList.remove("blue-box") // 두번째로 눌렀을때는 bluebox를 지우고
                boxList[i].classList.add("red-box") // redbox 추가
            } else if(boxList[i].classList.contains("red-box")) { // 세번째로는 아무색도 안나와야하기 때문에 redbox가 있다면
                boxContainer[0].removeChild(boxList[i]) // 빨간색 박스일때 인덱스가 0번인 박스에서 지우고
                boxContainer[1].appendChild(boxList[i]) // 1번 인덱스 박스에 추가해준다
            }
        }   
    }
}
// 빨간색 박스를 누르면 그 박스는 지워지고 옆에 박스로 옮겨간다(객체 그대로)

