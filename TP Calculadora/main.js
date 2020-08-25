function checkResult(res, innerHTML){
    if (res != undefined){
        return "";
    }

    return innerHTML;
}

function init(){
    var operation = new Array();
    var res;

    var zero = document.getElementById("zero");
    var one = document.getElementById("one");
    var two = document.getElementById("two");
    var three = document.getElementById("three");
    var four = document.getElementById("four");
    var five = document.getElementById("five");
    var six = document.getElementById("six");
    var seven = document.getElementById("seven");
    var eight = document.getElementById("eight");
    var nine = document.getElementById("nine");

    var result = document.getElementById("result");
    var reset = document.getElementById("reset");
    var equal = document.getElementById("equal");
    var sum = document.getElementById("sum");
    var subtraction = document.getElementById("subtraction");
    var multiplication = document.getElementById("multiplication");
    var division = document.getElementById("division");

    zero.onclick = function(){
        result.innerHTML = checkResult(res, result.innerHTML) + "0";
    }

    one.onclick = function(){
        result.innerHTML = checkResult(res, result.innerHTML) + "1";
    }

    two.onclick = function(){
        result.innerHTML = checkResult(res, result.innerHTML) + "2";
    }

    three.onclick = function(){
        result.innerHTML = checkResult(res, result.innerHTML) + "3";
    }

    four.onclick = function(){
        result.innerHTML = checkResult(res, result.innerHTML) + "4";
    }

    five.onclick = function(){
        result.innerHTML = checkResult(res, result.innerHTML) + "5";
    }

    six.onclick = function(){
        result.innerHTML = checkResult(res, result.innerHTML) + "6";
    }

    seven.onclick = function(){
        result.innerHTML = checkResult(res, result.innerHTML) + "7";
    }

    eight.onclick = function(){
        result.innerHTML = checkResult(res, result.innerHTML) + "8";
    }

    nine.onclick = function(){
        result.innerHTML = checkResult(res, result.innerHTML) + "9";
    }

    sum.onclick = function(){
        operation.push(result.innerHTML);
        operation.push("+");

        result.innerHTML = "";
    }

    subtraction.onclick = function(){
        operation.push(result.innerHTML);
        operation.push("-");

        result.innerHTML = "";
    }

    multiplication.onclick = function(){
        operation.push(result.innerHTML);
        operation.push("*");

        result.innerHTML = "";
    }

    division.onclick = function(){
        operation.push(result.innerHTML);
        operation.push("/");

        result.innerHTML = "";
    }

    reset.onclick = function(){
        operation = [];
        result.innerHTML = "";
    }

    equal.onclick = function(){
        operation.push(result.innerHTML);

        switch(operation[1]){
            case "+": 
            res = result.innerHTML = parseInt(operation[0]) + parseInt(operation[2]);
            break;

            case "-": 
            res = result.innerHTML = parseInt(operation[0]) - parseInt(operation[2]);
            break;

            case "*": 
            res = result.innerHTML = parseInt(operation[0]) * parseInt(operation[2]);
            break;

            case "/": 
            res = result.innerHTML = parseInt(operation[0]) / parseInt(operation[2]);
            break;
        }

        operation = [];
        result.innerHTML = res;
        res = undefined;
    }
}