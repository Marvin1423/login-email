const emailInput = document.getElementById('email')
const emailText = document.querySelector('.email-text')
const subscribed = document.getElementById('subscribed')
const form = document.getElementById('form')
const dismissButton = document.getElementById('dismiss-btn')
const submitButton = document.getElementById('submit-btn')
let emailInDismissMessage = document.getElementById('email-in-dismiss')


submitButton.addEventListener('click', () => {
    if (validateEmail(emailInput.value)){
        subscribed.classList.remove('hide')
        form.classList.add('hide')
        emailInDismissMessage.innerHTML = emailInput.value
    } else {
        emailText.classList.add('error')
        emailInput.classList.remove('no-error')
        emailInput.classList.add('error')
    }
})

dismissButton.addEventListener('click', () =>{
    subscribed.classList.add('hide')
    form.classList.remove('hide')
})

function validateEmail(email) {
    let regex = /\S+@\S+\.\S+/;
    return regex.test(email);
}