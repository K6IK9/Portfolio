function noturno() {
    var body = document.querySelector("body");
    body.classList.toggle("backbody");

    var button_noturno = document.getElementById("noturnostyle");

    button_noturno.classList.toggle("buttonnotu");


    var tempnotu = document.getElementById("section_temp");

    tempnotu.classList.toggle("tempnoturno");
    tempnotu.classList.toggle("modo_noturno");
}