updateHeaderTime();
loadCont('dashboard');

function updateHeaderTime() {

    let date = new Date();
    let timeBox = document.getElementById('today');

    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDay();

    let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nor', 'Dec'];
    month = monthNames[month - 1];

    if (day <= 9) {
        day = "0" + day;
    }

    return timeBox.innerHTML = year + " " + month + " " + day;
}

function loadCont(loc) {
    changeBtn_LeftMenu(loc);
    renderContent(loc);
}

function changeBtn_LeftMenu(loc) {
    let btn = document.querySelector('#item-' + loc);
    try {
        document.querySelector('.left_list-item-active').classList.remove("left_list-item-active");
    }
    catch{ }
    btn.classList.add("left_list-item-active");
}

function renderContent(loc){
    let content = document.querySelector('#content > .cont-'+loc);
    try {
        document.querySelector('.show-container').classList.remove("show-container");
    }
    catch{ }
    content.classList.add("show-container");
}