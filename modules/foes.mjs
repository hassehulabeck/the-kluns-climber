import {
    weapons
} from './items.mjs';

let foes = [{
        name: "Ace the Counter",
    },
    {
        name: "Gerda Anti",
    },
    {
        name: "Xerxes IV",
    },
    {
        name: "Rune Holta",
    },
    {
        name: "Doris Delete"
    }
];

let getAvatar = function (foe) {
    let name = foes[foe].name;
    return `https://avatars.dicebear.com/v2/gridy/${name}.svg`;
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