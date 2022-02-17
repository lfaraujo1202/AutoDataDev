let btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputPass = document.querySelector('#password')
    if(inputPass.getAttribute('type') == 'password'){
        inputPass.setAttribute('type', 'text')
    } else {
        inputPass.setAttribute('type','password')
    }
})

function enter(){
    let userlabel = document.querySelector('#userlabel')
    let user = document.querySelector('#email')
    let passlabel = document.querySelector('#passlabel')
    let pass = document.querySelector('#password')

    let msgerror = document.querySelector('msgError')

    let userValid = {
        name: '',
        user: '',
        pass: '',
    }

    if (user.value == "admin" && pass.value == "admin"){
        userValid = {
            name: "admin",
            user: "admin",
            pass: "admin"
        }
    }

    if (user.value == userValid.user && pass.value == userValid.pass){
        window.location.href = "http://127.0.0.1:5500/home.html"
        let token = Math.random().toString(16).substring(2)
        localStorage.setItem('token', token)

    } else {
        userlabel.setAttribute('style', 'color: #bd2b2b')
        user.setAttribute('style', 'border-color: #bd2b2b')
        passlabel.setAttribute('style', 'color: #bd2b2b')
        pass.setAttribute('style', 'border-color: #bd2b2b')
        msgError.setAttribute ('style', 'display: block')
        msgError.innerHTML = 'Usuário ou senha incorretos'
        user.focus()
    }
}