const url = "https://utn-avanzanda2-tp5.herokuapp.com/api/user";
var usersTable = document.querySelector("#usersTable");
var buttons = document.querySelector("#buttons");
var usersPerPage = 17;

function get(url){
    return new Promise(function(resolve, rejecte){
        var request = new XMLHttpRequest();
        request.open("GET", url);
        request.responseType = "json";

        request.onload = function(){
            if (request.status == 200){
                resolve(request.response);
            } else {
                rejecte(Error("The users couldn't be obtained"));
            }
        }

        request.onerror = function(){
            rejecte("The users couldn't be obtained");
        }

        request.send();
    });
}

window.onload = async function(){
    await totalPages(`${url}/Total`)
    .then((response) => {
        var i = 0;
        while(i < (response/usersPerPage)){
            var button = document.createElement("button");
            button.id = "button" + i;
            button.className = "btn";
            button.append(document.createTextNode(i+1));
            buttons.append(addEventToButton(i, button));

            i++;
        }
    })
    .catch((error) => {
        console.log(Error(error));
    })

    showUsers(0); //Para que se muestren los 10 primeros desde el principio
}

function addEventToButton(i, button){
    button.addEventListener("click", () => showUsers(i), false);

    return button;
}

async function totalPages(url){
   return await get(url);    
}

async function showUsers(i){
    var to = usersPerPage * (i+1);
    var from = to - (usersPerPage-1);
    usersTable.innerHTML = "";

    await get(`${url}/${from}/${to}`)
    .then(response => {
        for(user of response){
            var tr = document.createElement("tr");
            for(attribute in user){
                var td = document.createElement("td");

                if (attribute != "lastConnectedAddress"){
                    td.setAttribute("style", "border-top: 1px solid black; border-right: 1px solid black; text-align-last: center;");
                } else {
                    td.setAttribute("style", "border-top: 1px solid black; text-align-last: center;"); 
                }

                td.append(document.createTextNode(user[attribute]));
                tr.append(td);
            }
            usersTable.append(tr);
        }
    })
    .catch(reject => {
            console.log(Error(reject))
    })
}
