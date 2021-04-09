const menuIcon = document.getElementById("menu-icon");
const slideOutMenu = document.getElementById("slideout-menu");

menuIcon.addEventListener("click", function () {
    if (slideOutMenu.style.opacity == "1") {
        slideOutMenu.style.opacity = "0";
        slideOutMenu.style.pointerEvents = "none";
    } else {
        slideOutMenu.style.opacity = "1";
        slideOutMenu.style.pointerEvents = "auto";
    }
})