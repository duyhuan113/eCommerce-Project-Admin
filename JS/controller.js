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

controller.validateAddProductForm = (data) => {
    dataDetail = data.detail
    view.setErrorMessage('name-error', data.name === '' ? 'Please Enter Product ' : '');
    view.setErrorMessage('price-error', data.price === '' ? 'Please Enter Product ' : '');
    view.setErrorMessage('color-error', data.color === '' ? 'Please Enter Product ' : '');
    view.setErrorMessage('quantity-error', data.availableQuantity === '' ? 'Please Enter Product ' : '');
    view.setErrorMessage('rearCam-error', dataDetail.rearCam === '' ? 'Please Enter Product ' : '');
    view.setErrorMessage('fontCam-error', dataDetail.fontCam === '' ? 'Please Enter Product ' : '');
    view.setErrorMessage('ram-error', dataDetail.ram === '' ? 'Please Enter Product ' : '');
    view.setErrorMessage('capacity-error', dataDetail.capacity === '' ? 'Please Enter Product ' : '');
    view.setErrorMessage('os-error', dataDetail.os === '' ? 'Please Enter Product ' : '');
    view.setErrorMessage('chip-error', dataDetail.chip === '' ? 'Please Enter Product ' : '');
    view.setErrorMessage('display-error', dataDetail.display === '' ? 'Please Enter Product ' : '');
    view.setErrorMessage('battery-error', dataDetail.battery === '' ? 'Please Enter Product ' : '');
    view.setErrorMessage('inTheBox-error', dataDetail.inTheBox === '' ? 'Please Enter Product ' : '');
    view.setErrorMessage('releaseDate-error', dataDetail.releaseDate === '' ? 'Please Enter Product ' : '');

    if(data.name !=='' && data.price !=='' && data.color !=='' && data.availableQuantity !=='' && data.releaseDate !=='' ){
        return true
    }else{
        return false
    }
};

controller.validateForm = (data) => {
    let isNotEmpty = true;
    for (let property in data) {
        if (data[property] == '') {
            view.setErrorMessage(`${property}-error`, 'Field is Required ');
            // console.log(${property}-error);
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