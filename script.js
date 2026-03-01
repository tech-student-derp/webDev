function openLogin(){
    document.getElementById('loginModal').style.display='block';
}

function closeLogin(){
    document.getElementById('loginModal').style.display='none';
}

window.onclick = function(event){
    if(event.target == document.getElementById('loginModal')){
        closeLogin();
    }
}

function login(){
    var studentId = document.getElementById('studentId').value.trim();
    var college = document.getElementById('college').value;
    var errorDiv = document.getElementById('loginError');

    if(studentId === '' || college === ''){
        errorDiv.textContent = 'Please enter Student ID and select your college.';
        return;
    }

    // For demo purposes: you can expand this for real authentication
    alert('Welcome, ' + studentId + ' from ' + college + '! You are now logged in.');
    closeLogin();
}