import {
    weapons
} from './items.mjs';

let hero = {
    name: "Tristan",
    health: 100,
    avatar: "https://avatars.dicebear.com/v2/bottts/tristan.svg"
}

let getHeroWeapon = function () {
    // Random
    let slump = Math.floor(Math.random() * weapons.length);
    // Returnera enbart slumptalet.
    return slump;
}

export {
    getHeroWeapon,
    getWeapon
};