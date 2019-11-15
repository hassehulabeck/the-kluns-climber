let hero = {
    name: "Tristan",
    health: 100,
    avatar: "https://avatars.dicebear.com/v2/bottts/tristan.svg",
    weapon: null,
    level: 3,
    kluns: null
}

function moveHero(direction) {
    hero.level += direction;
    let heroImg = document.querySelector("img#hero");
    for (let i = 1; i > 0; i = i - 0.05) {
        fadeHero(heroImg, i);
    }
}

function fadeHero(heroImg, i) {
    setTimeout(function () {
        heroImg.style.opacity = i;
        console.log(i)
    }, 1000);
}

export {
    hero,
    moveHero
};