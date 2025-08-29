const fades = document.querySelectorAll(".fade")

const checkFade = () => {
    fades.forEach(el => {
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight - 50){
            el.classList.add("show")
        }
    })
}

window.addEventListener("scroll", checkFade)
window.addEventListener("load", checkFade)

window.addEventListener("beforeunload", () => {
  document.body.classList.add("fade-out");
});