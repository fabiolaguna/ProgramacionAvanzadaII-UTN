/*function highlight(){
    const words = document.getElementsByClassName("myClass");
    
    for (var i=0 ; i<words.length ; i++){
        const highlight = document.createElement("mark");
        const text = words[i].textContent;
        highlight.appendChild(document.createTextNode(text));
        words[i].innerHTML = "";
        words[i].appendChild(highlight);
    }
}*/

function highlight(){
    const words = document.querySelectorAll(".myClass");
    
    for (var i=0 ; i<words.length ; i++){
        const highlight = document.createElement("mark");
        const text = words[i].textContent;
        highlight.appendChild(document.createTextNode(text));
        words[i].innerHTML = "";
        words[i].appendChild(highlight);
    }
}
