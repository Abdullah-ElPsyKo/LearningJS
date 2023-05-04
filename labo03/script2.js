//2.Maak een array aan die een todo lijst voorstelt

//A/ Voorzie een functie om items aan de lijst toe te voegen

//B/ Voorzie een functie om het eerste element van de lijst te halen

//C/ voorzie een functie om een prioriteit aan het todo lijstje toe te voegen 
//(dit wil zeggen dat dit het eerste element van de todo lijst wordt

let todoList = ["een", "twee", "drie", "vier", "vijf"];


function addToList(element, list){
    list.push(element);
}

function remFromList(list){
    list.shift();
}
addToList("abababa", todoList);

remFromList(todoList);

for (let i = 0; i < todoList.length; i++) {
    console.log(todoList[i]);
}