window.onload = () => execute();

/*function execute(){
    const text = document.getElementById("myId");
    text.appendChild(document.createTextNode("Hello world"));
}*/

function execute(){
    const text = document.querySelector("#myId");
    text.appendChild(document.createTextNode("Hello world"));
}