let product

for (let i = 0; i < 11; i++) {

    product = 10 * i;

    if (i%2 == 0) {
        document.write("<p style=color:red>");
        document.write(product);
        document.write("</p>");
    }
    else{
        document.write("<p style=color:green>");
        document.write(product);
        document.write("</p>");
    }    
}