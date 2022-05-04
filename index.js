let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".container");

toggle.addEventListener("click", () => {
    navigation.classList.toggle("nav-open");
});

