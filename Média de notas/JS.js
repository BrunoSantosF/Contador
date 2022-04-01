
let apert = document.querySelector("#save");
let limp =  document.querySelector("#clean");


apert.addEventListener("click",SendValue);
limp.addEventListener("click",Clear);


function SendValue(){

    let valor1 =  parseInt(document.querySelector("#btn1").value)
    let valor2 =  parseInt(document.querySelector("#btn2").value)
    let valor3 =  parseInt(document.querySelector("#btn3").value)
    let valor4 =  parseInt(document.querySelector("#btn4").value)
    let valor5 =  parseInt(document.querySelector("#btn5").value)
    let valor6 =  parseInt(document.querySelector("#btn6").value)
    let valor7 =  parseInt(document.querySelector("#btn7").value)
    let valor8 =  parseInt(document.querySelector("#btn8").value)
    let valor9 =  parseInt(document.querySelector("#btn9").value)

    document.getElementById("M1").innerHTML = ((valor1 + valor2 + valor3)/3).toFixed(2)
    document.getElementById("M2").innerHTML = ((valor4 + valor5 + valor6)/3).toFixed(2)
    document.getElementById("M3").innerHTML = ((valor7 + valor8 + valor9)/3).toFixed(2)
}


function Clear(){

    document.getElementById("btn1").value = ''
    document.getElementById("btn2").value = ''
    document.getElementById("btn3").value = ''
    document.getElementById("btn4").value = ''
    document.getElementById("btn5").value = ''
    document.getElementById("btn6").value = ''
    document.getElementById("btn7").value = ''
    document.getElementById("btn8").value = ''
    document.getElementById("btn9").value = ''

    document.getElementById("M1").innerHTML = ''
    document.getElementById("M2").innerHTML = ''
    document.getElementById("M3").innerHTML = ''

    document.getElementById("f").value = ''
}




