var primeiroconj = [];
var segundoconj = [];
var visualizacao = [];
var sinal;

var resu_visu = document.getElementById("resu_visu");
var resu;
var pontocontrol;


function imprimir() {

    resu_visu.innerHTML = visualizacao;
    console.log(resu);
}



/* AINDA NÃO ULTILIZAVEL
function porcent() {
    pontocontrol = 1;

    var visualizacao = primeiroconj.join("");
    resu_visu.innerHTML = visualizacao + " %";


}
*/

function confirma() {
    console.log(primeiroconj);
    console.log(segundoconj);
}

var pontodivisao;
function divisao() {
    pontocontrol = 1;
    pontodivisao = 1;
    sinal = " / "
    visualizacao = primeiroconj.join("") + primeiroconj.push(" / ");
    resu_visu.innerHTML = visualizacao ;
}




function num0() {

    if (pontocontrol === 1) {
        segundoconj.push("0");
        visualizacao = segundoconj.join("");
        imprimir();
    } else {
        primeiroconj.push("0");
        visualizacao = primeiroconj.join("");
        imprimir();
    }
    

}
function num1() {
    if (pontocontrol === 1) {
        segundoconj.push("1");
        visualizacao =   segundoconj.join("");
        imprimir();
    } else {
        primeiroconj.push("1");
        visualizacao = primeiroconj.join("");
        imprimir();
    }

}
function num2() {
    if (pontocontrol === 1) {
        segundoconj.push("2");
        visualizacao =   segundoconj.join("");
        imprimir();
    } else {
        primeiroconj.push("2");
        visualizacao = primeiroconj.join("");
        imprimir();
    }
}
function num3() {
    if (pontocontrol === 1) {
        segundoconj.push("3");
        visualizacao =   segundoconj.join("");
        imprimir();
    } else {
        primeiroconj.push("3");
        visualizacao = primeiroconj.join("");
        imprimir();
    }
}
function num4() {
    if (pontocontrol === 1) {
        segundoconj.push("4");
        visualizacao =   segundoconj.join("");
        imprimir();
    } else {
        primeiroconj.push("4");
        visualizacao = primeiroconj.join("");
        imprimir();
    }
}
function num5() {
    if (pontocontrol === 1) {
        segundoconj.push("5");
        visualizacao =  segundoconj.join("");
        imprimir();
    } else {
        primeiroconj.push("5");
        visualizacao = primeiroconj.join("");
        imprimir();
    }
}
function num6() {
    if (pontocontrol === 1) {
        segundoconj.push("6");
        visualizacao =   segundoconj.join("");
        imprimir();
    } else {
        primeiroconj.push("6");
        visualizacao = primeiroconj.join("");
        imprimir();
    }
}
function num7() {
    if (pontocontrol === 1) {
        segundoconj.push("7");
        visualizacao =   segundoconj.join("");
        imprimir();
    } else {
        primeiroconj.push("7");
        visualizacao = primeiroconj.join("");
        imprimir();
    }
}
function num8() {
    if (pontocontrol === 1) {
        segundoconj.push("8");
        visualizacao =   segundoconj.join("");
        imprimir();
    } else {
        primeiroconj.push("8");
        visualizacao = primeiroconj.join("");
        imprimir();
    }
}

function num9() {
    if (pontocontrol === 1) {
        segundoconj.push("9");
        visualizacao =   segundoconj.join("");
        imprimir();
    } else {
        primeiroconj.push("9");
        visualizacao = primeiroconj.join("");
        imprimir();
    }
}

function reset() {
    primeiroconj = [];
    segundoconj = [];
    pontocontrol = 0;

    var resu = primeiroconj.join("");
    resu_visu.innerHTML =  "0";

}


