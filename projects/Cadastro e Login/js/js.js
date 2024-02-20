var nome;
var email;
var number;
var senha;
var dataorganizada;
var p = document.getElementById("resultado");
var pontocontrol;
var sobrenome

function acessar() {


    nome = document.getElementById("nome").value;
    sobrenome = document.getElementById("sobrenome").value;
    nome += " " + sobrenome;


    email = document.getElementById("email").value;

    number = document.getElementById("number").value;

    formatardate();

    verificaespacovazio()

    p.innerHTML = pontocontrol;


    verificasenha();





    if (pontocontrol === 0) {

        const dadosparasalvar = {
            nome: nome,
            email: email,
            number: number,
            senha: senha,
            data: dataorganizada
        }

        localStorage.setItem('dados', JSON.stringify(dadosparasalvar));

        window.location.href = "login/indexlogin.html";
    }else {
        var campoincompletext = document.getElementById("campoincompleto");
        campoincompletext.innerHTML = "Preencha todos os campos abaixo";
    }

    

}

function verificaespacovazio() {

    pontocontrol = 0;

    if (nome === " ") {
        nome = document.getElementById("nome");
        nome.style.border = "1px solid red";
        pontocontrol += 1;
    }

    if (number === "") {
        number = document.getElementById("number");
        number.style.border = "1px solid red";
        pontocontrol += 1;
    }
    if (email === "") {
        email = document.getElementById("email");
        email.style.border = "1px solid red";
        pontocontrol += 1;
    }
    var senha2 = document.getElementById("senha2").value;
    if (senha2 === "") {
        senha2 = document.getElementById("senha2");
        senha2.style.border = "1px solid red";
        pontocontrol += 1;
    }
    
    if (sobrenome === "") {
        sobrenome = document.getElementById("sobrenome");
        sobrenome.style.border = "1px solid red";
        pontocontrol += 1;
    }

    senha = document.getElementById("senha1").value;
    if (senha === "") {
        senha = document.getElementById("senha1");
        senha.style.border = "1px solid red";
        pontocontrol += 1;

    }
  
    var date = document.getElementById("date").value;
    if(date === ''){
        date = document.getElementById("date");
        date.style.border = "1px solid red";
        pontocontrol += 1;
    }
   
  
    
}

function verificasenha() {

    var senha1 = document.getElementById("senha1").value;

    

    var senha2 = document.getElementById("senha2").value

    if (senha1 === senha2) {
        senha = senha1;
    } else {
        pontocontrol += 1;
        senhaerrada();
        return;
    }


}

function login() {
    var emaillogin = document.getElementById("emaillogin").value;
    var senhalogin = document.getElementById("senhalogin").value;
    var loginerrado = document.getElementById("loginerrado");

    var dadosrecuperados = localStorage.getItem('dados');


    if (dadosrecuperados) {

        var dadospessoa = JSON.parse(dadosrecuperados);

        var emailpessoa = dadospessoa.email;
        var senhapessoa = dadospessoa.senha;
    }else {
        alert = 'Sem dados';
    }


    if (emaillogin === emailpessoa && senhalogin === senhapessoa) {
        loginerrado.innerHTML = "email correto";
        window.location.href = "bemvindo.html";
    } else {
        loginerrado.innerHTML = "Email ou senha estão incorreto";
    }
   
}

function dadoscliente() {
    var dadosdocliente = localStorage.getItem('dados');

 if (dadosdocliente) {

        var dadospessoa = JSON.parse(dadosdocliente);


        var nomepessoa = dadospessoa.nome;
        var emailpessoa = dadospessoa.email;
        var senhapessoa = dadospessoa.senha;
        var numberpessoa = dadospessoa.number;
        var datapessoa = dadospessoa.data;
    }else {
        alert = 'Sem dados';
        return;
    }
    var dadostext = document.getElementById("resultadodocliente");

    dadostext.innerHTML = `<table><th> Nome: </th><th> Email:</th><th>Numero:</th><th>Senha:</th><th>Data</th> <tr> <td> ${nomepessoa} </td> <td> ${emailpessoa} </td><td> ${senhapessoa} </td><td> ${numberpessoa}</td><td> ${datapessoa} </td></tr></table>`;

}


function senhaerrada() {
    var senha1 = document.getElementById("senha1");
    var senha2 = document.getElementById("senha2");
    var textsenha = document.getElementById("senhaincorrta");

    textsenha.innerHTML = "Senha digitada não confere com a senha digitada acima"
    senha2.style.border = "1px solid red";
    senha1.style.border = "1px solid red";
}

function formatardate() {
    var date = document.getElementById("date").value;
    var datacap = new Date(date);
    var dia = datacap.getDate();
    var mes = datacap.getMonth() + 1;
    var ano = datacap.getFullYear();

    dataorganizada = `${dia}/${mes}/${ano}`;

}