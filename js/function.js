// ******************** HEADER start ********************

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

function displayBurger() {
    let mainNav = document.querySelector('#main-nav');
    let burger = document.querySelector('#burger')
    if (mainNav.classList.contains('open')) {
        mainNav.classList.remove('open');
        burger.classList.remove('open');
    } else {
        mainNav.classList.add('open');
        burger.classList.add('open');
    }
}

// ******************** HEADER end ********************

var slide = 0;

function heroSlideshow() {
    let slide0 = document.querySelector('#slide0');
    let slide1 = document.querySelector('#slide1');
    let slide2 = document.querySelector('#slide2');

    switch (slide) {
        case 0:
            slide0.style.left = '50%';
            slide1.style.left = '-50%';
            slide2.style.left = '150%';
            slide0.style.opacity = '1';
            slide1.style.opacity = '0';
            slide2.style.opacity = '0';
            slide = 1;
            break;
        case 1:
            slide0.style.left = '150%';
            slide1.style.left = '50%';
            slide2.style.left = '-50%';
            slide0.style.opacity = '0';
            slide1.style.opacity = '1';
            slide2.style.opacity = '0';
            slide = 2;
            break;
        case 2:
            slide0.style.left = '-50%';
            slide1.style.left = '150%';
            slide2.style.left = '50%';
            slide0.style.opacity = '0';
            slide1.style.opacity = '0';
            slide2.style.opacity = '1';
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

// ******************** ABOUT US start ********************

let delayTime = 5000;

function rotateImg(element, item) {
    let imgHtml = document.getElementById("img-" + element);
    let imagesLength = item.images.length;
    let random = Math.floor(Math.random() * imagesLength);
    let data = item.images[random];

    imgHtml.src = data.img;
    imgHtml.alt = data.alt;

    setTimeout(function () {
        rotateImg(element, item);
    }, delayTime);
}


function renderAbout(items) {
    let HTML = '';

    if (!Array.isArray(items)) {
        return console.error('ERROR: Prasome pateikti duomenis');
    }
    if (items.length === 0) {
        return console.error('ERROR: Negali buti tuscia');
    }

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        HTML += `<div class="about-item">
                    <img id="img-${i}" class="opaque" src="${item.images[0].img}" alt="${item.images[0].alt}">
                    <p><span>${item.title}</span>${item.text}</p>
                </div>`;

        // Photo changed
        setTimeout(function () {
            rotateImg(i, item);
        }, delayTime);
    }

    return document.querySelector('#about-cont').innerHTML = HTML;
}
// ********************ABOUT US end********************

// ********************Special offers start******************
function renderSpecial(specialList) {
    let HTML = '';
    for (let i = 0; i < specialList.length; i++) {
        const meniu = specialList[i]
        HTML += `<div class="meniu">
            <img src="${meniu.img}" alt="Logo">
            <div class="offer">${meniu.name}</div>
            <p class="price">${meniu.price} </p>
            <p class="special">${meniu.special1}</p>
            <p class="special">${meniu.special2}</p>
            <p class="special">${meniu.special3}</p>
            <input type="buttom" value=' Order Now'${meniu.input}>
            <a class="fullmeniu" href="#"> ${meniu.FullMeniu}</a>
            </div>`;
    }
    return document.querySelector('#specialOffers').innerHTML = HTML;
}

// ********************Special offers end********************