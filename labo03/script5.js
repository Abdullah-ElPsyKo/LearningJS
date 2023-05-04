// let text = prompt("Tekst hier: ");
let text = "hallo hoe gaat het"

let words = text.split(" "); // array is nu [hallo, hoe, gaat, het]

let array = [];
for (let i = 0; i < words.length; i++) {
    const str2 = words[i].charAt(0).toUpperCase() + words[i].slice(1); // first letter with charAt function + add sliced left over = first letter capital letter
    array.push(str2);
}
let newString = array.join(' ');
console.log(newString);