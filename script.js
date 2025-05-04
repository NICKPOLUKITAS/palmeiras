// script.js

const perguntas = [
  {
    pergunta: "Em que ano o Palmeiras foi fundado?",
    opcoes: ["1914", "1920", "1935", "1902"],
    resposta: "1914"
  },
  {
    pergunta: "Quantos títulos da Libertadores o Palmeiras tem até 2023?",
    opcoes: ["1", "2", "3", "4"],
    resposta: "3"
  },
  {
    pergunta: "Quem é o maior artilheiro da história do Palmeiras?",
    opcoes: ["Dudu", "Evair", "Heitor", "Marcos"],
    resposta: "Heitor"
  },
  {
    pergunta: "Em qual estádio o Palmeiras manda seus jogos?",
    opcoes: ["Maracanã", "Allianz Parque", "Morumbi", "Pacaembu"],
    resposta: "Allianz Parque"
  },
  {
    pergunta: "Quem foi o técnico do Palmeiras que conquistou a Libertadores de 2020?",
    opcoes: ["Cuca", "Felipão", "Abel Ferreira", "Luxemburgo"],
    resposta: "Abel Ferreira"
  },
  {
    pergunta: "Qual é a cor tradicional do Palmeiras?",
    opcoes: ["Verde e Branco", "Preto e Branco", "Azul e Branco", "Verde e Preto"],
    resposta: "Verde e Branco"
  },
  {
    pergunta: "Quantos títulos nacionais o Palmeiras tem?",
    opcoes: ["6", "10", "9", "12"],
    resposta: "10"
  }
];

let perguntaAtual = 0;

function carregarPergunta() {
  const pergunta = perguntas[perguntaAtual];
  document.getElementById("quiz-pergunta").textContent = pergunta.pergunta;
  const opcoesDiv = document.getElementById("quiz-opcoes");
  opcoesDiv.innerHTML = "";

  pergunta.opcoes.forEach(opcao => {
    const btn = document.createElement("button");
    btn.textContent = opcao;
    btn.onclick = () => verificarResposta(opcao);
    opcoesDiv.appendChild(btn);
  });

  document.getElementById("quiz-resultado").textContent = "";
}

function verificarResposta(opcaoSelecionada) {
  const correta = perguntas[perguntaAtual].resposta;
  const resultado = document.getElementById("quiz-resultado");

  if (opcaoSelecionada === correta) {
    resultado.textContent = "Correto! Você é raiz!";
    resultado.style.color = "green";
  } else {
    resultado.textContent = `Errado! A resposta correta era ${correta}.`;
    resultado.style.color = "red";
  }
}

function proximaPergunta() {
  perguntaAtual = (perguntaAtual + 1) % perguntas.length;
  carregarPergunta();
}

window.onload = carregarPergunta;
