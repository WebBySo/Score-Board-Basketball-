let x1 = document.getElementById("num1");
let x2 = document.getElementById("num2");
let resultH = 0;
let resultG = 0;


function p1() {
    resultH +=1;
    x1.innerText = resultH;
}

function p2() {
    resultH +=2;
    x1.innerText = resultH;
}

function p3() {
    resultH +=3;
    x1.innerText = resultH;
}

function p11() {
    resultG +=1;
    x2.innerText = resultG;
}
function p22() {
    resultG +=2;
    x2.innerText = resultG;
}
function p33() {
    resultG +=3;
    x2.innerText = resultG;
}

