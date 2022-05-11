let cart = [];
let price = [];

function addToCart(y,x){
    price.push(x.innerHTML);
    cart.push(y.innerHTML);
    updateCart();
}

function totPrice(){
    var totPrice = 0;
    for(let i = 0; i < price.length ; i++){
        totPrice += +Number(price[i]);
    }
    if(totPrice > 0){
        return "€ " + totPrice;
    } else {
        return "€ " +  0;
    }
}

function updateCart(){
    document.getElementById("cart_items").innerHTML = "";
    if(cart.length > 0){
        for(let i = 0; i < cart.length ; i++)
        {
            document.getElementById("cart_items").innerHTML += "<p>" + cart[i] + " - € " + price[i] +"<button onclick='deleteItem(" + i +")'>x</button>"+ "</p>";
        }
    }
   
    document.getElementById("H_cart_amount").innerHTML = "You have: " + cart.length + " items";
    document.getElementById("H_cart_totprice").innerHTML = "Total price is: " + totPrice();

}

function deleteItem(a){
    cart.splice(a,1);
    price.splice(a,1);
    updateCart();
}

function saveCart(){
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("price", JSON.stringify(price));
}

window.onbeforeunload = function(){
    saveCart();
}
function loadCart(){
    cart = JSON.parse(localStorage.getItem("cart"));
    price = JSON.parse(localStorage.getItem("price"));
    updateCart();
}
loadCart();

function completeOrder(){
    if(cart.length > 0){
        for(let i = 0; i < cart.length ; i++){
            cart.splice(i);
            price.splice(i);
        }
        alert("Thank you for using our services" + "\n" + "Your order will be deliverd soon");
    }     
}