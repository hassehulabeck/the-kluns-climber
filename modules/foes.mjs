import {
    weapons
} from './items.mjs';

let foes = [{
        name: "Ace the Counter",
        level: 0
    },
    {
        name: "Gerda Anti",
        level: 1
    },
    {
        name: "Xerxes IV",
        level: 2
    }
];

let getAvatar = function (foe) {
    return `https://avatars.dicebear.com/v2/gridy/${foe.name}.svg`;
}
let getWeapon = function () {
    // Random
    let slump = Math.floor(Math.random() * weapons.length);
    return slump;
}
export {
    foes,
    getAvatar,
    getWeapon
};