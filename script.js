// MENU MOBILE

const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
    menu.classList.toggle("active");
});


// FECHAR MENU AO CLICAR EM UM LINK

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});


// MODAL DOS CARDS

const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const modalText = document.getElementById("modalText");
const modalTitle = document.getElementById("modalTitle");

document.querySelectorAll(".read-more").forEach(button => {

    button.addEventListener("click", () => {

        const card = button.closest(".card");
        const title = card.querySelector("h3").textContent;

        modalTitle.textContent = title;
        modalText.textContent = button.dataset.text;

        modal.classList.add("active");
    });

});

closeModal.addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (event) => {

    if (event.target === modal) {
        modal.classList.remove("active");
    }

});


// NEWSLETTER

const form = document.getElementById("newsletterForm");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {

    event.preventDefault();

    if (email.value.trim() !== "") {

        message.textContent =
            "🤎 Inscrição realizada com sucesso!";

        form.reset();

    }

});


// ANIMAÇÃO AO APARECER NA TELA

const elements = document.querySelectorAll(
    ".card, .look, .tip"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);

elements.forEach(element => {

    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "0.6s ease";

    observer.observe(element);

});
