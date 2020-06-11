

const netPrice = document.getElementById('net-price');
const vatRate = document.getElementById('vat-rate');
const incAmount = document.getElementById('inc-amount');
const calcBtn = document.getElementById('calc-btn');
const resetBtn = document.getElementById('reset-btn');

function VATInclusiveAmount(price, rate){
    let totalAmount = price + (price * (rate / 100));
    return totalAmount.toFixed(2);
}

calcBtn.addEventListener('click', function(){
    if(netPrice.value === "" || isNaN(netPrice.value)){
        // showing red border for invalid input
        netPrice.style.border = "1px solid red";

        // removing red border after 1.5s
        setTimeout(function(){
            netPrice.style.border = "1px solid transparent";
        }, 1500);

        // clearing wrong input
        netPrice.value = "";
    }

    if(vatRate.value === "" || isNaN(vatRate.value)){
        // showing red border for invalid input
        vatRate.style.border = "1px solid red";

        // removing red border after 1.5s
        setTimeout(function(){
            vatRate.style.border = "1px solid transparent";
        }, 1500);

        // clearing wrong input
        vatRate.value = "";
    }

    let finalAmount = VATInclusiveAmount(Number(netPrice.value), Number(vatRate.value));
    incAmount.value = finalAmount;
})

resetBtn.addEventListener('click', function(){
    netPrice.value = "";
    vatRate.value = "";
    incAmount.value = "";
})