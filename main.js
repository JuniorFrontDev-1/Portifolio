// Efeito Typewriter
const texto = "J8nior";
let i = 0;
const speed = 100;

function digitar() {
  if (i < texto.length) {
    document.querySelector('.typewriter').textContent += texto.charAt(i);
    i++;
    setTimeout(digitar, speed);
  }
}

window.onload = digitar;


const menuIcon = document.getElementById("menu-icon");
const navbarMenu = document.getElementById("navbar-menu");
const nav = document.querySelector(".navbar-nav");
const closeBtn = document.getElementById("close-btn");

menuIcon.addEventListener("click", () => {
  nav.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  nav.classList.remove("active");
});

document.getElementById('menu-icon').addEventListener('click', () => {
  const navbarMenu = document.getElementById('navbar-menu');
  navbarMenu.classList.toggle('active');
});

document.getElementById('close-btn').addEventListener('click', () => {
  const navbarMenu = document.getElementById('navbar-menu');
  navbarMenu.classList.remove('active');
});
