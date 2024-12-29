const body = document.querySelector('body');

body.addEventListener('submit',function(e){
    const celsius = parseInt(document.querySelector('#celsius').value);
    const fahrenheit = parseInt(document.querySelector('#fahrenheit').value);
    const result = document.querySelector('#result');
    
    if(celsius===''||celsius<0||isNaN(celsius)){
        celsius.innerHtml = `provide a valid temperature ${celsius}`
    }
    if(fahrenheit===''||fahrenheit<0||isNaN(fahrenheit)){
        fahrenheit.innerHtml = `provide a valid temperature ${fahrenheit}`
    }

    result = fahrenheit*(5/9); //ignore the formula i dont know it

    result.innerHTML = `the value of the temp ${result}`
})
