window.onload = () => {
    gettodoList();

    // let arr = [1,2,3,4,5,6,7,8,9,10];
    // console.log(arr);

    // let newArr = [];

    // for(let i = 0; i < arr.length; i++) {
    //     if(arr[i] % 2 === 0) {
    //         newArr.push(arr[i]);
    //     }
    // }

    // console.log(newArr);

    // let newArr2 = arr.filter(num => num % 2 === 0); // 람다식 , filter = 새로운 배열을 만들어줌
    // console.log(newArr2); 

    
}

function gettodoList() { // 화면이 띄어졌을때 li태그 안에 있는것들을 반복, 함수로 정의
    const todoContentList = document.querySelector(".todo-content-list");

    const todoLsitJson = localStorage.getItem("todoList");
    const todoList = todoLsitJson !== null ? JSON.parse(todoLsitJson) : new Array();

    todoContentList.innerHTML = ""; // 리스트 비워주기 (동일한게 없게 하기 위해)

    for(let todo of todoList) {
        todoContentList.innerHTML += `
            <li class="todo-content-box">
            <div class="todo-content-header">
                <span>
                    <i class="fa-regular fa-star"></i>
                </span>
                <span class="todo-content-date">
                    ${todo.date}
                </span>
            </div>
            <div class="todo-content-main">
                <pre class="todo-content">${todo.content}</pre>
            </div>
            <div class="todo-content-footer">
                <button class="todo-edit-button" onclick="handleEditTodoModalOpen(${todo.todoId})"> 
                    <i class="fa-solid fa-pencil"></i>
                </button>
                <button class="todo-remove-button" onclick="handleRemoveTodolClick(${todo.todoId})">
                    <i class="fa-regular fa-trash-can"></i>
                </button>
            </div>
        </li>
        `;
    }

    todoContentList.innerHTML += ``;
}

function handleRemoveTodolClick(todoId) { // 삭제버튼을 눌렀을 때 삭제
    let selected = confirm("정말로 삭제하시겠습니까?");
    if(!selected) {
        return; // 취소(삭제 X) -> selected가 !(not)이기때문에 
    }

    const todoLsitJson = localStorage.getItem("todoList");
    const todoList = todoLsitJson !== null ? JSON.parse(todoLsitJson) : new Array();
    const newTodoList = todoList.filter(todo => todo.todoId !== todoId); // 첫번째 todo를 꺼냈을 때 todoId가 아니면 새로운리스트에 담는다

    localStorage.setItem("todoList",JSON.stringify(newTodoList)); // 새로운 todoList에 옮겨줌
    gettodoList(); // 리스트에서 제거
}