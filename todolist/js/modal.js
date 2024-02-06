
function handleAddTodoModalOpen() {
    const modal = document.querySelector(".root-modal");
    const title = modal.querySelector(".modal-title"); // modal.querySelector = root-modal안쪽에 있는 태그들 중 선택(modal객체 안에 있는 태그)
    const todoInput = modal.querySelector(".todo-input");
    const submitButton = modal.querySelector(".modal-button") // 첫번째만 가져오면 되기 때문에 All X
    title.innerHTML = "추가하기";
    todoInput.value = ""; // 오픈이 될 때마다 비워주기
    submitButton.onclick = handleAddTodoSubmit;

    modal.classList.add("modal-show");
}

function handleAddTodoSubmit() { // 확인과 취소를 눌렀을 때 둘 다 창이 꺼져야하기 때문에 remove
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}

function handleCancelClick() {
    const modal = document.querySelector(".root-modal");
    modal.classList.remove("modal-show");
}