function oefDrie(){
    var divs = document.querySelectorAll("div");
    if (divs[0].style.backgroundColor == "red") {
        divs[0].style.backgroundColor = "initial";
        divs[1].style.backgroundColor = "red";
    }
    else if (divs[1].style.backgroundColor == "red") {
        divs[1].style.backgroundColor = "initial";
        divs[2].style.backgroundColor = "red";
    }
    else{
        divs[2].style.backgroundColor = "initial";
        divs[0].style.backgroundColor = "red";
    }
}

var button = document.getElementById("btn");
button.addEventListener("click", oefDrie);