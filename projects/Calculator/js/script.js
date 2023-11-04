var cadeianumerico = [];

var resutadovisual;
var resu_visu = document.getElementById("resu_visu");
var resu;

function imprimir() {
    resu = cadeianumerico.join("");
    resutadovisual = resu
    console.log(resu);
    resu_visu = resutadovisual;
}
 resu = cadeianumerico.join("");
console.log(resu);


function imprimir() {
    var resu = cadeianumerico.join("");
    resutadovisual = resu; // Atualize resutadovisual
    resu_visu.innerHTML = resutadovisual; // Atualize a exibição na página
    console.log(resu);
}




var resultado1 = parseInt(cadeianumerico[0]) + parseInt(cadeianumerico[1]);
var resultado2 = parseInt(segundacadeia[0]) + parseInt(segundacadeia[1]);


var res
console.log(resultado1);
console.log(resultado2);

var resultado3 = resultado1 + resultado2;

console.log(resultado3);




function num0() {
    cadeianumerico.push("0");
    imprimir();
}
function num1() {
    cadeianumerico.push("1");
    imprimir();

}
function num2() {
    cadeianumerico.push("2");
    imprimir();
}
function num3() {
    cadeianumerico.push("3");
    imprimir();
}
function num4() {
    cadeianumerico.push("4");
    imprimir();
}
function num5() {
    cadeianumerico.push("5");
    imprimir();
}
function num6() {
    cadeianumerico.push("6");
    imprimir();
}
function num7() {
    cadeianumerico.push("7");
    imprimir();
}
function num8() {
    cadeianumerico.push("8");
    imprimir();
}
function num9() {
    cadeianumerico.push("9");
    imprimir();
}

function reset() {
    cadeianumerico = [];
    imprimir();

}


