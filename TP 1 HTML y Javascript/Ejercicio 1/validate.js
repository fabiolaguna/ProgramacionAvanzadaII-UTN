var firstName = document.getElementById("name");
var lastName = document.getElementById("lastName");
var age = document.getElementById("age");
var password = document.getElementById("password");
var email = document.getElementById("email");

const reg = new RegExp(/[A-Za-z]/);

function firstNameValidation(firstName){
    if (firstName.value == null || firstName.value  == ''){
        alert("El nombre es mandatorio");
    }

    if (firstName.value.length > 20){
        alert("El nombre no puede superar los 20 caracteres");
    } else {
        var i=0;
        var regFalse = false;
    
        while (i<firstName.value.length && !regFalse){
            if (!reg.test(firstName.value)){
                alert("Caracteres no validos en el nombre");
                regFalse = true;
            }
            i++;
        }
    }
}

function lastNameValidation(lastName){
    if (lastName.value == null || lastName.value  == ''){
        alert("El apellido es mandatorio");
    }

    if (lastName.value.length > 20){
        alert("El apellido no puede superar los 20 caracteres");
    } else {
        var i=0;
        var regFalse = false;
    
        while (i<lastName.value.length && !regFalse){
            if (!reg.test(lastName.value.charAt(i))){
                alert("Caracteres no validos en el apellido");
                regFalse = true;
            }
            i++;
        }
    }
}

function ageValidation(age){
    var i=0;
    var regFalse = false;

    while (i<age.value.length && !regFalse){
        if (!/[0-9]/.test(age.value.charAt(i))){
            alert("Caracteres no validos en la edad");
            regFalse = true;
        }
        i++;
    }
}

function passwordValidation(password){
    if (password.value == null || password.value  == ''){
        alert("La contraseña es mandatoria");
    } else {
        if (password.value.length < 9 || password.value.length > 20){
            alert("La contraseña debe tener entre 9 y 20 caracteres");
        } else {
            var i=0;
            var numberExists = false;
            var lowerCaseExists = false;
            var upperCaseExists = false;
        
            while (i<password.value.length && !numberExists){
                if (/[0-9]/.test(password.value.charAt(i))){
                    numberExists = true;
                }
                i++;
            }
        
            i=0;
        
            while (i<password.value.length && !lowerCaseExists){
                if (/[a-z]/.test(password.value.charAt(i))){
                    lowerCaseExists = true;
                }
                i++;
            }
        
            i=0;
        
            while (i<password.value.length && !upperCaseExists){
                if (/[A-Z]/.test(password.value.charAt(i))){
                    upperCaseExists = true;
                }
                i++;
            }
        
            if (!numberExists || !lowerCaseExists || !upperCaseExists){
                showAlert(numberExists, lowerCaseExists, upperCaseExists);
            }    
        }
    }
}

function showAlert(numberExists, lowerCaseExists, upperCaseExists){
    if (!numberExists){
        alert("La contraseña debe contener numeros");
    }

    if (!lowerCaseExists){
        alert("La contraseña debe contener minusculas");
    }

    if (!upperCaseExists){
        alert("La contraseña debe contener mayusculas");
    }
}

function emailValidation(email){
    if (email.value == null || email.value  == ''){
        alert("El email es mandatorio");
    }
}

function validate(){
    firstNameValidation(firstName);
    lastNameValidation(lastName);
    ageValidation(age);
    passwordValidation(password);
    emailValidation(email);
}