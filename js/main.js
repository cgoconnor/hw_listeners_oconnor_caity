var mainForm = document.getElementById('main-form');

mainForm.addEventListener('submit', function (event) {
    event.preventDefault();
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    console.log('The firstName is: ' + firstName);
    console.log('The lastName is: ' + lastName);
    console.log('The email is: ' + email);
    console.log('The message is: ' + message);
});
