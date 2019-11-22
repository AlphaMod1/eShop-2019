function renderAll() {
    killPage(getInfo());

}

function getInfo() {
    return window.location.href.split('#')[1];
}

function getInfoArray() {
    return getInfo().split['&'];
}

function killPage(info) {
    if (info == 'undefined' || !info || info == '') {
        window.location.replace('../index.html');
    }
}