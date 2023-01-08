const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {

    event.preventDefault();

    const { elements: { email, password } } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert("Please fill out all fields");
    }
    
        const output = {
            email: email.value,
            password: password.value,
        };

        form.reset()
    
    return console.log(output);
}
