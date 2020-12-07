const controller = {};
controller.login = (data) => {
    view.setErrorMessage('email-error', data.email === '' ? 'Please Enter Your Email' : '');

    if (data.password === '') {
        view.setErrorMessage('password-error', 'Please Enter Your Password');
    } else {
        if (validatePassword(data.password) == true) {
            view.setErrorMessage('password-error', '');
        } else {
            view.setErrorMessage('password-error', 'Password Must Be Longer Than 6 Characters, Contains 1 Upper Case Character and 1 Number');
        }
    }
    if (data.email !== '' && data.password !== '') {
        model.login(data);
    };
};


controller.validateForm = (data) => {
    let isNotEmpty = true;
    for (let property in data) {
        if (data[property] === '') {
            view.setErrorMessage(`${property}-error`, 'Field is Required ');
            console.log(`${property}-error`);
            isNotEmpty = false;  
        }else{
            view.setErrorMessage(`${property}-error`, '');
        }
    };
    return isNotEmpty;
};


function validateEmail(email) {
    const emailFomat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailFomat.test(String(email).toLowerCase());
};

function validatePassword(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
    return re.test(password);
};