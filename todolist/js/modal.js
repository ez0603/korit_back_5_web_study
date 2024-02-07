// window.onload = () => { // window.onload는 1번밖에 생성 안됨
    // const day = ["일", "월", "화", "수", "목", "금", "토"] // 숫자로 나오기 때문에 배열로 만들어준다
    
    // let now = new Date();
    // console.log(now.getFullYear());
    // console.log(now.getMonth() + 1); // 자바스크립트는 월이 0부터 시작하기 때문에 +1 을 해준다
    // console.log(now.getDate());
    // console.log(day[now.getDay()]); // 자바스크립트는 일요일 = 0

//     let arr = new Array();

//     let obj = {
//         id: 1,
//         name: "김준일"
//     }

//     let obj2 = {
//         id: 2,
//         name: "김준이"
//     }

//     arr.push(obj);
//     arr.push(obj2);

//     console.log(arr[0].name); // 객체참조 

//     console.log(arr);

//     // JSON = 표준객체형태(변환 형태 통일시켜주는것)
//     console.log(JSON.stringify(arr)); // stringify = 객체를 JSON문자열로 바꿔줌
//     console.log(JSON.stringify(obj));
//     console.log(JSON.stringify(obj2));

//     let jsonArr = JSON.stringify(arr);

//     console.log(JSON.parse(jsonArr)) // parse = 바꾼걸 다시 객체로 바꿔주는것

// }

window.onkeyup = (e) => {
    if(e.keyCode === 27) { // esc를 눌렀을 때 취소버튼과 같은 역할
        handleCancelClick();
    }
}

function convertDateKor(curruntDate) { // curruntDate = todoObject에 있는 new Date() 객체와 동일
    const dayKors = ["일", "월", "화", "수", "목", "금", "토"];
    const year = curruntDate.getFullYear();
    const month = curruntDate.getMonth() + 1;
    const date = curruntDate.getDate();
    const day = dayKors[curruntDate.getDay()];

    return `${year}년 ${month}월 ${date}일(${day})`;
}

function handleAddTodoModalOpen() {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title"); // modal.querySelector = root-modal안쪽에 있는 태그들 중 선택(modal객체 안에 있는 태그)
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button") // 첫번째만 가져오면 되기 때문에 All X
    title.innerHTML = "추가하기";
    todoInput.value = ""; // 오픈이 될 때마다 비워주기
    submitButton.onclick = handleAddTodoSubmit;

    todoInput.onkeydown = (e) => { // 키가 눌러져있을때
        if(e.ctrlKey && e.keyCode === 13) { // ctrl+enter
            submitButton.click();
        }
    }

    modal.classList.add("modal-show");
}

function handleEditTodoModalOpen(todoId) { 
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title"); // modal.querySelector = root-modal안쪽에 있는 태그들 중 선택(modal객체 안에 있는 태그)
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button"); // 첫번째만 가져오면 되기 때문에 All X
    title.innerHTML = "수정하기";

    let todoListJson = localStorage.getItem("todoList");
    let todoList = todoListJson != null ? JSON.parse(todoListJson) : new Array();

    let findTodoByTodoId = todoList.filter(todo => todo.todoId === todoId)[0]; // todo객체에 있는 id, 매개변수 id 비교해서 같으면 들고옴, 

    todoInput.value = findTodoByTodoId.content; // findTodoByTodoId = todo 객체
    // submitButton.onclick = handleEditTodoSubmit; // 정의된 함수(handleEditTodoSubmit)를 대입하는것 
    submitButton.onclick = () => handleEditTodoSubmit(todoId); // 익명함수를 대입하여 todoId를 호출

    todoInput.onkeydown = (e) => { // 키가 눌러져있을때
        if(e.ctrlKey && e.keyCode === 13) { // ctrl+enter
            submitButton.click();
        }
    }

    modal.classList.add("modal-show");
}

function handleAddTodoSubmit() { // 확인과 취소를 눌렀을 때 둘 다 창이 꺼져야하기 때문에 remove
    const modal = document.querySelector(".root-modal");
    const todoInput = modal.querySelector(".todo-input");
    modal.classList.remove("modal-show");
 
    // localStorage 안에 있는 todoList 키값을 가져온다
    let todoListJson = localStorage.getItem("todoList"); // 로컬 스토리지는 key,value값으로 구성
    let todoList = todoListJson != null ? JSON.parse(todoListJson) : new Array(); // JSON형태로 있던걸 다시 객체로 변환해서
    
    // todoId를 증가시켜줘야하기 때문에 todoList에 아무것도 들어있지 않으면 0, 값이 존재한다면 배열 제일 마지막 아이디값 가져옴
    let lastTodoId = todoList.length === 0 ? 0 : todoList[todoList.length - 1].todoId; 
    
    let todoObject = { // 데이터 저장하기
        todoId: lastTodoId + 1,
        content: todoInput.value,
        date: convertDateKor(new Date()) // convertDateKor의 리턴값
    }

    todoList.push(todoObject);

    //로컬 스토리지에 저장하면 정보를 그대로 다시 불러옴, 변수에 저장되어 있던 것을 로컬 스토리지에 저장
    localStorage.setItem("todoList", JSON.stringify(todoList)); // 이때부터 null이 아님
    gettodoList(); // 추가된 리스트를 다시 들고옴(새로고침 하지않고 확인 버튼을 누르면 바로 추가됨)
}

function handleEditTodoSubmit(todoId) { // 수정버튼을 눌렀을 때, 매개변수로 키값인 todoId를 준다
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");

    let todoListJson = localStorage.getItem("todoList");
    let todoList = todoListJson != null ? JSON.parse(todoListJson) : new Array();

    let findIndex = -1;

    for(let i = 0; i < todoList.length; i++) {  // filter 사용 X -> 카피를 한 것(다른값)이기 때문에 for문으로 써줌
        if(todoList[i].todoId === todoId) {
            findIndex = i; 
            break; 
        }
    } 

    if(findIndex === -1) { // 반복이 다돌고도 -1을 찾지 못하면 오류처리
        alert("수정오류 !")
        return;
    }

    todoList[findIndex].content = document.querySelector(".todo-input").value; // 수정된 객체를 들고옴
    todoList[findIndex].date = convertDateKor(new Date()); // todoList의 정보 바뀜

    localStorage.setItem("todoList", JSON.stringify(todoList)); // 덮어씌움
    gettodoList(); // 새로운 리스트를 들고옴


}

function handleCancelClick() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}