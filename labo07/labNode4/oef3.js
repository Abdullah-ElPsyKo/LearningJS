class User {
    constructor() {
        const prompt = require('prompt-sync')();
        this.voornaam = prompt('Wat is je voornaam? ');
        this.naam = prompt('Wat is je naam? ');
    }
    returnFullName() {
        return this.voornaam + ' ' + this.naam;
    }
}

class Game {
    constructor() {
        this.aantalSommen = 0;
        const prompt = require('prompt-sync')();
        this.getal = prompt("Over welk getal wil je sommen oplossen?");
        this.aantalSommen = prompt("Hoeveel sommen wil je oplossen?");
        this.correctAntw = 0;
    }

    totaal() {
        return this.aantalSommen;
    }

    sommen(){
        const prompt = require('prompt-sync')();
        for (let i = 0; i < this.aantalSommen; i++) {
            var antwSom = parseInt(prompt(`${i} + ${this.getal} = `));
            if (antwSom == i + this.getal) {
                this.correctAntw++;
            }
        }
        return this.correctAntw;
    }      
}

class Scoreboard {
    constructor(correct, totaal, fullname) {
        this.correct = correct;
        this.totaalSommen = totaal;
        this.fullname = fullname;
    }

    returnScore() {
        console.log(`Beste ${this.fullname}, je behaalde ${this.correct}/${this.totaalSommen}`);
    }   
}

module.exports = {
    User,
    Game,
    Scoreboard
};
