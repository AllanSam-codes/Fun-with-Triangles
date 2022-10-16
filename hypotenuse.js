const sides = document.querySelectorAll(".input-side");
const hypotenusebtn = document.querySelector("#hypotenuse-btn");
const outputBox = document.querySelector("#output-box");

//console.log(output)
//console.log(hypotenusebtn)
function calculateSumOfSquares(a, b) {
    const sumOfSquares = a * a + b * b
        //console.log(sumOfSquares);
    return sumOfSquares
}

function calculateHypotenuse() {
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
    //console.log(sumOfSquares, lengthOfHypotenuse)
    outputBox.innerText = " The length of hypotenuse is  " + lengthOfHypotenuse;
}

hypotenusebtn.addEventListener("click", calculateHypotenuse)