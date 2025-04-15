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

// Menu Hambúrguer
const menuIcon = document.getElementById('menu-icon');
const navbarMenu = document.querySelector('.navbar-menu');
const closeBtn = document.getElementById('close-btn');
const menuOverlay = document.createElement('div');
menuOverlay.classList.add('menu-overlay');

// Adiciona o overlay ao body
document.body.appendChild(menuOverlay);

// Abre o menu ao clicar no ícone do hambúrguer
menuIcon.addEventListener('click', () => {
  navbarMenu.classList.toggle('active');
  closeBtn.classList.toggle('active'); // Mostra o botão de fechar
  menuOverlay.classList.toggle('active'); // Mostra o fundo semitransparente
});

// Fecha o menu ao clicar no botão de fechar
closeBtn.addEventListener('click', () => {
  navbarMenu.classList.remove('active');
  closeBtn.classList.remove('active');
  menuOverlay.classList.remove('active');
});

// Fecha o menu quando o fundo semitransparente for clicado
menuOverlay.addEventListener('click', () => {
  navbarMenu.classList.remove('active');
  closeBtn.classList.remove('active');
  menuOverlay.classList.remove('active');
});
