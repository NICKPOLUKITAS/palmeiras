// script.js

// Função para mostrar o quiz
let perguntas = [
  { pergunta: "Quem é o maior artilheiro da história do Palmeiras?", respostas: ["Kleber", "Evair", "Luis Suárez", "Felipe Melo"], correta: 1 },
  { pergunta: "Qual o ano do último título da Copa Libertadores do Palmeiras?", respostas: ["2020", "2018", "2016", "1999"], correta: 0 },
];

let perguntaAtual = 0;

function mostrarPergunta() {
  const pergunta = perguntas[perguntaAtual];
  document.getElementById("quiz-pergunta").textContent = pergunta.pergunta;
  const opcoes = document.getElementById("quiz-opcoes");
  opcoes.innerHTML = "";
  pergunta.respostas.forEach((resposta, index) => {
    const botao = document.createElement("button");
    botao.textContent = resposta;
    botao.onclick = () => verificarResposta(index);
    opcoes.appendChild(botao);
  });
}

function verificarResposta(indice) {
  const pergunta = perguntas[perguntaAtual];
  const resultado = document.getElementById("quiz-resultado");
  if (indice === pergunta.correta) {
    resultado.textContent = "Resposta Correta!";
  } else {
    resultado.textContent = "Resposta Errada!";
  }
}

function proximaPergunta() {
  perguntaAtual = (perguntaAtual + 1) % perguntas.length;
  mostrarPergunta();
}

document.addEventListener("DOMContentLoaded", mostrarPergunta);

// Função para verificar a senha na área secreta
function verificarSenha() {
  const senha = document.getElementById("senha").value;
  if (senha === "furyapalmeiras") {
    document.getElementById("conteudo-secreto").style.display = "block";
  } else {
    alert("Senha incorreta!");
  }
}
