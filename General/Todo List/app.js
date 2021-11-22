let input = document.querySelector('input')
let button = document.querySelector('.add')
let wrapper = document.querySelector('.wrapper')
let ul = document.querySelector('#list')


function createElements(text) {
    let li = document.createElement('li')
    let del = document.createElement('span')

    li.className = 'elem'
    del.className = 'deleter'
    del.textContent = 'delete'

    del.addEventListener('click',function () {
        ul.removeChild(li)
    })

    li.textContent = text
    ul.appendChild(li)
    li.appendChild(del)
}

button.addEventListener('click', function (e) {
    if (!(input.value === 'Name...' || input.value === '')) {
        createElements(input.value)
        input.value = ''
    }
})

input.addEventListener('focus', function () {
    input.placeholder = ''
})

input.addEventListener('blur', function () {
    input.placeholder = 'Name...'
})

input.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) {
        createElements(input.value)
    }
    if (e.keyCode === 13) {
        input.value = ''
    }
})