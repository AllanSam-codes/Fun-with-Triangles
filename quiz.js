const quizForm = document.querySelector(".quiz-form");
const submitAnswerBtn = document.querySelector("#submit-answer-btn");
const outputBox = document.querySelector("#output-box");

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
    outputBox.innerText = " Your score is " + score + " ! "
}

submitAnswerBtn.addEventListener("click", calculateScore)