// ******************** Body start ********************

checkScroll();
window.addEventListener('scroll', function () {
    checkScroll();
});

// ******************** Body end ********************

// ******************** Header start ********************

genHeaderDropdownTrucks();

// ******************** Header end ********************

// ******************** Hero start ********************

heroSlideshow();
setInterval(function () {
    heroSlideshow();
}, 4000);

// ******************** Hero end ********************

// ******************** Menu start ********************

renderSpecial(specialOffers);

// ******************** Menu end ********************

// ******************** Map start ********************

pinCoordinates();

// ******************** Map end ********************

// ******************** ABOUT US start ********************

renderAbout(aboutus);

// ******************** ABOUT US end ********************

// ******************** Carrer start ********************

// ******************** Carrer end ********************

// ******************** Contact Us start ********************

genFooterTruckContacts();

// ******************** Contact Us end ********************

// ******************** Footer start ********************

// ******************** Footer end ********************