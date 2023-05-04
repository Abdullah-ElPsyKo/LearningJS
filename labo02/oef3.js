function klinkers(a){
    let aantalKlinkers = 0;
    for (let i = 0; i < a.length; i++) {
        if (a.charAt(i) == "a" || a.charAt(i) == "e"  || a.charAt(i) == "i" || a.charAt(i) == "o" || a.charAt(i) == "u" ) {
            aantalKlinkers+=1;
        }
    }
    return aantalKlinkers;
}

function hoofdletter(a){
    let str = "";
    for (let i = 0; i < a.length; i++) {
        if (i == 0) {  
            str += a[0].toUpperCase();
        }
        else{
            str += a[i];
        }
    }
    return str;
}

console.log(hoofdletter("skill issue is a real thing"));