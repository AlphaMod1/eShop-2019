function checkScroll() {
    if (window.scrollY < 150) {
        document.querySelector("header").style.background = "transparent";
    }
    else {
        document.querySelector("header").style.background = "black";
    }
}

function genHeaderDropdownTrucks() {
    let dropdown = document.getElementById('dropdown-trucks');
    let HTML = '';
    for (let i = 0; i < trucks.length; i++) {
        HTML += `<a href="#">${trucks[i].name}</a>`;
    }
    dropdown.innerHTML = HTML;
}

var slide = 0;

function heroSlideshow() {
    let slide0 = document.querySelector('#slide0');
    let slide1 = document.querySelector('#slide1');
    let slide2 = document.querySelector('#slide2');

    switch (slide) {
        case 0:
            slide0.style.bottom = '200px';
            slide1.style.bottom = '-1000px';
            slide2.style.bottom = '-1000px';
            slide = 1;
            break;
        case 1:
            slide0.style.bottom = '-1000px';
            slide1.style.bottom = '200px';
            slide2.style.bottom = '-1000px';
            slide = 2;
            break;
        case 2:
            slide0.style.bottom = '-1000px';
            slide1.style.bottom = '-1000px';
            slide2.style.bottom = '200px';
            slide = 0;
            break;
    }
}

function genFooterTruckContacts() {
    let contacts = document.getElementById('truckContacts');
    let HTML = '';
    for (let i = 0; i < trucks.length; i++) {
        HTML += `<div class="truck-info">
        <h5>${trucks[i].name}</h5> 
        <p>${trucks[i].tel}</p> 
        <p>${trucks[i].email}</p></div>`;
    }
    contacts.innerHTML = HTML;   
}