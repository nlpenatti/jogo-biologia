// script.js

const questions = [
    {
        question: "Qual é o papel do ribossomo na tradução do RNA?",
        answer: "Ribossomos sintetizam proteínas traduzindo o RNA mensageiro"
    },
    {
        question: "O que são códons e qual a sua importância na tradução?",
        answer: "Códons são sequências de três nucleotídeos que codificam um aminoácido específico"
    },
    {
        question: "Onde ocorre a transcrição no núcleo celular?",
        answer: "No núcleo"
    },
    {
        question: "Qual enzima é responsável pela transcrição do DNA em RNA?",
        answer: "RNA polimerase"
    },
    {
        question: "Qual é a função da DNA polimerase na duplicação do DNA?",
        answer: "A DNA polimerase sintetiza novas cadeias de DNA complementares às cadeias originais"
    },
    {
        question: "O que significa que a duplicação do DNA é semi-conservativa?",
        answer: "Cada nova molécula de DNA contém uma cadeia antiga e uma nova"
    }
];

let currentPlayer = 1;
let scores = { player1: 0, player2: 0 };

document.getElementById('rollDice').addEventListener('click', () => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    document.getElementById('currentQuestion').innerText = questions[diceRoll - 1].question;
});

document.getElementById('submitAnswer').addEventListener('click', () => {
    const answer = document.getElementById('answerInput').value;
    const currentQuestion = document.getElementById('currentQuestion').innerText;
    const correctAnswer = questions.find(q => q.question === currentQuestion).answer;

    if (answer.toLowerCase() === correctAnswer.toLowerCase()) {
        scores[`player${currentPlayer}`] += 1;
        alert("Resposta correta!");
    } else {
        alert(`Resposta incorreta! A resposta correta é: ${correctAnswer}`);
    }

    document.getElementById(`score${currentPlayer}`).innerText = scores[`player${currentPlayer}`];
    currentPlayer = currentPlayer === 1 ? 2 : 1;

    document.getElementById('answerInput').value = '';
});
