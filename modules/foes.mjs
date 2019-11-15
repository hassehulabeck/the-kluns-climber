import {
    weapons
} from './items.mjs';

let foes = [{
        name: "Ace the Counter",
        weapon: null
    },
    {
        name: "Gerda Anti",
        weapon: null
    },
    {
        name: "Xerxes IV",
        weapon: null
    },
    {
        name: "Rune Holtab",
        weapon: null
    },
    {
        name: "Doris Delete",
        weapon: null
    }
];

let getAvatar = function (foe) {
    let name = foes[foe].name;
    return `https://avatars.dicebear.com/v2/gridy/${name}.svg`;
}
let setWeapon = function (foe) {
    // Random
    let slump = Math.floor(Math.random() * weapons.length);
    foes[foe].weapon = slump;
}
export {
    foes,
    getAvatar,
    setWeapon
};