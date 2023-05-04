function oefZes(){
    let array = [];
    let anotherArray = [];
    for (let i = 0; i < 1000; i++) {
        //generate random number between 1 and 12
        let random = Math.floor(Math.random() * 12) + 1;
        //add random number to array
        array.push(random);
    }
    for (let i = 2; i < 13; i++) {
        let count = 0;
        for (let j = 0; j < array.length; j++) {
            if (array[j] == i) {
                count ++;
            }
        }
        anotherArray.push(count);
    }
    //create text element with array
    let text = document.createElement("p");
    document.body.appendChild(text);
    text.innerHTML = "Array: " + anotherArray;
}

var btn = document.querySelector("button");
btn.addEventListener("click", oefZes);