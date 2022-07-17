var operator = document.querySelectorAll('.operator');
for(var i = 0;i<operator.length;i++){
    // console.log(operator[i]);
    operator[i].addEventListener('click', function (){
        // alert('hooray')
        // alert("Operator is "+this.innerHTML);
        console.log("Operator is "+this.innerHTML);
    })
}
