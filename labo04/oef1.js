class Summer{
    constructor (){
        this.getal = 0;
    }
    add(newNumb){
        this.getal += newNumb;
    }
    getCurrentSum(){
        return this.getal;
    }
}


const s1 = new Summer();
const s2 = new Summer();
s1.add(10);
s1.add(20);
s2.add(30);
s2.add(5);
// prints 30
console.log(s1.getCurrentSum());
// prints 35
console.log(s2.getCurrentSum());