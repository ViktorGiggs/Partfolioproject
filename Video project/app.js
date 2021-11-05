const btn = document.querySelector('.switch-btn')
const video = document.querySelector('.video-container')
const btnt = document.querySelector('.tenet-btn')

btn.addEventListener('click', function () {
    if (!btn.classList.contains('slide')) {
        btn.classList.add('slode')
        video.pause()
    }
})

btnt.addEventListener('click', function () {

        btn.classList.remove('slide')
        video.play()

})