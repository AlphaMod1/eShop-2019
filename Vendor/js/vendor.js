function renderTable(data) {
    let HTML = `<tr>
                    <th>Order</th>
                    <th>Laikas</th>
                    <th>Vardas</th> 
                    <th>Telefonas</th> 
                    <th>Statusas</th> 
                </tr>`;
    for (let i = 0; i < data.length; i++) {
        HTML += `<tr><td class='order'>${data[i].order}</td>
                <td>${data[i].laikas}</td>
                <td>${data[i].vardas}</td>
                <td>${data[i].telefonas}</td>
                <td><input type="button" value="${data[i].status}"></td></tr>`;
    }
    document.querySelector('#stalas').innerHTML = HTML;
}

function showModal(){
    document.querySelector('#modal').style.display = 'block';
    document.querySelector('#lightbox').style.display = 'block';
}

function closeModal(){
    document.querySelector('#modal').style.display = 'none';
    document.querySelector('#lightbox').style.display = 'none';
}