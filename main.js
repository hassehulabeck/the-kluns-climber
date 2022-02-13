import * as Foe from './modules/foes.mjs';
import * as Hero from './modules/hero.mjs';
import * as Item from './modules/items.mjs';
import levels from './modules/levels.mjs';

var duelInProgress = false;
var gameOver = false;
var recentScore = 0;
var highscore = 0;
let button;

document.addEventListener("DOMContentLoaded", startGame)

function startGame() {
    console.log("start");
    let playArea = document.getElementById("playArea");
    playArea.innerHTML = "";

    // Check start button
    button = document.getElementById("start");

    // Reset values.
    Hero.hero.health = Hero.hero.startHealth;
    Hero.hero.level = levels.length - 2; // One below bottom level.
    Hero.hero.score = 0;
    gameOver = false;
    duelInProgress = false;


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
    // Get user input
    window.addEventListener("keypress", listen);

}






function listen(e) {
    // Om matchen inte är igång, starta den.
    if (!duelInProgress) {
        duelInProgress = true;
        button.classList.add("noShow");
    }

    if (e.key == "s" || e.key == "S") {
        Hero.hero.weapon = 0;
        fight();
    }
    if (e.key == "x" || e.key == "X") {
        Hero.hero.weapon = 1;
        fight();
    }
    if (e.key == "p" || e.key == "P") {
        Hero.hero.weapon = 2;
        fight();
    }

    function fight() {
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
    }
}

function updateMatch(foeId) {
    let info = document.querySelector("#info p");
    info.innerHTML = Foe.foes[foeId].name + ": " + Foe.foes[foeId].kluns;
    info.innerHTML += "<p>" + Hero.hero.name + ": " + Hero.hero.kluns;
    info.innerHTML += "<p>Health: " + Hero.hero.health;
    info.innerHTML += "<p>Score: " + Hero.hero.score;

    if (gameOver) {
        info.innerHTML += "<h2>Game Over"
        window.removeEventListener("keypress", listen);
        checkScores();

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


function checkScores() {
    button.addEventListener("click", startGame);
    recentScore = Hero.hero.score;
    if (recentScore > highscore) {
        highscore = recentScore;
    }
    let info = document.querySelector("#info p");
    setTimeout(() => {
        info.innerHTML = "<p>Highscore: " + highscore;
        info.innerHTML += "<p>Recent score: " + recentScore;
        button.classList.remove("noShow");
    }, 1300);
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
        Hero.hero.health -= (5 - Hero.hero.level) * 1;
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