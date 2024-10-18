function calcularIMC(){
   
    document.getElementById("peso").style.borderColor = "white";
    document.getElementById("peso").style.background = "#fffff";
    document.getElementById("altura").style.borderColor = "white";
    document.getElementById("altura").style.background = "#fffff";
    if(document.getElementById("peso").value == ""){
        alert("preencha o peso");
    document.getElementById("peso").style.borderColor = "red";
    document.getElementById("peso").style.background = "#ffe5e5";
    document.getElementById("peso").focus();
    return false;
}

if(document.getElementById("altura").value == ""){
    alert("preencha a altura");
document.getElementById("altura").style.borderColor = "red";
document.getElementById("altura").style.background = "#ffe5e5";
document.getElementById("altura").focus();
return false;
}
var peso = parseFloat(document.getElementById("peso").value);
var altura = parseFloat(document.getElementById("altura").value);
var resultado = peso/(altura*altura);
alert("seu IMC é : "+ resultado);
    return true;
}