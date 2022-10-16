const inputs = document.querySelectorAll(".input-angle");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputBox = document.querySelector("#output-box");

//console.log(output)
//console.log(isTriangleBtn)
//console.log(inputs)

function calculateSumOfAngles(angle1, angle2, angle3) {
    const SumOfAngles = angle1 + angle2 + angle3
        //console.log(SumOfAngles);
    return (SumOfAngles)
}

function isTriangle() {
    const SumOfAngles = calculateSumOfAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    if (SumOfAngles === 180) {
        outputBox.innerText = " Yay , The angle forms a triangle"
    } else {
        outputBox.innerText = " oh ! this angle don't form a triangle"
    }

    //console.log(inputs[0].value, inputs[1].value, inputs[2].value)
}

isTriangleBtn.addEventListener("click", isTriangle)