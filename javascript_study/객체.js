// 자바스크립트 객체 형태 = {key: value, key: value}

let student = { // 자바스크립트 중요 형태
    name: "김준일",
    age: 31
}

console.log(student);
console.log(typeof(student)); // object 타입
console.log(student.name);

 class Student { // class화 시켜서 찍어낼 때 많이 사용
    name;
    age;

    // 생성자
    constructor(name, age) { // 매개변수 name, age, 자바스크립트에는 자료형이 없기 때문에 오버로딩 불가능
        this.name = name;
        this.age = age;
    }
 }

 let s = new Student("김준이", 32);
//  s.name = "김준이";
//  s.age = 32;
 console.log(s);

 class User {
    #username;
    password;

    set setUsername(username) { 
        this.#username = username;
    }

    get username() {
        return this.#username;
    }
 }

// 변수명앞에 #을 붙이면 private
 let user = new User();
 user.setUsername = "junil";  // 매개변수가 아닌 대입
 console.log(user.username); 

 let dataMap = new Map(); 
 dataMap.set("username", "junil");
 dataMap.set("password", "1234");

 console.log(dataMap);
 console.log(dataMap.get("password")); // Map은 get으로 꺼내옴