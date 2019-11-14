import * as FoeModul from './modules/foes.mjs';
import * as HeroModul from './modules/hero.mjs';
import * as ItemModul from './modules/items.mjs';

//Rendera en foe och hero
document.addEventListener("DOMContentLoaded", () => {
    let div = document.getElementsByTagName("div");
    div[0].innerHTML = "<img src='" + FoeModul.getAvatar(2) + "' >";
    div[0].innerHTML += "<img src='" + HeroModul.getAvatar() + "' >";
})

// Testa att de kan "dra" varsitt vapen.
console.log(ItemModul[FoeModul.getWeapon()]);
console.log(ItemModul[HeroModul.getWeapon()]);