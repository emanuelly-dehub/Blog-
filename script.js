// ================================
// MENU MOBILE
// ================================

const menuMobile = document.getElementById("menuMobile");
const navegacao = document.getElementById("navegacao");

menuMobile.addEventListener("click", function () {

    navegacao.classList.toggle("aberto");

});


// Fecha o menu quando o usuário
// clica em algum link

const linksMenu = document.querySelectorAll(".navegacao a");

linksMenu.forEach(function (link) {

    link.addEventListener("click", function () {

        navegacao.classList.remove("aberto");

    });

});


// ================================
// TEMA ESCURO
// ================================

const botaoTema = document.getElementById("botaoTema");


// Verifica se o usuário já escolheu
// um tema anteriormente

const temaSalvo = localStorage.getItem("tema");

if (temaSalvo === "escuro") {

    document.body.classList.add("tema-escuro");

    botaoTema.textContent = "☀️";

}


// Troca o tema

botaoTema.addEventListener("click", function () {

    document.body.classList.toggle("tema-escuro");


    if (document.body.classList.contains("tema-escuro")) {

        botaoTema.textContent = "☀️";

        localStorage.setItem("tema", "escuro");

    } else {

        botaoTema.textContent = "🌙";

        localStorage.setItem("tema", "claro");

    }

});


// ================================
// FORMULÁRIO
// ================================

const formulario = document.getElementById("formulario");

const email = document.getElementById("email");

const mensagem = document.getElementById("mensagem");


formulario.addEventListener("submit", function (evento) {

    evento.preventDefault();


    if (email.value.trim() === "") {

        mensagem.textContent =
            "Digite um e-mail válido.";

        return;

    }


    mensagem.textContent =
        "Cadastro realizado com sucesso! 💜";


    email.value = "";

});
