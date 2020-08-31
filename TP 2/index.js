window.onload = () => execute();

/*function execute(){
    const text = document.getElementsByClassName("test");
    text[0].appendChild(document.createTextNode("Hello world"));
}*/

function execute(){
    const text = document.querySelector(".test");
    text.appendChild(document.createTextNode("Hello world"));
}
