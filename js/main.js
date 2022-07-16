// num key
var one = document.getElementById('one');
var two = document.getElementById('two');
var three = document.getElementById('three');
var four = document.getElementById('four');
var five = document.getElementById('five');
var six = document.getElementById('six');
var seven = document.getElementById('seven');
var eight = document.getElementById('eight');
var nine = document.getElementById('nine');
var zero = document.getElementById('zero');
// operators
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var point = document.getElementById('point');
var division = document.getElementById('division');
// other
var product = document.getElementById('product');
var del = document.getElementById('del');
var reset = document.getElementById('reset');
var equal = document.getElementById('equal');
var output = document.getElementById('output')

one.addEventListener('click', () =>{
    output.innerHTML = '1';
})
two.addEventListener('click', () =>{
    output.innerHTML = '2';
})
three.addEventListener('click', () =>{
    output.innerHTML = '3';
})
four.addEventListener('click', () =>{
    output.innerHTML = '4';
})
five.addEventListener('click', () =>{
    output.innerHTML = '5';
})
six.addEventListener('click', () =>{
    output.innerHTML = '6';
})
seven.addEventListener('click', () =>{
    output.innerHTML = '7';
})
eight.addEventListener('click', () =>{
    output.innerHTML = '8';
})
nine.addEventListener('click', () =>{
    output.innerHTML = '9';
})
zero.addEventListener('click', () =>{
    output.innerHTML = '0';
})

// Operator
minus.addEventListener('click', () =>{
    output.innerHTML = '-';
})
plus.addEventListener('click', () =>{
    output.innerHTML = '+';
})
division.addEventListener('click', () =>{
    output.innerHTML = '/';
})
product.addEventListener('click', () =>{
    output.innerHTML = 'x';
})