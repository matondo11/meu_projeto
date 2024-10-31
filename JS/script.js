function clicou(){
    var p = document.querySelector('.menu-links')
    var q = document.querySelector('.menu')
    p.style.display="block"
    q.style.display="none"
}

var img = document.getElementById('carro')
var info = document.getElementById('local')
var legen = document.querySelector('.legenda')
var nav1 = document.querySelector('.nav1')
var nav2 = document.querySelector('.nav2')
var nav3 = document.querySelector('.nav3')
function voltar(){
    if(info.innerText == '02'){
        img.src='img/1.png'
        info.innerHTML='01'
        legen.innerHTML='911 turbo'
        nav1.style.background='white'
        nav2.style.background='rgba(223, 243, 46, 0.849)'
        nav3.style.background='rgba(223, 243, 46, 0.849)'


    }else if(info.innerText == '03'){
         img.src='img/2.png'
         info.innerHTML='02'
         legen.innerHTML='Ferrari'
         nav2.style.background='white'
        nav1.style.background='rgba(223, 243, 46, 0.849)'
        nav3.style.background='rgba(223, 243, 46, 0.849)'

    }
}
function avancar(){
    if(info.innerText == '01'){
        img.src='img/2.png'
        info.innerHTML='02'
        legen.innerHTML='Ferrari'
        nav2.style.background='white'
        nav1.style.background='rgba(223, 243, 46, 0.849)'
        nav3.style.background='rgba(223, 243, 46, 0.849)'

    }else if(info.innerText == '02'){
         img.src='img/3.png'
         info.innerHTML='03'
         legen.innerHTML='Lamborghini'
         nav3.style.background='white'
        nav2.style.background='rgba(223, 243, 46, 0.849)'
        nav1.style.background='rgba(223, 243, 46, 0.849)'
    }

}