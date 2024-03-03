const calcBtn = document.getElementById('btn');
let result = document.querySelector('.result');
let total = document.querySelector('.total');
let tip;

calcBtn.addEventListener('click', function() {
    const bill = parseFloat(document.getElementById('bill').value);

    if (!isNaN(bill)) {
        if (bill < 200) {
            tip = bill * 0.08;
        } else {
            tip = bill * 0.12;
        }
        result.textContent = `Your tip is: ${tip.toFixed(2)} LEI`;
        total.textContent =  `The total is: ${(bill + tip).toFixed(2)}`;
    } else {
        result.textContent = 'Please enter a valid bill amount.';
        total.textContent = '';
    }
});
