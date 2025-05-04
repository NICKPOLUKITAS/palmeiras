// Função que mostra mais informações ao clicar no botão
function showMoreInfo() {
    alert("O Palmeiras é um dos maiores times do futebol brasileiro, com uma história riquíssima de títulos e vitórias. Fundado em 1914, o clube já conquistou múltiplos campeonatos nacionais e internacionais!");
}

// Função para abrir o menu em telas pequenas (mobile)
const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});
