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