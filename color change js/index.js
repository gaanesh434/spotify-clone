const blocks = document.querySelectorAll('.block1, .block2, .block3, .block4'); 
const body = document.querySelector('body');

blocks.forEach(function(block) { 
    block.addEventListener('mouseover', function(e) { 
        if (e.target.id === 'red') {
            body.style.backgroundColor = 'red';
        } else if (e.target.id === 'green') {
            body.style.backgroundColor = 'green';
        } else if (e.target.id === 'blue') {
            body.style.backgroundColor = 'blue';
        } else if (e.target.id === 'yellow') {
            body.style.backgroundColor = 'yellow';
        }
    });

    block.addEventListener('mouseout', function() { 
        body.style.backgroundColor = ''; 
    });
});