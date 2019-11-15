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
    for (let i = 0; i <= 100; i += 5) {
        setTimeout(() => {
            heroImg.style.opacity = 1 - (i / 100);

        }, 10 * i)
    }
}


export {
    hero,
    moveHero
};