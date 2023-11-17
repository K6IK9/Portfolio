var primeiroconj = [];
var segundoconj = [];
var visualizacao = [];
var sinal = [];
var resutado;

var resu_visu = document.getElementById("resu_visu");

var pontocontrol = 0;


function imprimir() {

    resu_visu.innerHTML = visualizacao;
}



/* AINDA NÃO ULTILIZAVEL
function porcent() {
    pontocontrol = 1;

    var visualizacao = primeiroconj.join("");
    resu_visu.innerHTML = visualizacao + " %";


}
*/


function desfazer() {
    
    if (pontocontrol === 1) {
        segundoconj = segundoconj.slice(0);
        console.log("Segundo conjunto foi apagado ultimo caractere ");
        console.log(pontocontrol);
        console.log(segundoconj);
    } else {
        if (sinal === "") {
            sinal = [];
            console.log("Sinal apagado");
            console.log(pontocontrol);
            console.log(sinal);
        }else {
            primeiroconj = primeiroconj.slice(0);
            console.log(pontocontrol);
            console.log("Primeiro conjunto foi apagado ultimo caractere ");
            console.log(primeiroconj);
        }
        
    }
   imprimir();
}





function confirma() {
    switch (equacao) {
        case 1:
            resutado = parseFloat(primeiroconj.join("")) / parseFloat(segundoconj.join(""));

            visualizacao = resutado;
            imprimir();
            break;

        case 2:
            resutado = parseFloat(primeiroconj.join("")) * parseFloat(segundoconj.join(""));

            visualizacao = resutado;
            imprimir();
            break;

        case 3:
            resutado = parseFloat(primeiroconj.join("")) - parseFloat(segundoconj.join(""));

            visualizacao = resutado;
            imprimir();
            break;

        case 4:
            resutado = parseFloat(primeiroconj.join("")) + parseFloat(segundoconj.join(""));

            visualizacao = resutado;
            imprimir();
            break;
    }
}

var equacao;
function divisao() {
    if (pontocontrol === 0) {
        pontocontrol = 1;
        equacao = 1;
        sinal = " / ";
        visualizacao = primeiroconj.join("") + sinal;
        resu_visu.innerHTML = visualizacao;
    } else {
        alert("Até o momento a calculadora não realiza mais de uma operação \nRecarregue a página ou limpe a calculadora")
    }
}


function multiplicacao() {
    if (pontocontrol === 0) {
        pontocontrol = 1;
        equacao = 2;
        sinal = " X ";
        visualizacao = primeiroconj.join("") + sinal;
        resu_visu.innerHTML = visualizacao;
    } else {
        alert("Até o momento a calculadora não realiza mais de uma operação \nRecarregue a página ou limpe a calculadora")
    }
}


function subtracao() {
    if (pontocontrol === 0) {
        pontocontrol = 1;
        equacao = 3;
        sinal = " - ";
        visualizacao = primeiroconj.join("") + sinal;
        resu_visu.innerHTML = visualizacao;
    } else {
        alert("Até o momento a calculadora não realiza mais de uma operação \nRecarregue a página ou limpe a calculadora")
    }
}


function adicao() {
    if (pontocontrol === 0) {
        pontocontrol = 1;
        equacao = 4;
        sinal = " + ";
        visualizacao = primeiroconj.join("") + sinal;
        resu_visu.innerHTML = visualizacao;
    } else {
        alert("Até o momento a calculadora não realiza mais de uma operação \nRecarregue a página ou limpe a calculadora")
    }
}


function ponto() {
    if (pontocontrol === 1) {
        segundoconj.push(".");

    } else {
        primeiroconj.push(".");

    }
    visualizacao = primeiroconj.join("") + sinal + segundoconj.join("");
    imprimir();
}


function num0() {

    if (pontocontrol === 1) {
        segundoconj.push("0");

    } else {
        primeiroconj.push("0");

    }
    visualizacao = primeiroconj.join("") + sinal + segundoconj.join("");
    imprimir();
}
function num1() {
    if (pontocontrol === 1) {
        segundoconj.push("1");
    } else {
        primeiroconj.push("1");
    }

    visualizacao = primeiroconj.join("") + sinal + segundoconj.join("");
    imprimir();
}
function num2() {
    if (pontocontrol === 1) {
        segundoconj.push("2");

        imprimir();
    } else {
        primeiroconj.push("2");

        imprimir();
    }
    visualizacao = primeiroconj.join("") + sinal + segundoconj.join("");
    imprimir();
}
function num3() {
    if (pontocontrol === 1) {
        segundoconj.push("3");

        imprimir();
    } else {
        primeiroconj.push("3");

        imprimir();
    }
    visualizacao = primeiroconj.join("") + sinal + segundoconj.join("");
    imprimir();
}
function num4() {
    if (pontocontrol === 1) {
        segundoconj.push("4");

        imprimir();
    } else {
        primeiroconj.push("4");

        imprimir();
    }
    visualizacao = primeiroconj.join("") + sinal + segundoconj.join("");
    imprimir();
}
function num5() {
    if (pontocontrol === 1) {
        segundoconj.push("5");

        imprimir();
    } else {
        primeiroconj.push("5");

        imprimir();
    }
    visualizacao = primeiroconj.join("") + sinal + segundoconj.join("");
    imprimir();
}
function num6() {
    if (pontocontrol === 1) {
        segundoconj.push("6");

        imprimir();
    } else {
        primeiroconj.push("6");

        imprimir();
    }
    visualizacao = primeiroconj.join("") + sinal + segundoconj.join("");
    imprimir();
}
function num7() {
    if (pontocontrol === 1) {
        segundoconj.push("7");

        imprimir();
    } else {
        primeiroconj.push("7");

        imprimir();
    }
    visualizacao = primeiroconj.join("") + sinal + segundoconj.join("");
    imprimir();
}
function num8() {
    if (pontocontrol === 1) {
        segundoconj.push("8");

        imprimir();
    } else {
        primeiroconj.push("8");

        imprimir();
    }
    visualizacao = primeiroconj.join("") + sinal + segundoconj.join("");
    imprimir();
}

function num9() {
    if (pontocontrol === 1) {
        segundoconj.push("9");

        imprimir();
    } else {
        primeiroconj.push("9");

        imprimir();
    }
    visualizacao = primeiroconj.join("") + sinal + segundoconj.join("");
    imprimir();
}


function reset() {
    primeiroconj = [];
    segundoconj = [];

    pontocontrol = 0;

    equacao = 0;
    equacao = 0;

    sinal = [];
    resu_visu.innerHTML = "0";

}


