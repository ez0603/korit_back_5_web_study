const menuButton = document.querySelector(".menu-button");

menuButton.onclick = () => { // = 눌렀을 때 열림
    const sideBarLayout = document.querySelector(".side-bar-layout");
    sideBarLayout.classList.add("side-bar-show"); // side bar layout이 나타남
    const sideBarContainer = document.querySelector(".side-bar-container");
    sideBarContainer.classList.add("side-bar-container-show")
}

const closeButton = document.querySelector(".side-bar-close-button");

closeButton.onclick = () => { // x 버튼을 눌렀을 때 닫힘
    const sideBarLayout = document.querySelector(".side-bar-layout");
    sideBarLayout.classList.remove("side-bar-show");
    const sideBarContainer = document.querySelector(".side-bar-container");
    sideBarContainer.classList.remove("side-bar-container-show");
}