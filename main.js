const display=document.getElementById('display');
const buttons=document.querySelectorAll('#button');
const cls=document.getElementById('clear');
const del=document.getElementById('delete');
const equals=document.getElementById('equals');

//add event listeners
buttons.forEach(function(button){
    button.addEventListener('click',function(e){
        display.textContent+=e.target.textContent;
    })
});
cls.addEventListener('click',()=>{
    display.textContent='';
});
del.addEventListener('click',()=>{
    display.textContent = display.textContent.slice(0,-1) 
});
equals.addEventListener('click',()=>{
    display.textContent = eval(display.textContent)
})
