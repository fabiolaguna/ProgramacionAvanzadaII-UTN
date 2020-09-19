class User {
    constructor(userId, firstName, lastName, email, gender, lastConnectedAddress){
        this.userId = userId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
        this.lastConnectedAddress = lastConnectedAddress;
    }

    toString(){
        return "user id: " + this.userId + "\n" +
               "firstName: " + this.firstName + "\n" +
               "lastName: " + this.lastName + "\n" +
               "email: " + this.email + "\n" + 
               "gender: " + this.gender + "\n" + 
               "lastConnectedAddress: " + this.lastConnectedAddress + "\n";
    }
}

const url = "https://utn-avanzanda2-tp5.herokuapp.com/api/user";
var usersSection = document.getElementById("users");
var usersTable = document.querySelector("#usersTable");

function loadUsers(url){
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

window.onload = function(){
    loadUsers(url)
    .then((response) => {
        for (element of response){
            let tr = document.createElement("tr");

            for (attribute in element) {
                let td = document.createElement("td");

                if (attribute != "lastConnectedAddress"){
                    td.setAttribute("style", "border-top: 1px solid black; border-right: 1px solid black");
                } else {
                    td.setAttribute("style", "border-top: 1px solid black"); 
                }

                td.appendChild(document.createTextNode(element[attribute]));
                tr.appendChild(td);
                usersTable.appendChild(tr);
            }
        }
    })
    .catch((error) => {
        console.log(Error(error));
    })
}

