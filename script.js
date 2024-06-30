alert('Não necessário, mas caso preferir, usar o modo "Para Computador".')
img = document.getElementById("photo")
cll = document.getElementById("phone")
button = document.querySelector("button#showContent")
index = 1

function showContent(){
    cll.classList.remove('escondido')
    cll.classList.add('mostrar')

    sfx = new Audio('assets/audio/photo.mp3')
    song = new Audio('assets/audio/Distance(meganeko).mp3')
    song.loop = true;
    song.volume = .3

    button.parentElement.removeChild(button)
    song.play()
}

function prev(){
    if(index <= 1){
        index = 3
    } else{
        index--
    }

    setTimeout(function() {
        img.classList.add('esconder')
    }, 100)

    setTimeout(function() {
        trocarimg()
    }, 300)

    setTimeout(function(){
        img.classList.add('mostrar')
    }, 300)
    
    img.classList.remove('mostrar')
    img.classList.remove('esconder')
}

function next(){
    if(index >= 3){
        index = 1
    } else{
        index++
    }

    setTimeout(function() {
        img.classList.add('esconder')
    }, 100)

    setTimeout(function() {
        trocarimg()
    }, 300)

    setTimeout(function(){
        img.classList.add('mostrar')
    }, 300)
    
    img.classList.remove('mostrar')
    img.classList.remove('esconder')
}

function trocarimg(){
    if(index == 1){
        img.src = "assets/images/le-photo1.jpeg"
    } else if (index == 2){
        img.src = "assets/images/le-photo2.jpeg"
    } else if (index == 3) {
        img.src = "assets/images/le-photo3.jpeg"
    }
    sfx.play()
}