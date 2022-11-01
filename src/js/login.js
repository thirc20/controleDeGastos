document.body.addEventListener("keypress", (evt) => {
    const code = evt.keyCode;
    if(code == 13){validateInfor()}
})

function validateInfor(){
    let email = document.querySelector('#email')
    let password = document.querySelector('#password')
    if(email.value == ""){
        email.classList.add("is-invalid")
    }else{
        email.classList.remove('is-invalid')
    }
    if( password.value == "" ){
        password.classList.add("is-invalid")
    }else {
        password.classList.remove('is-invalid')
    }
}