function hoverme() {
    let temp = document.querySelector('.text');

    temp.style.background = "pink";

    temp.innerHTML = "Wel-Come";
}

function hovermeout() {
    let temp = document.querySelector('.text');

    temp.style.background = "gray";
    temp.style.color = "white";
    temp.innerHTML = "Hello";
}
