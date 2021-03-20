const controller = {};

controller.login = (data) => {
  view.setErrorMessage(
    "email-error",
    email === "" ? "Please Enter Your Email" : ""
  );

  if (password === "") {
    view.setErrorMessage("password-error", "Please Enter Your Password");
  } else {
    if (validatePassword(password) == true) {
      view.setErrorMessage("password-error", "");
    } else {
      view.setErrorMessage(
        "password-error",
        "Password Must Be Longer Than 6 Characters, Contains 1 Upper Case Character and 1 Number"
      );
    }
  }
  if (email !== "" && password !== "") {
    model.login(data);
  }
};

controller.validateAddProductForm = (data) => {
    let dataDetail = data.detail;
    const {
      name,
      category,
      color,
      availableQuantity,
      price,
      des,
      ram,
      video,
    } = data;
    const {
      fontCam,
      rearCam,
      capacity,
      battery,
      os,
      display,
      chip,
      inTheBox,
      releaseDate,
    } = dataDetail;
    view.setErrorMessage("name-error", name === "" ? "Please Enter  " : "");
    view.setErrorMessage("price-error", price === "" ? "Please Enter  " : "");
    view.setErrorMessage("color-error", color === "" ? "Please Enter  " : "");
    view.setErrorMessage(
      "quantity-error",
      availableQuantity === "" ? "Please Enter  " : ""
    );
    view.setErrorMessage("rearCam-error", rearCam === "" ? "Please Enter  " : "");
    view.setErrorMessage("fontCam-error", fontCam === "" ? "Please Enter  " : "");
    view.setErrorMessage("ram-error", ram === "" ? "Please Enter  " : "");
    view.setErrorMessage(
      "capacity-error",
      capacity === "" ? "Please Enter  " : ""
    );
    view.setErrorMessage("os-error", os === "" ? "Please Enter  " : "");
    view.setErrorMessage("chip-error", chip === "" ? "Please Enter  " : "");
    view.setErrorMessage("display-error", display === "" ? "Please Enter  " : "");
    view.setErrorMessage("battery-error", battery === "" ? "Please Enter  " : "");
    view.setErrorMessage(
      "inTheBox-error",
      inTheBox === "" ? "Please Enter  " : ""
    );
    // view.setErrorMessage(
    //   "releaseDate-error",
    //   releaseDate === "" ? "Please Enter  " : ""
    // );
  
    if (
      name !== "" &&
      price !== "" &&
      color !== "" &&
      availableQuantity !== "" &&
      releaseDate !== ""
    ) {
      return true;
    } else {
      return false;
    }
  };

controller.validateUpdateProductForm = (data) => {
  let dataDetail = data.detail;
  const {
    name,
    category,
    color,
    availableQuantity,
    price,
    des,
    ram,
    video,
  } = data;
  const {
    fontCam,
    rearCam,
    capacity,
    battery,
    os,
    display,
    chip,
    inTheBox,
    releaseDate,
  } = dataDetail;
  view.setErrorMessage("name-error", name === "" ? "Please Enter  " : "");
  view.setErrorMessage("price-error", price === "" ? "Please Enter  " : "");
  view.setErrorMessage("color-error", color === "" ? "Please Enter  " : "");
  view.setErrorMessage(
    "availableQuantity-error",
    availableQuantity === "" ? "Please Enter  " : ""
  );
  view.setErrorMessage("rearCam-error", rearCam === "" ? "Please Enter  " : "");
  view.setErrorMessage("fontCam-error", fontCam === "" ? "Please Enter  " : "");
  view.setErrorMessage("ram-error", ram === "" ? "Please Enter  " : "");
  view.setErrorMessage(
    "capacity-error",
    capacity === "" ? "Please Enter  " : ""
  );
  view.setErrorMessage("os-error", os === "" ? "Please Enter  " : "");
  view.setErrorMessage("chip-error", chip === "" ? "Please Enter  " : "");
  view.setErrorMessage("display-error", display === "" ? "Please Enter  " : "");
  view.setErrorMessage("battery-error", battery === "" ? "Please Enter  " : "");
  view.setErrorMessage(
    "inTheBox-error",
    inTheBox === "" ? "Please Enter  " : ""
  );
  view.setErrorMessage(
    "releaseDate-error",
    releaseDate === "" ? "Please Enter  " : ""
  );

  if (
    name !== "" &&
    price !== "" &&
    color !== "" &&
    availableQuantity !== "" &&
    releaseDate !== ""
  ) {
    return true;
  } else {
    return false;
  }
};

function validateEmail(email) {
  const emailFomat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailFomat.test(String(email).toLowerCase());
}

function validatePassword(password) {
  var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/;
  return re.test(password);
}
