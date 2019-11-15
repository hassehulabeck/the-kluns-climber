import * as Foe from './modules/foes.mjs';
import * as Hero from './modules/hero.mjs';
import * as Item from './modules/items.mjs';
import levels from './modules/levels.mjs';

var duelInProgress = false;
var gameOver = false;

document.addEventListener("DOMContentLoaded", () => {
    let playArea = document.getElementById("playArea");

    // Rendera levels
    levels.forEach((level, index) => {
        let section = document.createElement("section");
        let img = document.createElement("img");
        img.setAttribute("src", Foe.getAvatar(level.foe));
        img.setAttribute("alt", Foe.foes[level.foe].name);
        img.setAttribute("title", Foe.foes[level.foe].name);

        section.appendChild(img);

        playArea.appendChild(section);

        // Rendera hero på näst lägsta nivån.
        if (index == Hero.hero.level) {
            let img = document.createElement("img");
            img.setAttribute("src", Hero.hero.avatar);
            img.setAttribute("alt", Hero.hero.name);
            img.setAttribute("title", Hero.hero.name);
            img.id = "hero";

            section.appendChild(img);

        }
    });
})


// Get user input
window.addEventListener("keypress", (e) => {
    // Om matchen inte är igång, starta den.
    if (!duelInProgress) {
        duelInProgress = true;
    }

    if (e.key == "s" || e.key == "S")
        Hero.hero.weapon = 0;
    if (e.key == "x" || e.key == "X")
        Hero.hero.weapon = 1;
    if (e.key == "p" || e.key == "P")
        Hero.hero.weapon = 2;

    // Set foe weapon
    let level = Hero.hero.level;
    let foeId = levels[level].foe;
    Foe.setWeapon(foeId);

    // Kontrollera klunsen
    if (Foe.foes[foeId].kluns < 5 && Hero.hero.kluns < 5) {
        checkKluns(foeId);
        updateMatch(foeId);
    } else {
        console.log("Någon har vunnit");
    }
})

function updateMatch(foeId) {
    let info = document.querySelector("#info p");
    info.innerHTML = Foe.foes[foeId].name + ": " + Foe.foes[foeId].kluns;
    info.innerHTML += "<p>" + Hero.hero.name + ": " + Hero.hero.kluns;
    info.innerHTML += "<p>Health: " + Hero.hero.health;
    info.innerHTML += "<p>Score: " + Hero.hero.score;

    if (gameOver) {
        info.innerHTML += "<h2>Game Over"
    }

    if (!duelInProgress) {
        // matchen är slut.
        if (Hero.hero.kluns > Foe.foes[foeId].kluns) {
            Hero.moveHero(-1);
            Hero.hero.score += 5 * (5 - Hero.hero.level)
        } else {
            Hero.moveHero(1);
            let klunsDiff = Foe.foes[foeId].kluns - Hero.hero.kluns;
            Hero.hero.score -= (klunsDiff + (5 - Hero.hero.level));
        }

        // Reset kluns score.
        Foe.foes[foeId].kluns = 0;
        Hero.hero.kluns = 0;
    }

}


function checkKluns(foeId) {

    // Lika?
    if (Foe.foes[foeId].weapon == Hero.hero.weapon) {
        console.log("LIKA: " + Foe.foes[foeId].weapon + " - " + Hero.hero.weapon)
    }

    // Vinner Foe?
    else if ((Hero.hero.weapon == Foe.foes[foeId].weapon + 1) ||
        (Hero.hero.weapon == 0 && Foe.foes[foeId].weapon == 2)) {
        console.log("FOE: " + Foe.foes[foeId].weapon + " - " + Hero.hero.weapon)
        Foe.foes[foeId].kluns++;
        Hero.hero.health--;
    } else {
        console.log("HERO: " + Foe.foes[foeId].weapon + " - " + Hero.hero.weapon)
        Hero.hero.kluns++;
    }

    if (Hero.hero.kluns == 5 || Foe.foes[foeId].kluns == 5) {
        duelInProgress = false;
    }

    if (Hero.hero.health <= 0)
        gameOver = true;
}

// Testa heroMoving.
window.Hero = Hero;