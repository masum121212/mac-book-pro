/* catchcost */
function catchCost(id) {
    const cost = document.getElementById(id + '-amount');
    const totalCost = parseInt(cost.innerText);
    return totalCost;
}

/* calculateTotal */
function calculateTotal() {
    const memoryAmount = catchCost('memory');
    const storageAmount = catchCost('storage');
    const deliveryAmount = catchCost('delivery');
    document.getElementById('total-price').innerText = (1299 + memoryAmount + storageAmount + deliveryAmount)
    document.getElementById('total').innerText = (1299 + memoryAmount + storageAmount + deliveryAmount)
}

/* memory cost */
function memoryUpdate(amount) {
    document.getElementById('memory-amount').innerText = amount;
    calculateTotal();
}

/*  storage cost */
function storageUpdate(amount) {
    document.getElementById('storage-amount').innerText = amount;
    calculateTotal();
}

/*  delivery charge */
function deliveryUpdate(amount) {
    document.getElementById('delivery-amount').innerText = amount;
    calculateTotal();
}
/* applied promo code */
function promoCode() {
    const totalPrice = document.getElementById('total').innerText;

    const promoCode = document.getElementById('promo-code');
    const pomoCodeValue = promoCode.value;
    if (pomoCodeValue.toLowerCase() == 'stevekaku') {
        const getPromo = totalPrice * 0.20;
        const total = totalPrice - getPromo;
        document.getElementById('total').innerText = total;
        promoCode.style.display = 'none';
        document.querySelector('.btn-outline-info').innerText = 'Thank You Steve Kaku';
    }
    else if (promoCode.value == '') {
        alert('ERROR!!! Plese provide promo code');
    }
    else {
        alert('Promo code no match');
    }
    promoCode.value = '';
}