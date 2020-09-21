const url = "https://utn-avanzada2-tp6.herokuapp.com/api";
let response = [];
const tableEmployees = document.querySelector("#employees");
const buttons = document.querySelector("#buttons");
const employeesPerPage = 20;

function get(url){
    return new Promise(function(resolve, rejecte){
        var request = new XMLHttpRequest();
        request.open("GET", url);
        request.responseType = "json";

        request.onload = function(){
            if (request.status <= 300){
                resolve(request.response);
            } else {
                rejecte(Error("The information couldn't be obtained"));
            }
        }

        request.onerror = function(){
            rejecte("The information couldn't be obtained");
        }

        request.send();
    });
}

function post(url, employee){
    return new Promise(function(resolve, rejecte){
        var request = new XMLHttpRequest();
        request.open("POST", url);
        request.responseType = "json";
        request.setRequestHeader('Content-Type', 'application/json');

        request.onload = function(){
            if (request.status <= 300){
                resolve(request.response);
            } else {
                rejecte(Error("The employee couldn't be added"));
            }
        }

        request.onerror = function(){
            rejecte("The employee couldn't be added");
        }

        request.send(JSON.stringify(employee));
    });
}

function deleteApi(url){
    return new Promise(function(resolve, rejecte){
        var request = new XMLHttpRequest();
        request.open("DELETE", url);
        request.responseType = "json";

        request.onload = function(){
            if (request.status <= 300){
                resolve(request.response);
            } else {
                rejecte(Error("The employee couldn't be deleted"));
            }
        }

        request.onerror = function(){
            rejecte("The employee couldn't be deleted");
        }

        request.send();
    });
}

window.onload = employeesAndCompanies();

async function getEmployees(){
    try {
        return await get(`${url}/Employee`);
    } catch(error){
        console.log(Error(error));
    } 
}

async function getCompanies(){
    try {
        return await get(`${url}/Company`);
    }catch(error){
        console.log(Error(error));
    } 
}

async function postEmployee(){

    let employee = {
        employeeId: 1,
        companyId: 3,
        firstName: "harry",
        lastName: "elsucio",
        email: "harrypotter@gmail.com"
    }

    try {
        await post(`${url}/Employee`, employee);
    } catch(error){
        console.log(Error(error));
    }
}

async function deleteEmployee(employee, i){
    try {
        await deleteApi(`${url}/Employee/${employee.employeeId}`);
    } catch(error){
        console.log(Error(error));
    }

    response.splice(response.indexOf(employee), 1);
    tableEmployees.textContent = "";

    showEmployees(i);
}

async function employeesAndCompanies(){
    let employees = await getEmployees();
    let companies = await getCompanies();
    let companiesLenght = 0;
    let companyFound;
    let i;
    
    companies.forEach(element => {
        companiesLenght += 1;
    })

    employees.forEach(employee => {
        companyFound = false;
        i=0;
        while (i<companiesLenght && !companyFound){
            if (companies[i].companyId === employee.companyId){
                companyFound = true;
                response.push(new Response(employee.employeeId, employee.firstName, employee.lastName, companies[i].companyId, companies[i].name));
            }
            i++;
        }
    });

    pagination();
}

function pagination(){
    let totalEmployees = getTotal(response);
    let pagesCount = totalEmployees/employeesPerPage;
    let i = 0;
    let h4 = document.createElement('p');
    h4.id = 'currentPage';
    buttons.append(h4);

    while(i < pagesCount){
        let button = document.createElement("button");
        button.id = "button" + i;
        button.className = "btn";
        button.append(document.createTextNode(i+1));
        buttons.append(addEventToPageButton(i, button));

        i++;
    }

    showEmployees(0);
}

function addEventToPageButton(i, button){
    button.addEventListener("click", () => showEmployees(i), false);

    return button;
}

function showEmployees(i){
    let to = (i+1)*employeesPerPage;
    let from = to - employeesPerPage + 1;
    tableEmployees.innerHTML = "";

    let employees = response.slice(from-1, to);

    for(employee of employees){
        let tr = document.createElement('tr');
        for(attribute in employee){
            let td = document.createElement('td');
            td.setAttribute("style", "border-top: 1px solid black; border-right: 1px solid black; text-align-last: center;");
            td.append(document.createTextNode(employee[attribute]));
            tr.append(td);
        }

        let tdButton = document.createElement('td');
        let button = document.createElement('button');
        button.setAttribute("style", "border-top: 1px solid black; text-align-last: center;");
        button.className = 'deleteBtn';
        button.append(document.createTextNode('F'));
        
        tdButton.append(addEventToDeleteButton(employee, button, i));
        tr.append(tdButton);
        tableEmployees.append(tr);

        let currentPage = document.querySelector("#currentPage");
        currentPage.textContent = "Pagina: " + parseInt(i+1);
    }
}

function addEventToDeleteButton(employee, button, i){
    button.addEventListener('click', function(){
        deleteEmployee(employee, i);
    }, false);

    return button;
}

function getTotal(list){
    let i=0;

    list.forEach(element => {
        i += 1; 
    })

    return i;
}
