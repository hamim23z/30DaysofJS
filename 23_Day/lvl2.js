let divs = document.querySelectorAll("div");
let maintitle = document.querySelector(".maintitle");

document.addEventListener("keydown", e => {
    let pressedKey = e.key;
    maintitle.innerText = `You Pressed: ${pressedKey}`;
});