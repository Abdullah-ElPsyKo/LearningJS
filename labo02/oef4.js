//Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

function countBs(x){
    let aantalBs = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i]=="B") {
            aantalBs+=1;
        }
    }
    return aantalBs;
}


function countChar(x,y){
    let aantalChar = 0;
    for (let i = 0; i < x.length; i++) {
        if (x[i]==y) {
            aantalChar+=1;
        }
    }
    return aantalChar;
}
