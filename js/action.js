//on load:
genHeaderDropdownTrucks();
checkScroll();
heroSlideshow();


window.addEventListener('scroll', function() {
    checkScroll();    
});


setInterval(function(){
    heroSlideshow();
},4000);