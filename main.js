let operand1='';
let operator='';
let operand2='';

document.addEventListener('DOMContentLoaded',function(){
    const display=document.getElementById('display');
    const buttons=document.querySelectorAll('#button');
    const cls=document.getElementById('clear');
    const del=document.getElementById('delete');
    const equals=document.getElementById('equals');
    const numbers=document.querySelectorAll('.number');
    const operators=document.querySelectorAll('.operator');

    //add event listeners
    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            display.textContent+=e.target.textContent;
        })
    });
    
    cls.addEventListener('click',()=>{
        display.textContent='';
        operand1='';
        operand2='';
        operator=''
    });
    
    del.addEventListener('click',()=>{
        /*--------------------TO WORK ON------------------------*/ 
        display.textContent = display.textContent.slice(0,-1) 
    });
    
    equals.addEventListener('click',operate);
    
    numbers.forEach((number) => {
        number.addEventListener('click', function (e) {
            operand2 += e.target.textContent;
        });
    });
    operators.forEach((op)=>{op.addEventListener('click',function(e){
        if (operator!==''){
            operate();
            operand1=result;
            operator=e.target.textContent;
            display.textContent+=e.target.textContent;
            operand2='';
        }else{
            operator=e.target.textContent;
            operand1=operand2;
            operand2='';
        }
    })});

});

function add(num1,num2){
    num1=Number(num1);
    num2=Number(num2);
    return (num1+num2);
}
function subtract(num1,num2){
    return (num1-num2);
}
function multiply(num1,num2){
    return (num1*num2);
}
function divide(num1,num2){
    if (num2==0||num1==0){
        alert('MathError');
    }else{
        return (num1/num2);
    }
}

function operate(){
    if(operand1==''||operand2==''||operator==''){
        alert("Please revise your expression");
    }else{  
        switch(operator){
            case '+':
                result=add(operand1,operand2);
                display.textContent=result;
                break;
            case '-':
                result=subtract(operand1,operand2);
                display.textContent=result;
                break;
            case '*':
                result=multiply(operand1,operand2);
                display.textContent=result;
                break;
            case '/':
                result=divide(operand1,operand2);
                display.textContent=result;
                break;
            default:
                alert("Enter a valid operator");
           }
    }
}


