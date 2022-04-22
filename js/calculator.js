document.getElementById('seven').addEventListener('click', function () {
    const numbers = document.getElementById('seven');
    const valueSeven = numbers.value;
    const valueConvert = parseFloat(valueSeven);

    const sevenValue = document.getElementById('enter-digit');
    const number = sevenValue.innerText;
    const numberAmount = parseFloat(number);
    const totalValue = numberAmount + valueConvert;
    sevenValue.innerText = totalValue;

})