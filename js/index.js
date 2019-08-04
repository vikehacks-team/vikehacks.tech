const nav = document.querySelector("nav");
const blackout = document.querySelector(".blackout");

blackout.addEventListener("click", () => {
    nav.classList.remove("open");
    blackout.style.visibility = "hidden";
});

document.querySelector("#menu-activate").addEventListener("click", () => {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        blackout.style.visibility = "visible";
    } else {
        blackout.style.visibility = "hidden";
    }
    document.querySelectorAll("nav a").forEach(it => {
        const listener = e => {
            nav.classList.remove("open");
            blackout.style.visibility = "hidden";
            it.removeEventListener("click", listener);
        };
        it.addEventListener("click", listener);
    });
});
