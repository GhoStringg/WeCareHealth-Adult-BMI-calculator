function convert() {
    var feetValue = parseFloat(document.getElementById("feet").value);
    var meterValue = parseFloat(document.getElementById("meter").value);

    if (isNaN(feetValue) && isNaN(meterValue)) {
        alert("Please enter valid numerical values for feet or meter.");
        return;
    }

    var resultContainer = document.querySelector('.result-container');
    resultContainer.innerHTML = '';

    if (!isNaN(feetValue)) {
        var cmFromFeet = feetValue * 30.48;
        displayResult("feet", feetValue, cmFromFeet, resultContainer);
    }

    if (!isNaN(meterValue)) {
        var cmFromMeter = meterValue * 100;
        displayResult("meter", meterValue, cmFromMeter, resultContainer);
    }
}

function displayResult(unit, inputValue, convertedValue, container) {
    var result = document.createElement("p");
    result.textContent = `${inputValue} ${unit} is equal to ${convertedValue} cm`;
    container.appendChild(result);
}

function clearFields() {
    document.getElementById("feet").value = "";
    document.getElementById("meter").value = "";
    document.querySelector('.result-container').innerHTML = '';
}
