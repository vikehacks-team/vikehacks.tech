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

document.querySelectorAll("#hero-img path").forEach(it => {
    it.style.strokeDasharray = it.getTotalLength();
    it.style.strokeDashoffset = it.getTotalLength();
});

Array.from(document.querySelectorAll("a")).filter(link=>{
    return link.getAttribute("href").startsWith("#");
}).forEach(link=>{
    console.log(link);
    link.addEventListener("click", (event) => {
        document.querySelectorAll(link.getAttribute("href"))[0].scrollIntoView({behavior: "smooth"});
        event.preventDefault();
    });
});