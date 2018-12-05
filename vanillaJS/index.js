const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handdleClick() {
title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handdleClick);
}
init()