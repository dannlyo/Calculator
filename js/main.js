var operator = document.querySelectorAll('.operator');
for(var i = 0;i<operator.length;i++){
    // console.log(operator[i]);
    operator[i].addEventListener('click', function (){
        console.log("Operator is "+this.innerHTML);
    })
}
var numbers = document.querySelectorAll('[data-number]');
for(var i = 0 ; i < numbers.length; i++){
    numbers[i].onclick = function (){
        console.log('This is '+this.innerHTML)
    }
}