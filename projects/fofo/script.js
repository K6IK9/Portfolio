function mostrarSurpresa() {
    var mensagens = [
        "Você é a razão do meu sorriso Marcelinhaa!",
        "Sua felicidade é a minha felicidade!",
        "Obrigado por estar sempre ao meu lado!",
        "Você é a pessoa mais especial da minha vida!",
        "Te amo mais do que as palavras podem expressar!",
        "Vamos assistir Loki hihih juntinhoossss"
    ];

    var mensagemAleatoria = mensagens[Math.floor(Math.random() * mensagens.length)];
    
    document.getElementById('mensagem').innerText = mensagemAleatoria;
}
