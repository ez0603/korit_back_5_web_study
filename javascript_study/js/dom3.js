const submitButton = document.querySelector(".btn");
let count = 1; // count를 submitButton.onclick 안에 넣으면 count = 1으로 계속 생성되기 때문에 위로 빼준다

submitButton.onclick = () => { // button을 클릭할때 마다 
    const name = document.querySelector(".input-name"); // 객체가 변하지 않아야 함으로 상수(const)로 name을 정의한 뒤 input-name이 입력 될 때마다 name에 담는다
    let nameValue = name.value; // value의 값은 변하기 때문에 let으로 정의, name에 있는 value 값을
    const age = document.querySelector(".input-age");
    let ageValue = age.value;
    const address = document.querySelector(".input-address");
    let addressValue = address.value;

    const table = document.querySelector(".in");  // tbody에 값이 추가되어야하기 때문에 class in을 선언
    table.innerHTML += `<tr><th>${count}</th><th>${nameValue}</th><th>${ageValue}</th><th>${addressValue}</th></tr>` 
    // 태그속에 있는 문자열을 받아줘야하기 때문에 innerHTML, +=는 자기자신을 계속 대입해야하기 때문에 사용, table에 값을 입력, 태그안에 값을 입력해준다
    count++ // 추가를 할때마다 번호가 올라야하기 때문에 증가값을 넣어준다.

    name.value = "" // 입력 버튼을 누른 후에는 input창을 비워줘야하기 때문에 value를 초기화 시켜준다.
    age.value = ""
    address.value = ""
}