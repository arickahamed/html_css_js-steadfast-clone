const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("toggledPart");
const body = document.querySelector("body");

window.onscroll = function () {
    const header = document.getElementById("header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    };
};

const handleClick = () => {
    console.log("Clicked the hamburger menu");
    sidebar.classList.toggle("open");
    body.classList.add("no-scroll");
};

hamburger.addEventListener("click", handleClick);

alert("Relax I'm open!");