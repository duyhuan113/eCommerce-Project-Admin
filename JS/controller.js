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


    // view.setErrorMessage('name-error', data.name === '' ? 'Field is Required' : '');
    // view.setErrorMessage('category-error', data.category === '' ? 'Field is Required' : '');
    // view.setErrorMessage('price-error', data.price === '' ? 'Field is Required' : '');
    // view.setErrorMessage('color-error', data.color === '' ? 'Field is Required ' : '');
    // view.setErrorMessage('quantity-error', data.availableQuantity === '' ? 'Field is Required ' : '');
    // view.setErrorMessage('rearCam-error', data.rearCam === '' ? 'Field is Required ' : '');
    // view.setErrorMessage('fontCam-error', data.fontCam === '' ? 'Field is Required ' : '');
    // view.setErrorMessage('ram-error', data.ram === '' ? 'Field is Required ' : '');
    // view.setErrorMessage('capacity-error', data.capacity === '' ? 'Field is Required ' : '');
    // view.setErrorMessage('os-error', data.os === '' ? 'Field is Required ' : '');
    // view.setErrorMessage('chip-error', data.chip === '' ? 'Field is Required ' : '');
    // view.setErrorMessage('display-error', data.display === '' ? 'Field is Required ' : '');
    // view.setErrorMessage('battery-error', data.battery === '' ? 'Field is Required ' : '');
    // view.setErrorMessage('inTheBox-error', data.inTheBox === '' ? 'Field is Required ' : '');
    // view.setErrorMessage('releaseDate-error', data.releaseDate === '' ? 'Field is Required ' : '');
    // view.setErrorMessage('video-error', data.video === '' ? 'Field is Required ' : '');
    // view.setErrorMessage('des-error', data.des === '' ? 'Field is Required ' : '');

   // && data.category !== '' && data.price !== '' && data.color !== '' && data.availableQuantity !== '' && data.rearCam !== '' && data.fontCam !== '' && data.ram !== '' && data.capacity !== '' && data.os !== '' && data.chip !== '' && data.display !== '' && data.battery !== '' && data.inTheBox !== '' && data.releaseDate !== '' && data.video !== '' && data.des !== ''
    if (data.name !== '') {
        return true
        //model.uploadImgToFirestorage(data);
    } else {
        alert('Please Enter , not to Blank Information')
    };


};


function validateEmail(email) {
    const emailFomat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailFomat.test(String(email).toLowerCase());
};

function validatePassword(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
    return re.test(password);
};