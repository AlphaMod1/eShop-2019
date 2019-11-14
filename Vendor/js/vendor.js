//on load:
renderTable();

function renderTable() {
    let HTML = `<tr>
                    <th>Order</th>
                    <th>Laikas</th>
                    <th>Vardas</th> 
                    <th>Telefonas</th> 
                    <th>Statusas</th> 
                </tr>`;
    for (let i = 0; i < data.length; i++) {
        HTML += `<tr><td class='order' onclick='showModal(${data[i].orderID})'>${data[i].orderID}</td>
                <td>${data[i].laikas}</td>
                <td>${data[i].vardas}</td> 
                <td>${data[i].telefonas}</td>
                <td><input onclick='incrementOrder(${data[i].orderID});' class='btn-main status${data[i].status}' type='button' id='btnStatus-${data[i].orderID}' value='${changeBtnName(data[i].status)}'></td></tr>`;
    }
    document.querySelector('#stalas').innerHTML = HTML;
}

function showModal(id) {
    renderModal(id);
    document.querySelector('#modal').style.display = 'block';
    document.querySelector('#lightbox').style.display = 'block';
}

function closeModal() {
    document.querySelector('#modal').style.display = 'none';
    document.querySelector('#lightbox').style.display = 'none';
}

function renderModal(id) {

    const contKiekis = document.querySelector('#kiekis');
    const contItem = document.querySelector('#item');
    const contMsg = document.querySelector('#msg');

    let kiekisHTML = '<p>Amount:</p>'
    let itemHTML = '<span onclick="closeModal();">X</span><p>Item:</p>'
    let msgHTML = '';

    for (let i = 0; i < data.length; i++) {
        if (data[i].orderID == id) {
            for (let j = 0; j < data[i].item.length; j++) {
                let temp = data[i].item[j].split('|');
                kiekisHTML += `<p>${temp[0]}</p>`;
                itemHTML += `<p>${temp[1]}</p>`;
            }
            msgHTML += data[i].msg;
            contKiekis.innerHTML = kiekisHTML;
            contItem.innerHTML = itemHTML;
            contMsg.innerHTML = msgHTML;
        }
    }
}

function incrementOrder(id) {
    let btn = document.getElementById('btnStatus-'+id);
    for (let i = 0; i < data.length; i++) {
        if (data[i].orderID == id) {
            btn.classList.remove("status"+data[i].status);
            data[i].status++;
            btn.classList.add("status"+data[i].status);
            btn.value = changeBtnName(data[i].status);
        }
    }
}

function changeBtnName(status) {

    switch (status) {
        case 0:
            return "Take order";
            break;
        case 1:
            return "Finish order";
            break;
        case 2:
            return "Ready";
            break;
        default:
            return "NULL";
            break;
    }

}