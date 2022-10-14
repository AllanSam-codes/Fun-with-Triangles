const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const output = document.querySelector("#output");

const correctAnswer = ["90°", "right angled"]


function calculateScore() {
    let score = 0;
    let index = 0;
    const fromResults = new FormData(quizForm);
    //console.log(fromResults)
    for (let value of fromResults.values()) {
        if (value === correctAnswer[index]) {
            score = score + 1;
        }
        index = index + 1;
    }
    console.log();
    output.innerText = " Your score is ! " + score
}

submitAnswerBtn.addEventListener("click", calculateScore)