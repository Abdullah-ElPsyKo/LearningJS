//Schrijf een script om het kleinste en tweede kleinste element van een array terug te geven. 
//(test zeker dat de array meer dan 2 elementen bevat).

let lijst = [2, 4, 5, 6, 3, 2];

function tweeKleinste(list){
    let eersteKleinste = Infinity; //temporary highest number there is
    let tweedeKleinste = Infinity;

    for (let i = 0; i < list.length; i++) {
        if (eersteKleinste > list[i]) { //first find the first smallest number
            eersteKleinste = list [i];
        }
        else if (tweedeKleinste > list[i] && list[i] !== eersteKleinste) { //then find the second smallest number
            tweedeKleinste = list [i];
        }
    }
    console.log(eersteKleinste, tweedeKleinste);
}

tweeKleinste(lijst);