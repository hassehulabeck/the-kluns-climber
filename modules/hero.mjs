import levels from "./levels.mjs";

let hero = {
    name: "Tristan",
    health: 100,
    avatar: "https://avatars.dicebear.com/v2/bottts/tristan.svg",
    weapon: null,
    level: 3,
    kluns: 0,
    score: 0
}

function moveHero(direction) {

    hero.level += direction;

    // Hantera gränsvärden.
    if (hero.level < 0)
        hero.level = 0;
    if (hero.level > levels.length - 1) {
        hero.level = levels.length - 1;
        hero.health = 0;
    }

    let heroImg = document.querySelector("img#hero");
    for (let i = 0; i <= 100; i += 5) {
        setTimeout(() => {
            heroImg.style.opacity = 1 - (i / 100);
            if (i > 95)
                renderHero();
        }, 10 * i)
    }
}


function renderHero() {
    // First, remove old hero.
    let oldHero = document.getElementById("hero");
    oldHero.parentNode.removeChild(oldHero);

    let sections = document.getElementsByTagName("section");

    let img = document.createElement("img");
    img.setAttribute("src", Hero.hero.avatar);
    img.setAttribute("alt", Hero.hero.name);
    img.setAttribute("title", Hero.hero.name);
    img.id = "hero";
    img.style.opacity = 0;

    sections[hero.level].appendChild(img);

    // Fade in
    for (let i = 0; i <= 100; i += 1) {
        setTimeout(() => {
            img.style.opacity = 0 + (i / 100);
        }, 11 * i)
    }

}
export {
    hero,
    moveHero,
    renderHero
};