document.addEventListener("DOMContentLoaded", function() {
    var picWrap = document.querySelector(".pic-wrap");

    var imagenes = picWrap.getElementsByTagName("img");

    var numeroDeFotos = imagenes.length;

    var spanElement = document.querySelector(".profile-posts");

    spanElement.textContent = numeroDeFotos;
});
function Seguido() {
    var button_follow = document.getElementById("btn_follow");
    var tick = document.getElementById("tick");
    if (button_follow.classList.contains("following")) {
        button_follow.classList.remove("following");
        button_follow.textContent = "Follow";
        button_follow.style.backgroundColor = "#0095f6";
    } else {
        button_follow.classList.add("following");
        button_follow.textContent = "Following"+" \u2713";
        button_follow.style.backgroundColor = "gray";
    }
}