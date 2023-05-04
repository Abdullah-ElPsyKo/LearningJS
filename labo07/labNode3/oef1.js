let Papa = require("papaparse");

let fs = require("fs");

let csvRead = fs.readFileSync('csvfile.csv', 'utf8');

let parsedData = Papa.parse(csvRead, {
    header: true
});

console.log(parsedData.data);