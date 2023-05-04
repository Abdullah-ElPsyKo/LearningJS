
let stoppen;

let weapon = prompt("Kies je wapen: pijl&boog, bijl of een kip (p/b/k): ");
let randChances = Math.floor((Math.random() * 10));

switch (weapon) {
    case "p":
        if (randChances <= 5) {
                document.write("gewonnen");
        }
        else{
                document.write("verloren");
        }
        break;
    case "b":
        if (randChances <= 7) {
            document.write("gewonnen");
        }
        else{
            document.write("verloren");
        }
        break;
    case "k":
        if (randChances <= 2) {
            document.write("gewonnen");
        }
        else{
            document.write("verloren");
        }
        break;
    default:
        document.write("invalid input bozo");
        break;
}

