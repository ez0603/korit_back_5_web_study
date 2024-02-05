const submitButton = document.querySelector(".btn");
let count = 1;

submitButton.onclick = () => {
    const name = document.querySelector(".input-name");
    let nameValue = name.value;
    const age = document.querySelector(".input-age");
    let ageValue = age.value;
    const address = document.querySelector(".input-address");
    let addressValue = address.value;

    const table = document.querySelector(".in");
    table.innerHTML += `<tr><th>${count}</th><th>${nameValue}</th><th>${ageValue}</th><th>${addressValue}</th></tr>`
    count++

    name.value = ""
    age.value = ""
    address.value = ""
}