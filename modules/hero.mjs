import {
    weapons
} from './items.mjs';

let hero = {
    name: "Tristan",
    health: 100,
    avatar: "https://avatars.dicebear.com/v2/bottts/tristan.svg"
}

let getWeapon = function () {
    // Random
    let slump = Math.floor(Math.random() * weapons.length);
    return slump;
}

export {
    hero,
    getWeapon
};