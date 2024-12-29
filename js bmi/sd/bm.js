const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height = parseFloat(document.querySelector('#height').value)/100;

    const weight = parseFloat(document.querySelector('#weight').value);

    const results = document.querySelector('#result');

    if(height===""||height<0||isNaN(height)){
        results.innerHTML = "please provide a valid height";
    }
    if(weight===""||weight<0||isNaN(weight)){
        results.innerHTML = "please provide a valid weight";
    }

    const bmi = weight/(height*height);

    let category = '';
    if(bmi<18.5){
        category = 'underweight';
    }
    else if(bmi>=18.5 && bmi<24.9){
        category='normal weight';
    }
    else  if(bmi >= 25 && bmi < 29.9){
        category = 'overweight';
    }
    else{
        category = 'obese';
    }

    results.innerHTML = `your bmi index is as follows ${bmi.toFixed(2)} and the category is as follows ${category}`
    
});