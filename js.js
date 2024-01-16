function myFunction() {
    alert("Message Reçu");
}
//Question bank
var questionBank = [
    {
        question: 'Que signifie HTML ?',
        option: ['HomeTabulation of Mailing List', 'XpTdr Mdr Lol', 'Hyperspace TradeMark Language', 'HyperText Markup Language'],
        answer: 'HyperText Markup Language'
    },
    {
        question: 'Quelle est la manière correcte de déclarer une variable en JavaScript  ?',
        option: ["var maVar;", " variable maVar;", " v maVar;", " declare maVar;"],
        answer: " var maVar;"
    },
    {
        question: "Quel attribut permet d'indiquer la destination d'un lien ?",
        option: ['a', 'src', 'link', 'href'],
        answer: 'href'
    },
    {
        question: "Quel est le résultat de l'expression 3 + '3' en JavaScript ?",
        option: ["6", "'33'", "33", "Erreur"],
        answer: "'33'"
    },
    {
        question: 'Que signifie CSS ?',
        option: ['Cascading Style Sheets', "Create Simple Samples", "C est Super Simple !", "Choucroute et Saucisses de Strasbourg"],
        answer: 'Cascading Style Sheets'
    },
    {
        question: 'Quel symbole est utilisé pour les commentaires en JavaScript ?',
        option: ["//", " --", "%%", "##"],
        answer: "//"
    },
    {
        question: 'Quel est le but de la méthode document.getElementById en JavaScript ?',
        option: ["Changer la couleur de fond de la page", "Récupérer un élément HTML par son id", "Créer un nouvel élément HTML", "Afficher un message d'alerte"],
        answer: " Récupérer un élément HTML par son id"
    },
    {
        question: 'Dans quel élément HTML place-t-on le JavaScript?',
        option: ['scripting', 'javascript', 'script', 'js'],
        answer: 'script'
    },
    {
        question: "Quelle est la fonction de la méthode addEventListener en JavaScript ",
        option: ["Modifier le style d'un élément HTML", "Ajouter un événement à un élément HTML", "Créer une nouvelle variable", "Afficher une alerte"],
        answer: "Ajouter un événement à un élément HTML"
    },
    {
        question: "Comment créer une fonction en JavaScript ?",
        option: ["function:myFunction()", "def myFunction()", "function myFunction()", "def:myFunction()"],
        answer: "function myFunction()"
    }
]

var question = document.getElementById('question');
var quizContainer = document.getElementById('quiz-container');
var scorecard = document.getElementById('scorecard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var next = document.querySelector('.next');
var points = document.getElementById('score');
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

//function to display questions
function displayQuestion() {
    for (var a = 0; a < span.length; a++) {
        span[a].style.background = 'none';
    }
    question.innerHTML = 'Q.' + (i + 1) + ' ' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];
    stat.innerHTML = "Question" + ' ' + (i + 1) + ' ' + 'of' + ' ' + questionBank.length;
}

//function to calculate scores
function calcScore(e) {
    if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
        score = score + 1;
        document.getElementById(e.id).style.background = 'limegreen';
    }
    else {
        document.getElementById(e.id).style.background = 'tomato';
    }
    setTimeout(nextQuestion, 300);
}

//function to display next question
function nextQuestion() {
    if (i < questionBank.length - 1) {
        i = i + 1;
        displayQuestion();
    }
    else {
        points.innerHTML = score + '/' + questionBank.length;
        quizContainer.style.display = 'none';
        scoreboard.style.display = 'block'
    }
}

//click events to next button
next.addEventListener('click', nextQuestion);

//Back to Quiz button event
function backToQuiz() {
    location.reload();
}

//function to check Answers
function checkAnswer() {
    var answerBank = document.getElementById('answerBank');
    var answers = document.getElementById('answers');
    answerBank.style.display = 'block';
    scoreboard.style.display = 'none';
    for (var a = 0; a < questionBank.length; a++) {
        var list = document.createElement('li');
        list.innerHTML = questionBank[a].answer;
        answers.appendChild(list);
    }
}


displayQuestion();


