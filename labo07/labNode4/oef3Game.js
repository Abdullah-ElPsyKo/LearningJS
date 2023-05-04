var {Scoreboard, Game, User} = require('./oef3.js');

const user = new User();
console.log(user.returnFullName());

var game = new Game();
var scoreboard = new Scoreboard(game.sommen(), game.totaal(), user.returnFullName());
scoreboard.returnScore();