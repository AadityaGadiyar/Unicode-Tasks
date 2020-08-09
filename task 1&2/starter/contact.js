document.getElementById('first').addEventListener('blur',validatefName);
document.getElementById('last').addEventListener('blur',validatelName);
document.getElementById('zip').addEventListener('blur',validateZip);
document.getElementById('email').addEventListener('blur',validateEmail);
document.getElementById('number').addEventListener('blur',validatePhone);
document.getElementById('button').addEventListener('click',addalert)

let a,b,c,d,e=false;

//firstname validation
function validatefName(){
    const name = document.getElementById('first');
    const re=/^([a-zA-Z]{2,20})$/;

    if(!re.test(name.value)){
        first.classList.add('is-invalid');
        a=false;
    }else{
        first.classList.remove('is-invalid');
        a=true;
        
    }
}
//lastname validation
function validatelName(){
    const lname = document.getElementById('last');
    const re=/^([a-zA-Z]{2,20})$/;

    if(!re.test(lname.value)){
        last.classList.add('is-invalid');
        b=false;
    }else{
        last.classList.remove('is-invalid');
        b=true;
        

    }
}
//zip validation
function validateZip(){
    const zip = document.getElementById('zip');
    const re = /^[0-9]{6}$/;

    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid');
        c=false;
    } else {
        zip.classList.remove('is-invalid');
        c=true;
    }
}
//email validation
function validateEmail(){
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

    if (!re.test(email.value)) {
        email.classList.add('is-invalid');
        d=false;
    } else {
        email.classList.remove('is-invalid');
        d = true;
    }
}
//number validation
function validatePhone(){
    const phone = document.getElementById('number');
    const re = /^\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4}$/;

    if (!re.test(phone.value)) {
        phone.classList.add('is-invalid');
        e=false;
    } else {
        phone.classList.remove('is-invalid');
        e = true;
        
    }
}

function addalert(){
    if (a === true && b === true && c===true && d===true && e===true ) { 
        showAlert('Form successfully submitted','success');
}
    else{
        showAlert('Please fill all fields', 'danger');
    }
    
    
}



//showAlert
function showAlert(message,className){
const div = document.createElement('div');
div.className=`alert alert-${className} text-center`;
div.appendChild(document.createTextNode(message));
const container=document.querySelector('.col-md-6');
const form=document.querySelector('#form');
container.insertBefore(div,form);
setTimeout(function(){
    document.querySelector('.alert').remove();
},2500)

};






