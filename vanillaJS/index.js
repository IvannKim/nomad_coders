const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handdleClick() {
    const hasClass = title.classList.contains(CLICKED_CLASS);
    if (hasClass) {
        title.classList.remove(CLICKED_CLASS);
    } else {
        title.classList.add(CLICKED_CLASS);
    }
}

function init() {
    title.addEventListener("click", handdleClick);
}
init()