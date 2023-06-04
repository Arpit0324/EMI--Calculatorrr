window.onload = () => {
    const inputs = document.querySelectorAll("input");

    inputs.forEach(input => {
        input.addEventListener('change', calculateLoan)
    })
}

/* fetching the the values from the user */

function calculateLoan () {
    const principal = document.querySelector('#amount').value;
    const interestRate = document.querySelector('#interest').value;
    const tenure = document.querySelector('#tenure').value;


 /* Checking if any values is empty or not */   

    if (!principal || !interestRate || !tenure) return;

 /*  Calculating the monthlyInterest emi totalAmount and totalInterest*/   
    const monthlyInterest = interestRate / 100 / 12;
    const emi = principal * monthlyInterest * Math.pow(1 + monthlyInterest, tenure) / (Math.pow(1 + monthlyInterest, tenure) - 1);

    const totalAmount = emi * tenure;
    const totalInterest = totalAmount - principal;

    document.querySelector('#emi').innerText = 'EMI: ₹' + emi.toFixed(2);
    document.querySelector('#totalAmount').innerText = 'Total Amount: ₹' + totalAmount.toFixed(2);
    document.querySelector('#totalInterest').innerHTML = 'Total Interest: ₹' + totalInterest.toFixed(2);
}