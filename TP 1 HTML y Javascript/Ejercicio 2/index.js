const productsList = [
    "Product 1",
    "Product 2",
    "Product 3",
    "Product 4",
    "Product 5"
]

const wishList = []

window.onload = function(){
    productsList.forEach(product => {
        let item = document.createElement('li');
        item.appendChild(document.createTextNode(product));
        item.appendChild(createButton(product));
        item.appendChild(document.createElement('br'));
        document.getElementById('products').appendChild(item);
    });
}

function createButton(product){
    let button = document.createElement('button');
    button.id = product;
    button.innerHTML = 'Add to wish list';
    button.addEventListener('click', () => addToWishList(product), false);

    return button;
}

function showWishList(){
    let list = document.getElementById('wishList')
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    wishList.forEach(product => {
        let item = document.createElement('li')
        item.appendChild(document.createTextNode(product));
        item.appendChild(createRemoveButton(product));
        item.appendChild(createIncreasePriorityButton(product)); 
        item.appendChild(createDecreasePriorityButton(product));
        item.appendChild(document.createElement('br'));
        list.appendChild(item)
    })
}

function addToWishList(product){
    if (!wishList.includes(product)) {
        wishList.push(productsList.find(p => p == product))
        showWishList()
    } else
        window.alert(`${product} is in the wish list`)
}

function createRemoveButton(product){
    let button = document.createElement('button');
    button.innerHTML = 'Remove';
    button.addEventListener('click', () => removeProduct(product), false);

    return button;
}

function createIncreasePriorityButton(product){
    let button = document.createElement('button');
    button.innerHTML = '+';
    button.id = product;
    button.className = 'priority';
    button.addEventListener('click', () => increasePriority(product), false);

    return button;
}

function createDecreasePriorityButton(product){
    let button = document.createElement('button');
    button.innerHTML = '-';
    button.id = product;
    button.className = 'priority';
    button.addEventListener('click', () => decreasePriority(product), false);

    return button;
}

function removeProduct(product){
    wishList.splice(wishList.indexOf(product), 1);
    showWishList();
}

function increasePriority(product){
    let index = wishList.indexOf(product);
    if (index > 0) {
        wishList.splice(index, 1);
        wishList.splice(index - 1, 0, product);
        showWishList();
    }
}

function decreasePriority(product){
    let index = wishList.indexOf(product);
    if (index < wishList.length) {
        wishList.splice(index, 1);
        wishList.splice(index + 1, 0, product);
        showWishList();
    }
}