import throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const STORAGE_KEY = 'feedback-form-state';
const dataForm = {};

feedbackForm.addEventListener('input', throttle(onInputForm, 500));
feedbackForm.addEventListener('submit', onSubmitForm);
forDataFill();


function onInputForm(e) {
    dataForm[e.target.name] = e.target.value;
    
    const dataJSON = JSON.stringify(dataForm);

    localStorage.setItem(STORAGE_KEY, dataJSON);
}

function onSubmitForm(e) {
    e.preventDefault();
    
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}

function forDataFill() {
    const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if(savedData) {
        email.value = savedData.email;
        message.value = savedData.message;
    }    
}