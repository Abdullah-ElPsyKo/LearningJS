function oefVier(){
    let tds = document.querySelectorAll("td");
    for (let i = 0; i < tds.length; i++) {
        if (tds[i].innerText > 10){
            tds[i].style.backgroundColor = "red";
        }
    }
}
var btn = document.querySelector("button");
btn.addEventListener("click", oefVier);