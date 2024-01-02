function noturno() {
    var linkstyle = document.getElementById("linkstyle");

    var hrefstyle = linkstyle.getAttribute("href");

    if(hrefstyle === "css/style.css"){
        linkstyle.setAttribute("href", "css/style_Escuro.css");
    }else{
        linkstyle.setAttribute("href", "css/style.css");
    }
}
