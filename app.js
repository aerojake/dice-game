
//Requires class Players as arguments for constructor
class DiceMatch {
    //arguments are Player class
    // constructor(...contenders) {
    //     //list of players
    //     this.players = [];
    //     this.activeBattle = {};
    //     this.battleHistory = [];
    //     this.turnCount = 1;
    //     for (let contender of contenders) {
    //         this.players.push(contender);
    //     };
    // }

    constructor(
        { attacker, attackerLives } = {},
        { defender, defenderLives } = {},
        dieSideCount) {

        //list of players
        this.attacker = attacker;
        this.attackerLives = attackerLives;
        this.defender = defender;
        this.defenderLives = defenderLives;
        this.dieSideCount = dieSideCount;



        // this.players = [];
        // this.activeBattle = {};
        // this.battleHistory = [];
        // this.turnCount = 1;
    }

    // get numPlayers() {
    //     return this.players.length;
    // }

    // get whosTurn() {
    //     //return this.players[this.turnCount % this.numPlayers - 1];
    //     return this.players[0];
    // }

    // nextPlayer() {
    //     let turnOver = this.players.shift();
    //     this.players.push(turnOver);
    //     return this.players[0];
    // }

    // initBattle() {
    //     this.activeBattle = {
    //         attacker: this.players[0],
    //         defender: this.players[1],
    //         attackDice: [],
    //         defendDice: [],
    //         attackScore: 0,
    //         defendScore: 0
    //     };
    // }

    attack() {

        const fight = this.activeBattle;

        fight.attackDice = this.largeToSmall(this.roll(3));
        fight.defendDice = this.largeToSmall(this.roll(3));


        let fightCount = 0;
        let results = {
            attackScore: 0,
            attackResults: [],
            defendScore: 0,
            defendResults: []
        };

        if (fight.attackDice.length >= fight.defendDice.length) {
            fightCount = fight.defendDice.length;
        } else {
            fightCount = fight.attackDice.length;
        }

        for (let i = 0; i < fightCount; i++) {
            if (fight.attackDice[i] > fight.defendDice[i]) {
                results.attackResults.push(1);
                results.defendResults.push(0);
                results.attackScore++;
            } else {
                results.attackResults.push(0);
                results.defendResults.push(1);
                results.defendScore++;
            }
        }


        fight.attackScore = results.attackScore;
        fight.defendScore = results.defendScore;

        //need to push a unique copy and not the pointer to the object
        this.battleHistory.push(this.activeBattle);

    }

    //Returns an array of the requested number of dice rolled defaulted to 6 sides.
    roll(numDice, numSides = 6) {

        const diceArray = [];
        let result;

        if (numDice < 1 || numSides < 2) {
            console.log("rollDice requires at least 1 die and 2 sides");
            return [];
        }

        for (let i = 0; i < numDice; i++) {
            result = Math.floor(Math.random() * numSides + 1);
            diceArray.push(result);
        }

        return diceArray;


    }

    largeToSmall(array) {
        array.sort((a, b) => {
            return b - a;
        });

        return array;
    }

    smallToLarge(array) {
        array.sort((a, b) => {
            return a - b;
        });

        return array;
    }
}



//test data
const DIE_SIDES = 6;
const jake = new Player("Jake");
const elise = new Player("Elise");
//const isaac = new Player("Isaac");
//const elijah = new Player("Elijah");
//const risk = new DiceMatch({ attacker: jake, attackerLives: 10 }, { defender: elise, defenderLives: 7 }, DIE_SIDES);
const risk = new DiceMatch({ attackerLives: 10 }, { defender: elise, defenderLives: 7 }, DIE_SIDES);

