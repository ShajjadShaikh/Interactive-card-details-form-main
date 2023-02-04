const form = document.querySelector('#form');
const di = document.querySelector('.details-input');
const input1 = document.querySelector('#uname');
const h1 = document.querySelector('h3');
const input2 = document.querySelector('#number');
const h2 = document.querySelector('h2');
const input3 = document.querySelector('#exDatem');
const h4 = document.querySelector('.month');
const input4 = document.querySelector('#exDatey');
const h5 = document.querySelector('.year');
const input5 = document.querySelector('#cvc');
const h6 = document.querySelector('h5');
const b1 = document.querySelector('.b1');
const sbtbtn = document.querySelector("#submit_btn");
const thank = document.querySelector(".thank");
let boolname = false;
let boolnumber = false;
let boolmonth = false;
let boolyear = false;
let boolcvc = false;

sbtbtn.addEventListener("click", () => {

});

form.addEventListener('submit', e => {

    e.preventDefault();
    validateInputs();
    if (boolcvc == true && boolmonth == true && boolname == true && boolnumber == true && boolyear == true) {
        di.classList.add("hidden");
        thank.classList.remove("hidden");
    }
});



input1.addEventListener('input', function () {
    h1.innerText = input1.value
}
)

input2.addEventListener('input', function () {
    h2.innerText = input2.value
}
)



input3.addEventListener('input', function () {
    h4.innerText = input3.value
})


input4.addEventListener('input', function () {
    h5.innerText = input4.value
})



input5.addEventListener('input', function () {
    h6.innerText = input5.value
})

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;

    inputControl.classList.add('error');
    inputControl.classList.remove('success')

}

const setSuccess = element => {

    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    bool = true;

}


const validateInputs = () => {
    var letter = /^[A-Za-z\s]+$/;
    var no = /^(\d+ )*(\d+)$/;
    const input1value = input1.value.trim();
    const input2value = input2.value;
    const input3value = input3.value.trim();
    const input4value = input4.value.trim();
    const input5value = input5.value.trim();





    if (input1value.match(letter)) {
        setSuccess(uname);
        boolname = true;

    }
    else if (input1value === '') {
        setError(uname, `Can't be blank , please enter your name`)
    }
    else {
        setError(uname, `Wrong forrmat ,please enter your name`)
    }




    if (input2value.length < 19) {
        setError(number, `Please enter 16 digits with spaces`)
    }
    else if (input2value.match(no)) {
        setSuccess(number);
        boolnumber = true;
    }
    else if (input2value === '') {
        setError(number, `Can't be blank , please enter account number`)
    }
    else if (isNaN(input2value)) {
        setError(number, `wrong format`)
    }





    if (input3value === '') {
        setError(exDatem, `Can't be blank , please enter month`)
    }
    else if (isNaN(input3value)) {
        setError(exDatem, `wrong format`)
    }
    else if (input3value.length < 2) {
        setError(exDatem, `please enter 2 digits`)
    }
    else {
        setSuccess(exDatem);
        boolmonth = true;
    }



    if (input4value === '') {
        setError(exDatey, `Can't be blank , please enter cvc number`)
    }
    else if (isNaN(input4value)) {
        setError(exDatey, `wrong format`)
    }
    else if (input4value.length < 2) {
        setError(exDatey, `please enter 2 digits`)
    }
    else {
        setSuccess(exDatey);
        boolyear = true;
    }


    if (input5value === '') {
        setError(cvc, `Can't be blank , please enter cvc number`)
    }
    else if (isNaN(input5value)) {
        setError(cvc, `wrong format`)
    }
    else if (input5value.length < 3) {
        setError(cvc, `please enter 2 digits`)
    }
    else {
        setSuccess(cvc);
        boolcvc = true;
    }

}