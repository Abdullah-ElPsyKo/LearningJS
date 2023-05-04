let input = prompt("Schrijf iets: ");

for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < (input.length-i); j++) {
        document.write(input[j])
        
    }
    document.write("<br>")
}