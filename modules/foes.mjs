import {
    weapons
} from './items.mjs';

let foes = [{
        name: "Ace the Counter",
        weapon: null,
        kluns: 0
    },
    {
        name: "Gerda Anti",
        weapon: null,
        kluns: 0
    },
    {
        name: "Xerxes IV",
        weapon: null,
        kluns: 0
    },
    {
        name: "Rune Holtab",
        weapon: null,
        kluns: 0
    },
    {
        name: "Doris Delete",
        weapon: null,
        kluns: 0
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