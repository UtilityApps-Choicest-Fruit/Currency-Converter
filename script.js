const rates = {
    USD: { USD: 1, EUR: 0.92, GBP: 0.78, JPY: 157.5 },
    EUR: { USD: 1.09, EUR: 1, GBP: 0.85, JPY: 171.2 },
    GBP: { USD: 1.28, EUR: 1.18, GBP: 1, JPY: 201.3 },
    JPY: { USD: 0.0064, EUR: 0.0058, GBP: 0.0050, JPY: 1 }
};

function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const resultDiv = document.getElementById('result');

    if (isNaN(amount) || amount <= 0) {
        resultDiv.textContent = "Please enter a valid amount.";
        return;
    }

    const rate = rates[from][to];
    const converted = (amount * rate).toFixed(2);

    resultDiv.textContent = `${amount} ${from} = ${converted} ${to}`;
}

