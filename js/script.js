let buyf = false;
const btn = document.getElementById("btn");
const basketPrice = document.querySelector('.price');
let basket = 0;
let price = btn.previousSibling.previousSibling.innerHTML;
price = price.replace(/ /g,'');
price = parseInt(price);
console.log(price);

if (localStorage.getItem('basket') !== null) {
    basket = localStorage.getItem('basket');
    basketPrice.innerHTML = basket;
}

function buy() {
    if(!buyf) {
        btn.style.background = 'lime';
        btn.innerHTML = "В корзине"; 
        basket = parseInt(basket) + price;
        buyf = true;
    } else {
        btn.style.background = "Gray";
        btn.innerHTML = "Купить";
        basket = parseInt(basket) - price;
        buyf = false;
    }
    basketPrice.innerHTML = basket;
    localStorage.setItem('basket', basket);
}