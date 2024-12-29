const form = document.querySelector('#bmiForm');

form.addEventListener('submit', function(e) {
    e.preventDefault(); 

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const bmiResult = document.querySelector('#bmiResult'); 


    if (height === '' || height <= 0 || isNaN(height)) {
        alert("Invalid height details");
        bmiResult.innerHTML = ''; 
    } else if (weight === '' || weight <= 0 || isNaN(weight)) {
        alert("Invalid weight details");
        bmiResult.innerHTML = ''; 
    } else {
        
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        bmiResult.innerHTML = `Your BMI is: ${bmi}`;  
    }
});