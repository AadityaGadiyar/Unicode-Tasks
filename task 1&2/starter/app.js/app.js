document.getElementById('form1').addEventListener('submit',showAlert);

function showAlert(e){
    if(e.target.value === ''){
        alert('Please enter your email');
    }
    else{
        alert('Response recorded');
    }

    e.preventDefault();
}