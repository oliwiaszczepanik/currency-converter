console.log("Hello!");

let amountElement = document.querySelector(".js-amount");
let exchangeRateElement = document.querySelector(".js-currencyChoice");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(`Formularz został wysłany`);

    let amount = +amountElement.value;
    let exchangeRate = exchangeRateElement.value;
    let result;
    let EUR = 4.4730;
    let USD = 4.1180;
    let CHF = 4.6830;
    let GBP = 5.2291;
    let CNY = 0.5659;
    let AUD = 2.6594;

    switch (exchangeRate) {
        case "EUR":
            result = amount / EUR;
            break;
        case "USD":
            result = amount / USD;
            break;
        case "CHF":
            result = amount / CHF;
            break;
        case "GBP":
            result = amount / GBP;
            break;
        case "CNY":
            result = amount / CNY;
            break;
        case "AUD":
            result = amount / AUD;
            break;
    }

    resultElement.innerHTML = `${amount.toFixed(2)} PLN = ${result.toFixed(2)} ${exchangeRate}`;
});