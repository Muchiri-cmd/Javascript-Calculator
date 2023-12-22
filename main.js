const display=document.getElementById('display');
const buttons=document.querySelectorAll('#button');
const cls=document.getElementById('clear');
const del=document.getElementById('delete');
const equals=document.getElementById('equals');

//add event listeners
buttons.forEach(function(button){
    button.addEventListener('click',()=>{
        display.value +=button.value;
    })
});
cls.addEventListener('click',()=>{
    display.value='';
});
del.addEventListener('click',()=>{
    display.value = display.value.toString().slice(0,-1) 
});
equals.addEventListener('click',()=>{
    display.value = eval(display.value)
})