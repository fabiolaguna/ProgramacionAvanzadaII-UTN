/*function insertRow(){
    const table = document.getElementsByClassName("myTable");
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    const text = document.createTextNode("new row");
    cell.appendChild(text);
    row.appendChild(cell);
    table[0].appendChild(row);
}

function deleteRow(){
    const table = document.getElementsByClassName("myTable");
    const lastRow = table[0].lastChild;
    table[0].removeChild(lastRow);
}*/

function insertRow(){
    const table = document.querySelector(".myTable");
    const row = document.createElement("tr");
    const cell = document.createElement("td");
    const text = document.createTextNode("new row");
    cell.appendChild(text);
    row.appendChild(cell);
    table.appendChild(row);
}

function deleteRow(){
    const table = document.querySelector(".myTable");
    const lastRow = table.lastChild;
    table.removeChild(lastRow);
}
