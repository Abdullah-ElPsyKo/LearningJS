function randomint(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function dobbelsteen(){
    let array = [];
    let array1 = [];
    for (let i = 0; i < 1000; i++) {
        let total = randomint(1,6) + randomint(1,6);
        array.push(total);
    }
    for (let j = 1; j < 13; j++) {
        let aantalKeren = 0;
        for (let index = 0; index < array.length; index++) {
            if (j == array[index]) {
                aantalKeren += 1;
            }
            
        }
        array1.push(aantalKeren)
    }
    for (let k = 0; k < array1.length; k++) {
        console.log(array1[k]);
    }
}

dobbelsteen();