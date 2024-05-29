document.addEventListener("DOMContentLoaded", () => {

    const openButton = document.querySelector("#open-button");
    const closeButton = document.querySelector("#close-button");
    const menuMobile = document.querySelector("#menu-mobile");
    const overlay = document.querySelector("#overlay");

    openButton.addEventListener("click", () => {
        menuMobile.style.display = "block";
        overlay.style.display = "block";
    });

    closeButton.addEventListener("click", () => {
        menuMobile.style.display = "none";
        overlay.style.display = "none";
    });

    // Redimensionado
    window.addEventListener("resize", () => {
        let screen = parseFloat(document.body.clientWidth);

        if(screen > 850) {
            menuMobile.style.display = "none";
            overlay.style.display = "none";
        }
    })

})