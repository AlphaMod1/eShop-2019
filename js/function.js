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
        <img src="${specialOffers[i].img}" alt="Logo">
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
    let random = generateRandom(imagesLength);
    let data = item.images[random];

    imgHtml.src = data.img;
    imgHtml.alt = data.alt;

    setTimeout(function () {
        rotateImg(element, item);
    }, delayTime);
}

var lastNumber = Infinity;

function generateRandom(imagesLength) {
    let random = Math.floor(Math.random() * imagesLength);
    if(random === lastNumber) {
        generateRandom(imagesLength);
    }
    lastNumber = random;
    return random;
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

function pinCoordinates() {
    for(let i = 0; i < cor.length; i++){
        document.querySelector('#pingas'+(i+1)).style.left = cor[i].x;
        document.querySelector('#pingas'+(i+1)).style.top = cor[i].y;
    }
}


// ********************Career start********************

var car = 0;

function careerSlideshow() {
    let car0 = document.querySelector('#car0');
    let car1 = document.querySelector('#car1');
    let car2 = document.querySelector('#car2');
    let car3 = document.querySelector('#car3');
    let car4 = document.querySelector('#car4');
    let car5 = document.querySelector('#car5');

    car0.style.opacity = '0';
    car1.style.opacity = '0';
    car2.style.opacity = '0';
    car3.style.opacity = '0';
    car4.style.opacity = '0';
    car5.style.opacity = '0';

    switch (car) {
        case 0:
            car0.style.left = '50%';
            car1.style.left = '-50%';
            car2.style.left = '150%';
            car3.style.left = '150%';
            car4.style.left = '150%';
            car5.style.left = '150%';
            car0.style.opacity = '1';
           
            car = 1;
            break;
        case 1:
            car0.style.left = '150%';
            car1.style.left = '50%';
            car2.style.left = '-50%';
            car3.style.left = '50%';
            car4.style.left = '150%';
            car5.style.left = '150%';
            car1.style.opacity = '1';
            car = 2;
            break;
        case 2:
            car0.style.left = '150%';
            car1.style.left = '150%';
            car2.style.left = '50%';
            car3.style.left = '-50%';
            car4.style.left = '150%';
            car5.style.left = '150%';
            car2.style.opacity = '1';
            car = 3;
            break;
        case 3:
            car0.style.left = '150%';
            car1.style.left = '150%';
            car2.style.left = '150%';
            car3.style.left = '50%';
            car4.style.left = '-50%';
            car5.style.left = '150%';
            car3.style.opacity = '1';
            car = 4;
            break;

        case 4:
            car0.style.left = '150%';
            car1.style.left = '150%';
            car2.style.left = '150%';
            car3.style.left = '150%';
            car4.style.left = '50%';
            car5.style.left = '-50%';
            car4.style.opacity = '1';
            car = 5;
            break;

        case 5:
            car0.style.left = '-50%';
            car1.style.left = '150%';
            car2.style.left = '150%';
            car3.style.left = '150%';
            car4.style.left = '150%';
            car5.style.left = '50%';
            car5.style.opacity = '1';
            car = 0;
            break;
    }
}
// ********************Career end********************


function popFunction() {
    var pin1 = document.getElementById("popupas");
    pin1.classList.toggle("show");
  }


  function popFunction1() {
    var pin2 = document.getElementById("popupas1");
    pin2.classList.toggle("show");
  }

  function popFunction2() {
    var pin3 = document.getElementById("popupas2");
    pin3.classList.toggle("show");
  }

  /////Hidden part////

  function hiddenFunction(nav) {

     var dropdown = document.querySelector("#hid"+nav);
    try {
        document.querySelector('.menu-show').classList.remove('menu-show');
    } 
    catch  { }
    dropdown.classList.add('menu-show');
  } 

  function renderMenu(truck, cat){
      var HTML= '';
      if( truck === 'truck1' && cat ==='HotDishes'){
        for(var i=0; i<hiddenMenu.FoodTruck1.HotDishes.length; i++){
            HTML += `<div class='hiddenClass'>
            <div class='menuImg' ><img class='imgsize' src="${hiddenMenu.FoodTruck1.HotDishes[i].img}"></div>
            <div class='menuName' >${hiddenMenu.FoodTruck1.HotDishes[i].pav}</div>
            <div class='menuPrices'>${hiddenMenu.FoodTruck1.HotDishes[i].price}</div>
            </div>`;

        }
      } else if ( truck === 'truck1' && cat ==='Tacos'){
        for(var i=0; i<hiddenMenu.FoodTruck1.Tacos.length; i++){
            HTML += `<div class='hiddenClass'>
            <div class='menuImg' ><img class='imgsize' src="${hiddenMenu.FoodTruck1.Tacos[i].img}"></div>
            <div class='menuName' >${hiddenMenu.FoodTruck1.Tacos[i].pav}</div>
            <div class='menuPrices'>${hiddenMenu.FoodTruck1.Tacos[i].price}</div>
            </div>`;
        }
      } else if ( truck === 'truck1' && cat ==='Drinks'){
        for(var i=0; i<hiddenMenu.FoodTruck1.Drinks.length; i++){
            HTML += `<div class='hiddenClass'>
            <div class='menuImg' ><img class='imgsize' src="${hiddenMenu.FoodTruck1.Drinks[i].img}"></div>
            <div class='menuName' >${hiddenMenu.FoodTruck1.Drinks[i].pav}</div>
            <div class='menuPrices'>${hiddenMenu.FoodTruck1.Drinks[i].price}</div>
            </div>`;
        }
      } else if ( truck === 'truck2' && cat ==='Burgers'){
        for(var i=0; i<hiddenMenu.FoodTruck2.Burgers.length; i++){
            HTML += `<div class='hiddenClass'>
            <div class='menuImg' ><img class='imgsize' src="${hiddenMenu.FoodTruck2.Burgers[i].img}"></div>
            <div class='menuName' >${hiddenMenu.FoodTruck2.Burgers[i].pav}</div>   
            <div class='menuPrices'>${hiddenMenu.FoodTruck2.Burgers[i].price}</div>
            </div>`;
        }
    } else if ( truck === 'truck2' && cat ==='Snacks'){
        for(var i=0; i<hiddenMenu.FoodTruck2.Snacks.length; i++){
            HTML += `<div class='hiddenClass'>
            <div class='menuImg'><img class='imgsize' src='${hiddenMenu.FoodTruck2.Snacks[i].img}'></div>
            <div class='menuName' >${hiddenMenu.FoodTruck2.Snacks[i].pav}</div>
            <div class='menuPrices'>${hiddenMenu.FoodTruck2.Snacks[i].price}</div>
            </div>`;
        }
    } else if ( truck === 'truck2' && cat ==='Drinks'){
        for(var i=0; i<hiddenMenu.FoodTruck2.Drinks.length; i++){
            HTML += `<div class='hiddenClass'>
            <div class='menuImg'><img class='imgsize' src="${hiddenMenu.FoodTruck2.Drinks[i].img}"></div>
            <div class='menuName' >${hiddenMenu.FoodTruck2.Drinks[i].pav}</div>
            <div class='menuPrices'>${hiddenMenu.FoodTruck2.Drinks[i].price}</div>
            </div>`;
        }
    } else if ( truck === 'truck3' && cat ==='Sushi'){
        for(var i=0; i<hiddenMenu.FoodTruck3.Sushi.length; i++){
            HTML += `<div class='hiddenClass'>
            <div class='menuImg' ><img class='imgsize' src='${hiddenMenu.FoodTruck3.Sushi[i].img}'></div>
            <div class='menuName' >${hiddenMenu.FoodTruck3.Sushi[i].pav}</div>
            <div class='menuPrices'>${hiddenMenu.FoodTruck3.Sushi[i].price}</div>
            </div>`;
        }
    } else if ( truck === 'truck3' && cat ==='Soups'){
        for(var i=0; i<hiddenMenu.FoodTruck3.Soups.length; i++){
            HTML += `<div class='hiddenClass'>
            <div class='menuImg' ><img class='imgsize' src='${hiddenMenu.FoodTruck3.Soups[i].img}'></div>
            <div class='menuName' >${hiddenMenu.FoodTruck3.Soups[i].pav}</div>
            <div class='menuPrices'>${hiddenMenu.FoodTruck3.Soups[i].price}</div>
            </div>`;
        }
    } else if ( truck === 'truck3' && cat ==='Drinks'){
        for(var i=0; i<hiddenMenu.FoodTruck3.Drinks.length; i++){
            HTML += `<div class='hiddenClass'>
            <div class='menuImg' ><img class='imgsize' src='${hiddenMenu.FoodTruck3.Drinks[i].img}'></div>
            <div class='menuName' >${hiddenMenu.FoodTruck3.Drinks[i].pav}</div>
            <div class='menuPrices'>${hiddenMenu.FoodTruck3.Drinks[i].price}</div>
            </div>`;
        }
      }

      document.querySelector('#left-menu').innerHTML = HTML;  
}



function genMenuTruckContacts(i) {
    let contacts = document.getElementById('truckMenu1');
    let HTML = '';

        HTML += `<div class="truck-info">
        <img src="${specialOffers[i].img}" alt="Logo">
        <h5>${trucks[i].name}</h5> 
        <p>${trucks[i].tel}</p> 
        <p>${trucks[i].email}</p></div>`;
    
    contacts.innerHTML = HTML;
}