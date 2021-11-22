let button = document.getElementById('button')
let modal = document.querySelector('.modal-container')
let close = document.querySelector('.close')

button.addEventListener("click", function () {
    modal.style.display = 'block'
})

close.addEventListener("click", function () {
    modal.style.display = 'none'
})