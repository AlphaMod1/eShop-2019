function checkScroll(){
    if(window.scrollY < 450){
        document.querySelector("header").style.background = "transparent";
    }
    else{
        document.querySelector("header").style.background = "black";
    }
}

function genHeaderDropdownTrucks(){
    let dropdown = document.getElementById('dropdown-trucks');
    let HTML = '';
    for(let i = 0; i < trucks.length; i++){
        HTML+=`<a href="#">${trucks[i].name}</a>`;
    }
    dropdown.innerHTML = HTML;
}