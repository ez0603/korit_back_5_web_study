const input = document.querySelector(".text-input");


    for(let i = 0; i < input.length; i++){
        input[i].onkeyup = (e) =>{
            if(e.keyCode === 13) {
                // console.log(input.value);
               getinputList();
            }
        }
    }


function getinputList() {
    const inputContentList = document.querySelector(".text-content-list");

    const inputListJson = localStorage.getItem("inputList");
    const inputList = inputListJson !== null ? JSON.parse(inputList) : new Array();

    inputContentList.innerHTML = "";

    for(let input of inputList) {
        inputContentList.innerHTML += `
        <li class="input-content-box">
            <span>1번</span>
            <span>내용1</span>
            <input type="text">
            <button>수정</button>
            <button>삭제</button>
        </li>
        `
    }
    inputContentList.innerHTML += ``;
}