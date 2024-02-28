function changeUnits() {
    var unitSystem = document.getElementById("unit_system").value;
    var heightUnitLabel = document.getElementById("heightUnit");
    var weightUnitLabel = document.getElementById("weightUnit");
    var heightInput = document.getElementById("height");

    if (unitSystem === "Metric") {
        heightUnitLabel.innerHTML = "<b>cm</b>";
        weightUnitLabel.innerHTML = "<b>kg</b>";
        heightInput.placeholder = "Enter your height";
    } else {
        heightUnitLabel.innerHTML = "<b>in</b>";
        weightUnitLabel.innerHTML = "<b>lb</b>";
        heightInput.placeholder = "Enter your height in inches";
    }

    document.getElementById("height").value = "";
    document.getElementById("weight").value = "";
    document.getElementById("result").innerHTML = "";
}

function calculateBMI() {
    var unitSystem = document.getElementById("unit_system").value;
    var height = parseFloat(document.getElementById("height").value);
    var weight = parseFloat(document.getElementById("weight").value);

    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
        document.getElementById("result").innerHTML = "Please enter valid height and weight.";
        return;
    }

    if (unitSystem === "Metric") {
        calculateBMIFromMetric(height, weight);
    } else {
        calculateBMIFromStandard(height, weight);
    }
}

function calculateBMIFromMetric(height, weight) {
    var bmi = weight / Math.pow(height / 100, 2);
    displayResult(bmi);
}

function calculateBMIFromStandard(heightInches, weight) {
    var totalHeightInInches = heightInches;
    var bmi = (weight / Math.pow(totalHeightInInches, 2)) * 703;
    displayResult(bmi);
}

function displayResult(bmi) {
    var resultContainer = document.getElementById("result");
    var bmiCategory;

    if (bmi < 18.5) {
        bmiCategory = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        bmiCategory = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        bmiCategory = "Overweight";
    } else {
        bmiCategory = "Obesity";
    }

    resultContainer.innerHTML = "Your BMI is: " + bmi.toFixed(2) + "<br>Category: " + bmiCategory;
}
