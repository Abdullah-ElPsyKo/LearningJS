function veranderText(){
    var div = document.querySelector("div");
    // change text of div
    div.innerHTML = "Veranderd";
}

const button = document.getElementById("btn");
button.addEventListener("click", veranderText);
