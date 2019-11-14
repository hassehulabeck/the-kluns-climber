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

let getFoeAvatar = function (foe) {
    return `https://avatars.dicebear.com/v2/gridy/${foe.name}.svg`;
}
let getFoeWeapon = function () {
    // Random
    let slump = Math.floor(Math.random() * weapons.length);
    return slump;
}
export {
    foes,
    getFoeAvatar,
    getFoeWeapon
};