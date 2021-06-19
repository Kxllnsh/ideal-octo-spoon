
const lForm = document.getElementById('form')
const gForm = document.getElementById("g-s-form")
const email = document.getElementById('email')
const emailTwo = document.getElementById('email-two')
const lErrorMessage = document.querySelector('.error-one')
const gErrorMessage = document.querySelector('.error-two')

// first form client side validation
lForm.addEventListener('submit', (e)=> {
    e.preventDefault();

    let inputData = {
        email: email.value
    }

    //email validation
    function checkEmail(){
        if(email.value === '' || email.value === null){
             lErrorMessage.classList.add('show')
             email.style.border = '1px solid red';
            return false;
        }else{
            lErrorMessage.classList.remove('show')
            email.style.border = '';
            return true;
        }
    }
    //adding a event listener to listen for input so that it auto adds/remove error message
    email.addEventListener('input', ()=>{
        checkEmail();
    })

    let isEmailValid = checkEmail();

    let checkInputs = isEmailValid;

    //to submit info to server if they are valid
    if(checkInputs){

    }
})

// first form client side validation
gForm.addEventListener('submit', (a)=>{
    a.preventDefault();

    let inputData = {
        email: emailTwo.value
    }

    //email validation
    function checkEmail() {
        if (emailTwo.value === '' || emailTwo.value === null) {
            gErrorMessage.classList.add('show')
            emailTwo.style.border = '1px solid red';
            return false;
        } else {
            gErrorMessage.classList.remove('show')
            emailTwo.style.border = '';
            return true;
        }
    }
    //adding a event listener to listen for input so that it auto adds/remove error message
    emailTwo.addEventListener('input', () => {
        checkEmail();
    })

    let isEmailValid = checkEmail();

    let checkInputs = isEmailValid;

    //to submit info to server if they are valid
    if (checkInputs) {

    }
});
