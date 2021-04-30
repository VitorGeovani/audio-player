console.log('funcionando...')

let url = 'ANTXRES - SPIRIT.mp3'
let url2 = 'DCLXVI - MADNESS.mp3'

let audio = new Audio(url)
let audio2 = new Audio(url2)

let btn = document.querySelector('#btn');
let btn2 = document.querySelector('#btn2')
let btn3 = document.querySelector('#btn3')

btn.onclick = function() {
    audio.play()
    
    if (audio.paused) {
        audio2.play()
    }

    if (audio2.paused) {
        audio.play()
    }
}

btn2.onclick = function() {

    if (audio.play) {
        audio.pause()
    }
    if (audio2.play) {
        audio2.pause()
    }
}

btn3.onclick = function() {
    audio2.play()
}