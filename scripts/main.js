// Selecionando o título principal da página
const tituloPrincipal = document.querySelector('h1');
// Selecionando o parágrafo da curiosidade pelo seu ID
const curiosidadeTexto = document.getElementById('curiosidade-texto');
console.log(tituloPrincipal);
console.log(curiosidadeTexto);

// Alterando o texto do título principal
tituloPrincipal.textContent = "A MAIOR FESTA DA FENDA DO BIQUÍNI!";
// Alterando o estilo do parágrafo da curiosidade
curiosidadeTexto.style.color = '#a2d2ff';
curiosidadeTexto.style.fontSize = '1.2em';

// Selecionar o botão e a seção da agenda
const btnAgenda = document.getElementById('btn-agenda');
const secaoAgenda = document.getElementById('agenda');
// Adicionar um ouvinte de evento de 'click' ao botão
btnAgenda.addEventListener('click', () => {
 // Quando o botão for clicado, removemos a classe 'escondido'
 secaoAgenda.classList.remove('escondido');
 // E para um efeito melhor, escondemos o próprio botão
 btnAgenda.style.display = 'none';
});

// Selecionar todos os cards de personagem e a caixa de informação
const personagensCards = document.querySelectorAll('.personagem-card');
const infoBox = document.getElementById('info-personagem');
// Para cada card de personagem, adicionamos os ouvintes de evento
personagensCards.forEach(card => {
 // Evento para quando o mouse entra na área do card
 card.addEventListener('mouseover', () => {
 const nome = card.dataset.nome;
 const descricao = card.dataset.descricao;
 infoBox.innerHTML = `<h3>${nome}</h3><p>${descricao}</p>`;
 infoBox.style.opacity = '1';
 });
 // Evento para quando o mouse sai da área do card
 card.addEventListener('mouseout', () => {
 infoBox.innerHTML = '';
 infoBox.style.opacity = '0';
 });
});