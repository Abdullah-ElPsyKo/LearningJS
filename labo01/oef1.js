oef1

let answer;
do {
    let randomNumber = Math.floor(Math.random() * 50) + 50;

    document.write(randomNumber + "<br>");

    answer = prompt("wil je stoppen G?");

} while (answer == 'n');
