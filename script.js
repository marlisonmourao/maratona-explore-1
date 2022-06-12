// Variaveis ?
// Dadps de entrada ?
// Dadps de saida ?


const elementoResposta = document.querySelector('#resposta')
const inputPergunta = document.querySelector('#inputPergunta')
const btnPerguntar = document.querySelector('#btnPerguntar')

const respostas = [
    "Certeza!",
    "Não tenho tanta certeza.",
    "É decididamente assim.",
    "Não  com isso.",
    "Sem dúvconteidas!",
    "Pergunte novamente mais tarde.",
    "Sim, definitivamente!",
    "Minha resposta é não.",
    "Você pode contar com isso.",
    "Melhor não te dizer agora.",
    "A meu ver, sim.",
    "Minhas fontes dizem não.",
    "Provavelmente.",
    "Não é possível prever agora.",
    "Perspectiva boa.",
    "As perspectivas não são tão boas.",
    "Sim.",
    "Concentre-se e pergunte novamente.",
    "Sinais apontam que sim.",
]

function fazerPergunta() {
    if (inputPergunta.value == "") {
        alert('Digite sua Pergunta')
        return
    }

    btnPerguntar.setAttribute('disabled', true)

    const pergunta = "<div>" + inputPergunta.value + "</div>"


    //Gerar numero aleatorio
    const totalRespostas = respostas.length;
    const numeroAleatorio = Math.floor(Math.random() * totalRespostas) 

    elementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
    elementoResposta.style.opacity = 1;

    //Sumir a resposta depois de 3 segundos
    setTimeout(function() {
        elementoResposta.style.opacity = 0;
        btnPerguntar.removeAttribute('disabled')
    }, 3000)
} 
