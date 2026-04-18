function validateForm() {
    let isValid = true;
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();
    
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('subjectError').innerHTML = '';
    document.getElementById('messageError').innerHTML = '';
    
    if (name === '') {
        document.getElementById('nameError').innerHTML = 'Please enter your full name';
        document.getElementById('nameError').style.color = 'red';
        isValid = false;
    } else if (name.length < 2) {
        document.getElementById('nameError').innerHTML = 'Name must be at least 2 characters';
        document.getElementById('nameError').style.color = 'red';
        isValid = false;
    }
    
    if (email === '') {
        document.getElementById('emailError').innerHTML = 'Please enter your email address';
        document.getElementById('emailError').style.color = 'red';
        isValid = false;
    } else {
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').innerHTML = 'Please enter a valid email address';
            document.getElementById('emailError').style.color = 'red';
            isValid = false;
        }
    }
    
    if (subject === '') {
        document.getElementById('subjectError').innerHTML = 'Please select a subject';
        document.getElementById('subjectError').style.color = 'red';
        isValid = false;
    }
    
    if (message === '') {
        document.getElementById('messageError').innerHTML = 'Please enter your message';
        document.getElementById('messageError').style.color = 'red';
        isValid = false;
    } else if (message.length < 10) {
        document.getElementById('messageError').innerHTML = 'Message must be at least 10 characters';
        document.getElementById('messageError').style.color = 'red';
        isValid = false;
    }
    
    if (isValid) {
        alert('Thank you for contacting Golden Dragon!');
        return false;
    }
    
    return false;
}