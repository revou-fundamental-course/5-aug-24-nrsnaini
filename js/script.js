// FORM VALIDATION FUNCTION
function formValidate() {
    var male = document.getElementById('male');
    var female = document.getElementById('female');
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    var age = document.getElementById('age').value;

    // Check if all required fields are filled
    if (weight === '' || height === '' || age === '' || (!male.checked && !female.checked)) {
        // If validation fails, display the alert
        validate.style.display = "block";
    } else {
        // If validation success, proceed to calculate BMI
        bmiCalc(weight, height, male.checked ? 'male' : 'female');
    }
}

// BMI CALCULATION FUNCTION
function bmiCalc(weight, height, gender) {
    // Using the formula to calculate BMI
    var bmi = Number(weight) / ((Number(height) / 100) * (Number(height) / 100));
    
    var result = '';

    // Select elements where the results will be displayed
    let bmiStatus = document.querySelector(".status");
    let bmiDetail = document.querySelector(".bmi-detail"); 
    let bmiTable = document.querySelector(".bmi-table");
    let bmiExplanation =  document.querySelector(".bmi-explanation"); 

    // Determine the BMI result
    if (bmi < 18.5) {
        result = 'Underweight';
        bmiDetail.innerHTML = "Your BMI indicates that you are <strong>underweight</strong> (less than 18.5)";
        bmiExplanation.innerHTML = "It's important to eat a nutritious diet and maintain a healthy weight. Consider consulting a healthcare provider for personalized advice.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        result = 'Normal (Ideal)';
        bmiDetail.innerHTML = "Your BMI indicates that you are within the <strong>normal weight</strong> range (18.5 to 24.9)";
        bmiExplanation.innerHTML = "Great job! Keep maintaining a balanced diet and regular physical activity to stay healthy.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        result = 'Overweight';
        bmiDetail.innerHTML = "Your BMI indicates that you are within the <strong>overweight</strong> range (25 to 29.9)";
        bmiExplanation.innerHTML = "Consider adopting a healthier lifestyle through diet and exercise. It's recommended to consult a healthcare provider for personalized advice.";
    } else {
        result = 'Obese';
        bmiDetail.innerHTML = "Your BMI indicates that you are <strong>significantly overweight</strong> (30 or more).";
        bmiExplanation.innerHTML = "It's important to work towards a healthier weight. Consider consulting a healthcare provider for personalized advice and support.";
    }

    // Display the calculated BMI
    document.querySelector("#result").innerHTML = bmi.toFixed(2);
    // Display the BMI table
    bmiTable.style.display = "table";
    // Display the BMI result
    bmiStatus.innerHTML = `You are ${result}`;
    
}

// FORM VALIDATION ALERT
var validate = document.getElementById("validate");
var span = document.getElementsByClassName("close")[0];

// Close the alert when user clicks on X 
span.onclick = function() {
    validate.style.display = "none";
}

// Close the alert when user clicks outside the box
window.onclick = function(event) {
    if (event.target == validate) {
        validate.style.display = "none";
    }
}