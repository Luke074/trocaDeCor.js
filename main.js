const item01 = document.getElementById('caixa1');
const item02 = document.getElementById('caixa2');
const item03 = document.getElementById('caixa3');
const item04 = document.getElementById('caixa4');
const item05 = document.getElementById('caixa5');
const item06 = document.getElementById('caixa6');

function trocaCor1(){
    document.getElementById('caixa1').style.backgroundColor = "yellow";
    document.getElementById('caixa2').style.backgroundColor = "black";
    document.getElementById('caixa3').style.backgroundColor = "black";
    document.getElementById('caixa4').style.backgroundColor = "black";
    document.getElementById('caixa5').style.backgroundColor = "black";
    document.getElementById('caixa6').style.backgroundColor = "black";
}
function trocaCor2(){
    document.getElementById('caixa1').style.backgroundColor = "black";
    document.getElementById('caixa2').style.backgroundColor = "yellow";
    document.getElementById('caixa3').style.backgroundColor = "black";
    document.getElementById('caixa4').style.backgroundColor = "black";
    document.getElementById('caixa5').style.backgroundColor = "black";
    document.getElementById('caixa6').style.backgroundColor = "black";
}
function trocaCor3(){
    document.getElementById('caixa1').style.backgroundColor = "black";
    document.getElementById('caixa2').style.backgroundColor = "black";
    document.getElementById('caixa3').style.backgroundColor = "yellow";
    document.getElementById('caixa4').style.backgroundColor = "black";
    document.getElementById('caixa5').style.backgroundColor = "black";
    document.getElementById('caixa6').style.backgroundColor = "black";
}
function trocaCor4(){
    document.getElementById('caixa1').style.backgroundColor = "black";
    document.getElementById('caixa2').style.backgroundColor = "black";
    document.getElementById('caixa3').style.backgroundColor = "black";
    document.getElementById('caixa4').style.backgroundColor = "yellow";
    document.getElementById('caixa5').style.backgroundColor = "black";
    document.getElementById('caixa6').style.backgroundColor = "black";
}
function trocaCor5(){
    document.getElementById('caixa1').style.backgroundColor = "black";
    document.getElementById('caixa2').style.backgroundColor = "black";
    document.getElementById('caixa3').style.backgroundColor = "black";
    document.getElementById('caixa4').style.backgroundColor = "black";
    document.getElementById('caixa5').style.backgroundColor = "yellow";
    document.getElementById('caixa6').style.backgroundColor = "black";
}
function trocaCor6(){
    document.getElementById('caixa1').style.backgroundColor = "black";
    document.getElementById('caixa2').style.backgroundColor = "black";
    document.getElementById('caixa3').style.backgroundColor = "black";
    document.getElementById('caixa4').style.backgroundColor = "black";
    document.getElementById('caixa5').style.backgroundColor = "black";
    document.getElementById('caixa6').style.backgroundColor = "yellow";
}

item01.addEventListener('click', trocaCor1);
item02.addEventListener('click', trocaCor2);
item03.addEventListener('click', trocaCor3);
item04.addEventListener('click', trocaCor4);
item05.addEventListener('click', trocaCor5);
item06.addEventListener('click', trocaCor6);