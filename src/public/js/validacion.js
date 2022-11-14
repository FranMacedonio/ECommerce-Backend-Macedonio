const boton = document.getElementById('btn')
const names = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirm_password = document.getElementById('confirm_password')
const img = document.getElementById('img')

// Errores
const errores = document.getElementById('erroresValidacion')
const nameError = document.getElementById('nameError')
const mailError = document.getElementById('mailError')
const passError = document.getElementById('passError')
const passVacia = document.getElementById('passVacia')
const passLength = document.getElementById('passLength')

// Validar mail
function validateEmail(){
	// Define our regular expression.
	var validEmail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

	// Using test we can check if the text match the pattern
	if( validEmail.test(email.value) ){
		return true;
	}else{
		return false;
	}
} 

let usuarios;
let mailsExistentes;
fetch('http://localhost:3000/api/usuarios')
        .then((response) => response.json())
        .then((data) => usuarios = data)
        .then(() => mailsExistentes = usuarios.map(x => x.email))
        .then(() => console.log(mailsExistentes))

names.addEventListener('focusout', () => {
    if(names.value.length == 0) {
        names.classList.add('borde')
        nameError.style.display = "block"
    } else {
        names.classList.remove('borde')
        nameError.style.display = "none"
    }
})
email.addEventListener('focusout', () => {
    if(mailsExistentes.find(x => x == email.value) || !validateEmail()) {
        email.classList.add('borde')
        mailError.style.display = "block"
    } else {
        email.classList.remove('borde')
        mailError.style.display = "none"
    }
})

password.addEventListener('focusout', () => {
    if(!(password.value === confirm_password.value)) {
        password.classList.add('borde')
        confirm_password.classList.add('borde')
        passError.style.display = "block"
    } else {
        confirm_password.classList.remove('borde')
        password.classList.remove('borde')
        passError.style.display = "none"
    }

    if(password.value.length < 6) {
        password.classList.add('borde')
        passVacia.style.display = "block"
    } else {
        password.classList.remove('borde')
        passVacia.style.display = "none"
    }
})

confirm_password.addEventListener('focusout', () => {
    if(!(password.value === confirm_password.value)) {
        password.classList.add('borde')
        confirm_password.classList.add('borde')
        passError.style.display = "block"
    } else {
        password.classList.remove('borde')
        confirm_password.classList.remove('borde')
        passError.style.display = "none"
    }

    if(password.value.length < 6) {
        password.classList.add('borde')
        passVacia.style.display = "block"
    } else {
        password.classList.remove('borde')
        passVacia.style.display = "none"
    }
})

boton.addEventListener('click', e => {
    e.preventDefault()
    if(names.classList.contains('borde') || email.classList.contains('borde') || password.classList.contains('borde') || confirm_password.classList.contains('borde')) {
        alert('Algun casillero no es valido')
    } else {
        const datos = {
            name: names.value,
            email: email.value,
            password: password.value,
            img: img.value
        }
        const URL = `/signup`

        console.log('Datos del fetch', { datos: datos, url: URL })

        const options = {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }
        fetch(URL, options)
                .then(res => res.json)
                .then(dat => console.log(dat))
                .catch(err => console.log(err))
        
        setTimeout(() => {
            window.location.href = '/login'
        }, 2000)
    }
})