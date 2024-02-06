const addBoxButton = document.querySelector(".add-box-button");

addBoxButton.onclick = () => {
    const boxContainer = document.querySelector(".box-container");
    boxContainer.innerHTML += `<div class="box"></div>`;

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
    for(let i = 0; i < boxList.length; i++) {
        boxList[i].onclick = () => {
            if(!boxList[i].classList.contains("blue-box") && !boxList[i].classList.contains("red-box")) {
                boxList[i].classList.add("blue-box")
            } else if(boxList[i].classList.contains("blue-box")) {
                boxList[i].classList.remove("blue-box")
                boxList[i].classList.add("red-box")
            } else if(boxList[i].classList.contains("red-box")) {
                boxList[i].classList.remove("red-box")
            }
        }   
    }
}

