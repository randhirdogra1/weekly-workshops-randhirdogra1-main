let first = document.getElementById('button1')
let second = document.getElementById('button2')
let third = document.getElementById('button3')
let fourth = document.getElementById('button4')

first.addEventListener("click", function(){
    second.style.backgroundColor = 'red';
    fourth.style.backgroundColor = 'red';
})

second.addEventListener("click", function(){
    first.style.backgroundColor = 'yellow';
    fourth.style.backgroundColor = 'yellow';
})

third.addEventListener("click", function(){
    second.style.backgroundColor = 'yellow';
    third.style.backgroundColor = 'yellow';
})

fourth.addEventListener("click", function(){
    first.style.backgroundColor = 'red';
    third.style.backgroundColor = 'red';
})


