const area = document.querySelectorAll(".input-area");
const areaBtn = document.querySelector("#area-btn");
const output = document.querySelector("#output");


//console.log(area, areaBtn, output)
function calculateAreaOfTriangle(a, b) {
    const sumOfSquares = a * a + b * b
        //console.log(sumOfSquares);
    return sumOfSquares
}

areaBtn.addEventListener('click', calculateAreaOfTriangle);