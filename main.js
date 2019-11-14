import * as FoeModul from './modules/foes.mjs';
import * as HeroModul from './modules/hero.mjs';
import * as ItemModul from './modules/items.mjs';

//Rendera en foe och hero
document.addEventListener("DOMContentLoaded", () => {
    let div = document.getElementsByTagName("div");
    div[0].innerHTML = "<img src='" + FoeModul.getAvatar(2) + "' alt='" + FoeModul.foes[2].name + "'title='" + FoeModul.foes[2].name + " '>";
    div[0].innerHTML += "<img src='" + HeroModul.hero.avatar + "' alt='" + HeroModul.hero.name + " 'title='" + HeroModul.hero.name + " '>";
})

// Testa att de kan "dra" varsitt vapen.
console.log(ItemModul.weapons[FoeModul.getWeapon()]);
console.log(ItemModul.weapons[HeroModul.getWeapon()]);