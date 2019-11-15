import * as FoeModul from './modules/foes.mjs';
import * as HeroModul from './modules/hero.mjs';
import * as ItemModul from './modules/items.mjs';
import levels from './modules/levels.mjs';

document.addEventListener("DOMContentLoaded", () => {
    let playArea = document.getElementById("playArea");

    // Rendera levels
    levels.forEach((level, index) => {
        let section = document.createElement("section");
        let img = document.createElement("img");
        img.setAttribute("src", FoeModul.getAvatar(level.foe));
        img.setAttribute("alt", FoeModul.foes[level.foe].name);
        img.setAttribute("title", FoeModul.foes[level.foe].name);

        section.appendChild(img);

        playArea.appendChild(section);

        // Rendera hero på näst lägsta nivån.
        if (index == levels.length - 2) {
            let img = document.createElement("img");
            img.setAttribute("src", HeroModul.hero.avatar);
            img.setAttribute("alt", HeroModul.hero.name);
            img.setAttribute("title", HeroModul.hero.name);
            img.id = "hero";

            section.appendChild(img);

        }
    });
})

// Testa att de kan "dra" varsitt vapen.
console.log(ItemModul.weapons[FoeModul.getWeapon()]);
console.log(ItemModul.weapons[HeroModul.getWeapon()]);