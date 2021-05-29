'use strict'

const cancel = document.getElementById('cancel'),
container = document.getElementById('container'),
form = document.getElementById("form"),
register = document.getElementById("register");

cancel.addEventListener('click',()=>{
container.style.display = "none";
form.style.display = "none";
})

register.addEventListener('click',()=>{
    container.style.display = "block";
    form.style.display = "block";
    
})
