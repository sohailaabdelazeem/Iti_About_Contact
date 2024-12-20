document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    let isValid = true;

     document.getElementById('username-error').textContent = '';
    document.getElementById('email-error').textContent = '';
    document.getElementById('subject-error').textContent = '';

    // Username 
    const username = document.getElementById('username').value;
    const nameRegex = /^[A-Za-z]{3,}$/;
    if (username.trim() === '') {
        document.getElementById('username-error').textContent = 'Please enter your name.';
        document.getElementById('username-error').style.color = 'red';
        document.getElementById('username-error').style.marginBottom = '5px';
        isValid = false;
    }else if (!nameRegex.test(username)) {
        document.getElementById('username-error').textContent = 'Please enter a valid name with at least 3 characters.';
        document.getElementById('username-error').style.color = 'red';
        document.getElementById('username-error').style.marginBottom = '5px';
        isValid = false;
    }

    
    const email = document.getElementById('email').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'Please enter a valid email address.';
        document.getElementById('email-error').style.color = 'red';
        document.getElementById('email-error').style.marginBottom = '5px';
        isValid = false;
    }
     
    const subject = document.getElementById('subject').value;
    if (subject.trim() === '') {
        document.getElementById('subject-error').textContent = 'Please enter a Message.';
        document.getElementById('subject-error').style.color = 'red';
        document.getElementById('subject-error').style.marginBottom = '5px';
        isValid = false;
    }else if(subject.length <= 10){
        document.getElementById('subject-error').textContent = 'Message must be at least 10 characters.';
        document.getElementById('subject-error').style.color = 'red';
        document.getElementById('subject-error').style.marginBottom = '5px';
        isValid = false;
    }
     if (isValid) {
         console.log('Form is valid');
         document.getElementById('username').value = '';
         document.getElementById('email').value = '';
         document.getElementById('subject').value = '';
         
          document.getElementById('username-error').textContent = '';
         document.getElementById('email-error').textContent = '';
         document.getElementById('subject-error').textContent = ''
     } else {
        console.log('Form is invalid');
    }
});


// //////////////////////////////////////////////
document.getElementById('subscription-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to allow validation

    let isValid = true;

    // Clear any existing error messages
    document.getElementById('name-error').textContent = '';
    document.getElementById('email-error').textContent = '';

    // Check Name field
    const username = document.getElementById('SubUser').value;
    const usernameError = document.getElementById('name-error');
    if (username.trim() === '') {
        usernameError.textContent = 'Please enter your name.';
        usernameError.style.color = 'red';
        usernameError.style.width="200px"
        isValid = false;
    } else if (username.length < 3) {
        usernameError.textContent = 'Name must be at least 3  characters.';
        usernameError.style.color = 'red';
         usernameError.style.width="200px"
        isValid = false;
    }

    const email = document.getElementById('SubEmail').value;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const emailError = document.getElementById('Subemail-error');
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        emailError.style.color = 'red';
         emailError.style.width="200px";
        isValid = false;
    }
  
    if (isValid) {
        console.log('Form is valid');
        document.getElementById('SubUser').value = '';
        document.getElementById('SubEmail').value = '';
         
         document.getElementById('username-error').textContent = '';
        document.getElementById('Subemail-error').textContent = '';
    } else {
        console.log('Form is invalid');
    }
});

