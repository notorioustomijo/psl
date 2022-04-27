const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const menu = document.querySelector('nav .container ul');


menuBtn.addEventListener("click", () => {
    menu.style.display = 'block';
})