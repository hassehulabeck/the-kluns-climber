import * as FoeModul from './modules/foes.mjs';
import * as HeroModul from './modules/hero.mjs';
import * as ItemModul from './modules/items.mjs';
import levels from './modules/levels.mjs';

document.addEventListener("DOMContentLoaded", () => {
    let div = document.getElementsByTagName("div");

    // Rendera levels
    levels.forEach((level, index) => {
        let section = document.createElement("section");
        let img = document.createElement("img");
        img.setAttribute("src", FoeModul.getAvatar(index));
        img.setAttribute("alt", FoeModul.foes[index].name);
        img.setAttribute("title", FoeModul.foes[index].name);

        section.appendChild(img);

        div[0].appendChild(section);
    });

    // div[0].innerHTML += "<img src='" + HeroModul.hero.avatar + "' alt='" + HeroModul.hero.name + " 'title='" + HeroModul.hero.name + " '>";

})

// Testa att de kan "dra" varsitt vapen.
console.log(ItemModul.weapons[FoeModul.getWeapon()]);
console.log(ItemModul.weapons[HeroModul.getWeapon()]);