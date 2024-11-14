function additem(){
   document.querySelector(".carttitle").innerHTML="Order above ruppees 799 to get free delivery";
}
function inc(button){
    button.closest(".quantity").querySelector("input").value=parseInt(button.closest(".quantity").querySelector("input").value)+1
    // button.closest(".quantity").addEventListener("click",()=>{
        updateprice();
        updateTotal();
    // })
}
function dec(button) {
    const quantityInput = button.closest(".quantity").querySelector("input");
    const quantity = parseInt(quantityInput.value);
    if (quantity > 1) {
        quantityInput.value = quantity - 1;
        updateprice();
        updateTotal();
    }
}
function dlt(button){
    button.closest(".done").remove();
    updateTotal();
}
function updateTotal() {
    let total=0;
    document.querySelectorAll('.done').forEach(item => {
        const priceElement1 = item.querySelector('.price span');
        const quantity1 = parseInt(item.querySelector('.quantity input').value);
        const price = parseInt(priceElement1.textContent);
        if (quantity1 > 0) { // Consider only if quantity is greater than 0
            total += price;
        }
       
    });
    document.querySelector(".total span").innerText=total
}
updateTotal();
function updateprice() {
    document.querySelectorAll('.done').forEach(item => {
        const quantityInput = item.querySelector('.quantity input');
        const priceElement = item.querySelector('.price span');
        const quantity = parseInt(quantityInput.value);
        const initialPrice = parseInt(priceElement.dataset.initialPrice); // Retrieve initial price from 'data-initial-price' attribute
        const updatedPrice = initialPrice * quantity; // Calculate updated price
        priceElement.innerText = updatedPrice; // Update price for each item
    });
}
