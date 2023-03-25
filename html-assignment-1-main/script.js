const signupButton = document.getElementById('signupButton')
const loginButton = document.getElementById('loginButton')
const loginContainer = document.getElementById('loginContainer')
const signupContainer = document.getElementById('signupContainer')

signupButton.addEventListener('click',() => {
    console.log('Signup')
    signupButton.classList.remove('active-auth')
    loginButton.classList.add('active-auth')
    loginContainer.classList.add('hidden')
    signupContainer.classList.remove('hidden')
})

loginButton.addEventListener('click',() => {
    console.log('Login')
    signupButton.classList.add('active-auth')
    loginButton.classList.remove('active-auth')
    loginContainer.classList.remove('hidden')
    signupContainer.classList.add('hidden')
})
