document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("menu");
    const closeBtn = document.getElementById('close');

    // Abrir e fechar o menu ao clicar no ícone do hambúrguer
    hamburgerIcon.addEventListener("click", function () {
        mobileMenu.style.display = (mobileMenu.style.display === "flex") ? "none" : "flex";
    });

    // Fecha o menu ao clicar no ícone de "X"
    closeBtn.addEventListener('click', () => {
        menu.style.display = 'none';
    });

    // Fechar o menu ao clicar fora dele
    document.addEventListener("click", function (event) {
        const isClickInside = hamburgerIcon.contains(event.target) || mobileMenu.contains(event.target);

        if (!isClickInside) {
            mobileMenu.style.display = "none";
        }
    });
});

window.onscroll = function () {
    var headerHeight = document.querySelector("header").offsetHeight;
    var nav = document.querySelector("header");

    if (window.pageYOffset >= headerHeight) {
        nav.classList.add("fixed");
    } else {
        nav.classList.remove("fixed");
    }
};