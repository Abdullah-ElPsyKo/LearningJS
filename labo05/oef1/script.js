function changeColorDiv(){
    var divElement = document.querySelectorAll('div');
    divElement.forEach(function(div){
        if (div.style.backgroundColor == 'red') {
            div.style.backgroundColor = 'white';
        }
        else{
            div.style.backgroundColor = 'red'; 
        }
    })
}


//listen to event of button with id blabla
var button = document.getElementById('ahaha');
button.addEventListener('click', changeColorDiv);
