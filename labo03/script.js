//1. Schrijf met behulp van een javascript functie een HTML pagina waarin je de voornaam van 
//een klasgenoot moet typen en na bevestiging moet je zijn geboortejaar terugkrijgen. 
//Maak gebruik van een array om te zoeken. Tip: maak 1 array waarin je namen van klasgenoten zet, en een tweede array waarin je geboortejaren inzet. 
//(Ga van de veronderstelling uit dat de indexen van de 2 arrays overeenkomen.)

let naaminput = prompt("Voornaam van een klasgenoot.");
let naamarray = ["Hallo", "Bruh", "Idk", "Skill", "Issue"];
let geboortejaar = [1920, 2002, 2001, 2000, 1999];

let index = 0;

console.log(geboortejaar[naamarray.indexOf(naaminput)]);

