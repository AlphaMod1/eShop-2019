//on load:
genHeaderDropdownTrucks();
checkScroll();
heroSlideshow();
genFooterTruckContacts();


window.addEventListener('scroll', function() {
    checkScroll();    
});


setInterval(function(){
    heroSlideshow();
},4000);

// ******************** ABOUT US start ********************

renderAbout( aboutus );

// ******************** ABOUT US end ********************

