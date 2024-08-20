const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const lastname_input = document.getElementById('lastname-input')
const email_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const confirm_password_input = document.getElementById('confirm-password-input')
const error_message = document.getElementById('app')

form.addEventListener ('submit', (e) => {
  
    let errors =  []

    if( firstname_input){
        errors = getSignupFormErrors(firstname_input.value, lastname_input.value, email_input.value, password_input.value, confirm_password_input.value)

        
    }
    if (errors.length > 0){
        error_message.innerText = errors.join(". ")
    }
    
})

function getSignupFormErrors(firstname, lastname, email, password, confirmpassword){

    let errors = []

    if (firstname === '' || firstname == null){
        errors.push('Firstname is required')
        firstname_input.parentElement.classList.add('incorrect')
    }
    
    if (lastname === '' || lastname == null){
        lastname_input.push('Lastname is required')
        lastname_input.parentElement.classList.add('incorrect')
    }

    if (email === '' || email == null){
        email_input.push(' Email is required')
        email_input.parentElement.classList.add('incorrect')
    }

    if (password === '' || password == null){
        password_input.push('Password is required')
        password_input.parentElement.classList.add('incorrect')
    }

    if (confirmpassword === '' || confirmpassword == null){
        confirm_password_input.push('Confirm Password is required')
        confirm_password_input.parentElement.classList.add('incorrect')
    }
      return errors;
}
