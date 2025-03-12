document.addEventListener("DOMContentLoaded", function () {
    const header = document.getElementById("header");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) { // Aparece al hacer scroll más de 50px
            header.classList.add("header-visible");
        } else {
            header.classList.remove("header-visible");
        }
    });
});
