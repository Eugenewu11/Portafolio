 document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".mobile-menu-button");
    const menuPopover = document.querySelector(".mobile-menu-popover");
    const menuLinks = document.querySelectorAll(".mobile-menu-link");

    // Abrir/cerrar menú
    menuButton.addEventListener("click", () => {
      menuPopover.classList.toggle("show");
    });

    // Cerrar menú al hacer click en un link
    menuLinks.forEach(link => {
      link.addEventListener("click", () => {
        menuPopover.classList.remove("show");
      });
    });
  });