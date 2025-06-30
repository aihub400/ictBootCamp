const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault(); // Stop form from submitting the traditional way
    const inputValue = document.getElementById('myInput').value;
    console.log('Submitted value:', inputValue);
});

const input1 = document.getElementById('myInput1');

input1.addEventListener('keydown', function (event) {
    console.log('Key pressed:', event.key);
    if (event.key === 'Enter') {
        console.log('Enter key was pressed!');
    }
});

const input2 = document.getElementById('myInput2');

input2.addEventListener('keydown', function (event) {
    console.log('Key pressed:', event.key);
    if (event.key === 'Enter') {
        console.log('Enter key was pressed!');
    }
});
const input3 = document.getElementById('myInput3');

input3.addEventListener('keydown', function (event) {
    console.log('Key pressed:', event.key);
    if (event.key === 'Enter') {
        console.log('Enter key was pressed!');
    }
});
