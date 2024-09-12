
function handleClick() {
    console.log('Button clicked!');
}

let button = document.getElementById('myButton');
button.addEventListener('click', handleClick);


button.removeEventListener('click', handleClick);

let list = document.getElementById('myList');
list.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        console.log('List item clicked:', event.target.textContent);
    }
}); 

button.addEventListener('click', handleClick); // Add listener

button.removeEventListener('click', handleClick); // Remove when no longer needed 