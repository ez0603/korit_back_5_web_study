let dataList = [];

window.onload = () => {

    const addInput = document.querySelector(".add-input");

    addInput.onkeyup = (e) => {
        if(e.keyCode === 13) {
            
            const inputValue = addInput.value;

            let lastId = dataList.length === 0 ? 0 : dataList[dataList.length - 1].id;

            let dataObj = {
                id: lastId + 1,
                content:inputValue
            }

            dataList = [...dataList, dataObj]

        }
    }
}

function getDataList() {
    const contentList = document.querySelector(".content-list");

    contentList.innerHTML += `
            <li>
                <span>1번</span>
                <span>내용1</span>
                <input type="text">
                <button>수정</button>
                <button>삭제</button>
            </li>
    `;

}