const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "#7f8c8d";

function handdleClick() {
    const currentColor = title.style.color;
    if (currentColor === BASE_COLOR) {
        title.style.color = OTHER_COLOR;
    } else {
        title.style.color = BASE_COLOR;
    }
}

function init() {
    title.style.color = BASE_COLOR;
    title.addEventListener("click", handdleClick);

}
init()

function handleOffline() {
    console.log("u r offline. bye bye. check ur LAN");
}

function handleOnline() {
    console.log("welcome back.");
}
window.addEventListener("offline", handleOffline);
window.addEventListener("online", handleOnline);