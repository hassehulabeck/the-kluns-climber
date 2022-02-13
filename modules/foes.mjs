import { weapons } from "./items.mjs";

let foes = [
  {
    name: "Hardy Olsson",
    weapon: null,
    kluns: 0,
  },
  {
    name: "Gerda Anti",
    weapon: null,
    kluns: 0,
  },
  {
    name: "Vlad IV Ostok",
    weapon: null,
    kluns: 0,
  },
  {
    name: "Britt the Brit",
    weapon: null,
    kluns: 0,
  },
  {
    name: "The Rock",
    weapon: null,
    kluns: 0,
  },
];

let getAvatar = function (foe) {
  let name = foes[foe].name;
  return `https://avatars.dicebear.com/v2/gridy/${name}.svg`;
};
let setWeapon = function (foe) {
  // Random
  let slump = Math.floor(Math.random() * weapons.length);
  foes[foe].weapon = slump;
};
export { foes, getAvatar, setWeapon };
