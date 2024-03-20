var inputName = document.getElementById('name')
var inputEmail = document.getElementById('email');
var inputMessage = document.getElementById('msg');
var submitButton = document.querySelector('.submit-button')
var regEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
var form = document.querySelector('.form')

function checkInput(){
    if (inputName.value !== '' && regEx.test(inputEmail.value)  && inputMessage.value !== ''){
        submitButton.style.background = '#fa923f'
        submitButton.disabled = false
    }else{
        submitButton.style.background = '#979695'
        submitButton.disabled = true
    }
    
}
form.addEventListener('submit', function(event){
    event.preventDefault();
    console.log(event)
})