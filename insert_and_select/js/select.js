async function handleSearchClick() { // 클릭할때마다 DB에 있는 학생 리스트
    try {
        const response = await fetch("http://localhost:8080/insert_and_select/data/list");
        if(!response.ok) {
            throw await response.json();
        }

        const responseData = await response.json();
        // console.log(responseData.data); // responseData.data = 서블릿에 있는 student List
        const studentList = document.querySelector(".student-list")
        studentList.innerHTML = ``;

        for(let student of responseData.data) { // .data를 해줘야 List를 꺼냄
            studentList.innerHTML += `
                <li>studentId: ${student.studentId} / name: ${student.name} / age: ${student.age} </li>
            `;
        }

    } catch(error) {
        console.log(error);
    }

}