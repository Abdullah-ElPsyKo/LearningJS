let input = document.createElement("input");
document.body.appendChild(input);

let button = document.createElement("button");
document.body.appendChild(button);
button.innerText = "Zoek";
button.addEventListener("click", function () {
    inp = input.value;
    var naam = ["Jan", "Piet", "Klaas", "Joris", "Korne"];
    var geboorteJaar = [1990, 1991, 1992, 1993, 1994];
    for (let i = 0; i < naam.length; i++) {
        if (inp == naam[i]) {
            let table = document.createElement("table");
            document.body.appendChild(table);
            let row = document.createElement("tr");
            table.appendChild(row);
            let cell = document.createElement("td");
            row.appendChild(cell);
            cell.innerText = naam[i];
            let cell2 = document.createElement("td");
            row.appendChild(cell2);
            cell2.innerText = geboorteJaar[i];
            cell.style.width = "4rem";
            cell2.style.width = "4rem";
            cell.style.border = "1px solid black";
            cell2.style.border = "1px solid black";
            cell.style.textAlign = "center";
            cell2.style.textAlign = "center";
        }
    }
});
