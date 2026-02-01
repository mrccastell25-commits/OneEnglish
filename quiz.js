const questions = {
    beginner: [
        {
            q: "Choose the correct sentence:",
            options: ["She go to school", "She goes to school", "She going to school"],
            correct: 1
        },
        {
            q: "What is the plural of 'child'?",
            options: ["Childs", "Children", "Childes"],
            correct: 1
        }
    ],

    intermediate: [
        {
            q: "Choose the correct option:",
            options: ["I have been to London", "I was been to London", "I am been to London"],
            correct: 0
        },
        {
            q: "Which sentence is correct?",
            options: ["If I would know, I would go", "If I knew, I would go", "If I know, I go"],
            correct: 1
        }
    ],

    advanced: [
        {
            q: "Choose the most natural sentence:",
            options: [
                "Had I known, I would have acted differently",
                "If I knew, I would acted differently",
                "I had know, I would act differently"
            ],
            correct: 0
        },
        {
            q: "Which option is grammatically correct?",
            options: [
                "Rarely have I seen such dedication",
                "Rarely I have seen such dedication",
                "Rarely I seen such dedication"
            ],
            correct: 0
        }
    ]
};

let current = 0;
let score = 0;
let selectedLevel = "";

function startTest(level){
    selectedLevel = level;
    current = 0;
    score = 0;
    showQuestion();
}

function showQuestion(){
    const q = questions[selectedLevel][current];

    let html = `<h3>${q.q}</h3>`;

    q.options.forEach((opt, i) => {
        html += `<button onclick="answer(${i})">${opt}</button><br><br>`;
    });

    document.getElementById("quiz").innerHTML = html;
}

function answer(choice){
    if(choice === questions[selectedLevel][current].correct){
        score++;
    }

    current++;

    if(current < questions[selectedLevel].length){
        showQuestion();
    }else{
        showResult();
    }
}

function showResult(){
    const percent = Math.round((score / questions[selectedLevel].length) * 100);

    let result;
    if(percent < 50) result = "Abaixo do nível escolhido";
    else if(percent < 75) result = "Nível adequado";
    else result = "Acima do nível escolhido";

    document.getElementById("quiz").innerHTML = `
        <h3>Resultado</h3>
        <p>Acertos: ${score}</p>
        <p>Aproveitamento: ${percent}%</p>
        <strong>${result}</strong>
    `;
}
