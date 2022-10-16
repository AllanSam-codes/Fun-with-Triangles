//const area = document.querySelectorAll(".input-area");
const inputBase = document.querySelector("#base");
const inputHeight = document.querySelector("#height")
const areaBtn = document.querySelector("#area-btn");
const outputBox = document.querySelector("#output-box");

//console.log(inputBase.value, inputHeight.value)
//console.log(areaBtn, output)

function calculateAreaOfTriangle() {
    //console.log("Calculate area called", inputBase.value, inputHeight.value);
    var area = (0.5) * inputBase.value * inputHeight.value;
    outputBox.innerText = "The area of a triangle is " + area;
}

areaBtn.addEventListener('click', calculateAreaOfTriangle);