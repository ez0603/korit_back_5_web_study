// spread 연산(...) = 값추가, 객체 복사, 부분 변경

// let array = [1,2,3,4];
// array.push(5); // 5 추가하기
// array = [...array, 5, 6, ...array]; // ... = 배열안에 들어있던 값들이 그대로 복사되어 배열에 대입, 새로운 배열 만들기

// console.log(array);

// let obj = {
//     name: "김준일",
//     age: 31
// }

// let obj2 = { // 새로운 객체 만들기
//     ...obj, // ... = 객체 요소들 복사
//     name: "김준이",
//     name: "김준삼" // key값(name) = 중복X value를 덮어버림(바꾸고 싶은 키값을 이용해 부분 변경할때 사용)
// }

// console.log(obj);
// console.log(obj2);
// --------------------------------------------------------------------------------------------------
// 비구조 할당
// 쓰는이유 : 필요한것만 꺼내 쓰기위해
let obj = {
    id: 1,
    name: "김준일",
    age:31
}

let {id,name,age} = obj // 변수 선언할때 {변수} 넣어서 만들면 obj.id 해줄필요 없이 id만써도 가져와줌

// console.log(obj.id);
console.log(id);


// -----------------------------------------------------------------------------------------

let dataList = new Array(); // 밖으로 빼주면 실행 순서가 달라짐 / 실행되는 시점 : script 태그가 열릴때

window.onload = () => { // 객체.on = 이벤트(함수호출) / window.onload = window가 열리면 실행 실행되는 시점 : html이 끝날때
    getdataList(); 

    const addInput = document.querySelector(".add-input");

    addInput.onkeyup = (e) => { // 키보드를 입력할때마다 실행
        if(e.keyCode === 13) { // 엔터가 들어왔을 때만 동작 
            const inputValue = addInput.value; 

            const lastId = dataList.length === 0 ? 0 : dataList[dataList.length - 1].id; // dataList가 가지고 있는 마지막 인덱스값이 필요(id를 증가시켜줘야하기 때문에 배열의 마지막 인덱스가 아닌 배열의 마지막 객체 안에 있는 id의 인덱스를 알아야함)/ dataList.length - 1 = 배열의 마지막 인덱스

            const dataObj = {
                id: lastId + 1,
                content: inputValue
            }

            fetch("http://localhost:8080/data_array/data/addition", { // postman send와 같은 역할
                method: "post",
                mode: "cors",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(dataObj)
            });

            dataList = [...dataList,dataObj];

            addInput.value = ""; // 엔터친 후 input에 입력한 값이 지워짐

            getdataList(); // 호출해줘야 리프래쉬(다시동작)
        }
    }
}   

function ContentData({ id,content }) { // 이 함수를 실행시키면 문자열 리턴 / 매개변수에 비구조 할당
    return `
    <li>
        <span>${id}번 </span>
        <span>${content}</span>
        <input type="text" class="edit-inputs" value="${content}">
        <button onclick="editData(${id})">수정</button>
        <button onclick="removeData(${id})">삭제</button>
    </li>
`;
}

function getdataList() { // 이 함수가 호출될 때마다 dataList가 
    const contentList = document.querySelector(".content-list");

    contentList.innerHTML = ""; // 안에 들어있는 내용 초기화(ul안에있는 li를 지운다) 

    for(let dataObj of dataList) { // 리스트에 있는 객체만큼 복사(하나씩 꺼내 반복)
        contentList.innerHTML += ContentData(dataObj); // 함수호출 
    } 
 

}
// dataList.filter((dataObj) => dataObj.id !== id); 가 되는 과정
// function findId(dataObj) { // dataObj의 첫번째 객체
//     return dataObj.id === 1;
// } // 조건이 참일때만 새로운 배열을 만들어서 객체를 담아줌

function removeData(id) { // 함수를 만든다 = 기능을 만든다
//     const findId =  (dataObj) => { // function을 => 로 바꿔줌
//         return dataObj.id === id; // 함수안에 함수를 만들면 매개변수(id)를 가져올 수있음
//     }
    // const findId = () => {}; // 익명함수 , function () => {}
    dataList = dataList.filter((dataObj) => dataObj.id !== id); //(매개변수), ()안에는 실행할 함수를 넣어줌

    getdataList();
} // !== 인 이유 : id가 아닌 객체를 삭제해야하기 때문(id가 같은 객체들은 다시 배열에 넣어줌)

function editData(id) { // 수정하고자 하는 데이터를 찾아서 수정 해야하기때문에 매개변수(id)
    // 리스트에서 인덱스 번호를 찾아줘야하기 때문에 All 
    let findIndex = -1; // 인덱스는 0번부터 시작하기 때문에 -1

    for(let i = 0; i < dataList.length; i++) { // 탐색 알고리즘(선형탐색)
        if(dataList[i].id === id) { // dataList에 있는 id값과 수정하고자 하는 id(매개변수)값이 일치해야하기 때문
            findIndex = i;
            break;
        }   
    }

    let findObj = dataList.filter((dataObj) => dataObj.id === id)[0] // id값이 일치한 값만 배열에 담겼기때문에 [0]을 꼭 써준다

    findIndex = dataList.indexOf(findObj); // indexOf = 데이터가 들어있는 인덱스 위치 찾기 (찾고자하는 객체)

    const editInput = document.querySelectorAll(".edit-inputs");

    dataList[findIndex].content = editInput[findIndex].value; // dataList[findIndex] = 수정할대상(객체), 내용을 바꿔줘야하기 때문에 .content

    getdataList(); // 배열의 데이터를 바꿔주었기 때문에 다시 불러와주기
    
}
