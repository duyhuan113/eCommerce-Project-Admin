const view = {};
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'loginPage':
            document.getElementById('app').innerHTML = component.loginPage;

            const loginForm = document.getElementById('login-form');
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const data = {
                    email: loginForm.email.value,
                    password: loginForm.password.value
                };
                controller.login(data);
            });
            break;
        case 'homePage':
            document.getElementById('app').innerHTML = component.homePage;
            document.getElementById('dashBoard').insertAdjacentHTML('afterbegin', component.sideBar)
            model.getProductsData();
            break;
        case 'productPage':
            document.getElementById('app').innerHTML = component.productPage;
            document.getElementById('dashBoard').insertAdjacentHTML('afterbegin', component.sideBar)
            model.getProductsData();
            view.searchByName();

            break;
        case 'addProduct':
            document.getElementById('app').innerHTML = component.addProduct;
            document.getElementById('dashBoard').insertAdjacentHTML('afterbegin', component.sideBar)

            const addBtn = document.getElementById('addBtn');
            addBtn.addEventListener('click', () => {
                //model.uploadImgToFirestorage();
                view.addProduct();
            });

            break;
        case 'orderPage':
            document.getElementById('app').innerHTML = component.orderPage;
            document.getElementById('dashBoard').insertAdjacentHTML('afterbegin', component.sideBar);
            model.getOrdersData();

            

            break;
    }
};


view.showDashBoard = (data) => {
    const productCardNumber = document.getElementById('productCardNumber');
    const userCardNumber = document.getElementById('userCardNumber');
    const orderCardNumber = document.getElementById('orderCardNumber');
    const orderTable = document.getElementById('orders_tbody');
    let ordersData = data;

    productCardNumber.innerHTML = model.productsData.length;
    userCardNumber.innerHTML = model.usersData.length;
    orderCardNumber.innerHTML = ordersData.length;


    for (let i = 0; i < 5; i++) {
        orderTable.innerHTML += view.htmlOrderList(ordersData[i]);
    }

};



view.showProductList = (data) => {
    let productsData = data;
    const itemTbody = document.getElementById('item_tbody');
    const inputStatus = document.getElementsByClassName('inputStatus')
    itemTbody.innerHTML = ''
    for (let i = 0; i < productsData.length; i++) {
        itemTbody.innerHTML += view.htmlProductTable(productsData[i], i);
    };
};


// html
view.htmlOrderList = (data, i) => {
    let html = `
    <tr>
        <td>${i + 1}</td>
        <td>${data.id}</td>
        <td data-label="Email">${data.email}</td> 
        <td data-label="Quantity">${getQuantity(data)}</td>
        <td data-label="Created">${formatDate(data.createAt)}</td>
        <td data-label="Total">${data.total}$</td>
        <td class="orderStatus" data-label="Status">${data.status.toUpperCase()}</td>
        <td class="orderConfirm right__confirm" data-label="Payment" >
            <a href="" class="right__iconTable"><img src="assets/icon-check.svg" alt=""></a>
            <a href="" class="right__iconTable"><img src="assets/icon-x.svg" alt=""></a>
        </td>
        <td data-label="Detail" class="right__iconTable" onclick="view.showDetailOrder(${i},'view')"><img src="assets/eye.png" alt=""></td>
        <td data-label="Edit" class="right__iconTable" onclick="view.showDetailOrder(${i},'update')"><img src="assets/icon-edit.svg" alt=""></td>
        <td data-label="Delete" class="right__iconTable" onclick="model.removeOrder('${data.id}')"><img src="assets/icon-trash-black.svg" alt=""></td>
    </tr>`;
    return html
};
view.showDetailOrder = (index, option) => {
    let data = model.ordersData;
    const mainInformation = document.getElementById('mainInformation');
    // Get the modal
    let modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    const closeBtn = document.getElementById('closeBtn');
    // When the user clicks the button, open the modal 
    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    if (option == 'view') {
        mainInformation.innerHTML = view.htmlDetailOrder(data[index]);
    } else if (option == 'update') {
        mainInformation.innerHTML = view.htmlInputProduct(data[index]);
        view.listenEventUpdate(index);
    }
};
view.htmlProductTable = (data, i) => {
    html = `
    <tr>
        <td>${i + 1}</td>
        <td data-label="Name">${data.id}</td>
        <td data-label="ID"> ${data.name}</td>
        <td data-label="Quantity">${data.availableQuantity}</td>
        <td data-label="Price">${data.price}$</td>
        <td data-label="Category">
            <label class="switch">
            <input class="inputStatus" onclick="model.updateStatusProduct('${data.id}',${data.status})" type="checkbox" ${data.status}  >
            <span class="slider"></span>
            </label>
        </td>
        <td data-label="Detail" class="right__iconTable" onclick="view.showDetailProduct(${i},'view')"><img src="assets/eye.png" alt=""></td>
        <td data-label="Edit" class="right__iconTable" onclick="view.showDetailProduct(${i},'update')"><img src="assets/icon-edit.svg" alt=""></td>
        <td data-label="Delete" class="right__iconTable" onclick="model.removeProduct('${data.id}')"><img src="assets/icon-trash-black.svg" alt=""></td>
    </tr>`;
    return html;
};

view.htmlDetailProduct = (data) => {
    html = `
    <div class="img_pro">
        <img src="${data.img[0]}" alt="">
        <div class="list_img">
            <ul>
                <li><img src="${data.img[1]}" alt=""></li>
                <li><img src="${data.img[2]}" alt=""></li>
                <li><img src="${data.img[3]}" alt=""></li>
            </ul>
        </div>
    </div>
    <div class="main_infor">
        <div class="infro_detail">
            <h1>${data.name}</h1>
        </div>
        <div class="infro_detail">
            <label><b> ID: </b></label><span>${data.id}</span>
        </div>
        <div class="infro_detail">
            <label><b> Category: </b></label><span>${data.category}</span>
        </div>
        <div class="infro_detail">
            <label><b> Color: </b></label><span>${data.color}</span>
        </div>
        <div class="infro_detail">
            <label> <b>Quantity:</b></label><span>${data.availableQuantity}</span>
        </div>
        <div class="infro_detail">
            <label> <b>Price:</b> </label> <span class="price">${data.price}$</span>
        </div>
        <div class="infro_detail">
            <label><b> Created: </b></label><span>${data.createAt} </span>
        </div>
        <div class="infro_detail">
            <h4>Description:</h4>
            <div class="main_des">
                <span>${data.des}</span>
            </div>
        </div>
    </div>
    <div class="video">
        <div class="video_cont">
            ${data.video}
        </div>
    </div>`;
    return html
};

view.htmlInputProduct = (data) => {
    const html = ` 
    <form id="updateProductForm">
        <div class="right__inputWrapper">
            <label for="p_name">Name</label>
            <input type="text" name="name" placeholder="Name" value="${data.name}">
            <div class="error" id="name-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Category</label>
            <input type="text" name="category" placeholder="Category" value="${data.category}">
            <div class="error" id="category-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Price</label>
            <input type="text" name="price" placeholder="Price" value="${data.price}">
            <div class="error" id="price-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="category">Color</label>
            <input type="text" name="color" placeholder="Color" value="${data.color}">
            <div class="error" id="color-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Quantity</label>
            <input type="text" name="quantity" placeholder="Quantity" value="${data.availableQuantity}">
            <div class="error" id="quantity-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Rear Camera</label>
            <input type="text" name="rearCam" placeholder="Rear Camera" value="${data.detail.rearCam}">
            <div class="error" id="rearCam-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Font Camera</label>
            <input type="text" name="fontCam" placeholder="Font Camera" value="${data.detail.fontCam}">
            <div class="error" id="fontCam-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">RAM</label>
            <input type="text" name="ram" placeholder="RAM" value="${data.detail.ram}">
            <div class="error" id="ram-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Capacity</label>
            <input type="text" name="capacity" placeholder="Capacity" value="${data.detail.capacity}">
            <div class="error" id="capacity-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">OS</label>
            <input type="text" name="os" placeholder="OS" value="${data.detail.os}">
            <div class="error" id="os-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Chip</label>
            <input type="text" name="chip" placeholder="Chip" value="${data.detail.chip}">
            <div class="error" id="chip-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Display</label>
            <input type="text" name="display" placeholder="Display" value="${data.detail.display}">
            <div class="error" id="display-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Battery</label>
            <input type="text" name="battery" placeholder="Battery" value="${data.detail.battery}">
            <div class="error" id="battery-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">In The Box</label>
            <input type="text" name="inTheBox" placeholder="In The Box" value="${data.detail.inTheBox}">
            <div class="error" id="inTheBox-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Release Date</label>
            <input type="text" name="releaseDate" placeholder="Release Date" value="${data.detail.releaseDate}">
            <div class="error" id="releaseDate-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="image">Select Picture </label>
            <input id="photo" type="file" name="img" multiple>
            <div class="error" id="img-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="title">Video</label>
            <input type="text" name="video" placeholder="Video" value="${data.video}">
            <div class="error" id="video-error"></div>
        </div>
        <div class="right__inputWrapper">
            <label for="desc">Description</label>
            <textarea id="" cols="30" rows="10" name="des" placeholder="Description"  ></textarea>
        </div>
    </form>
    <button id="addBtn" class="btn" disabled >Update</button>`;
    return html;
};

view.htmlDetailOrder = (data)=>{
 html = `
    <div class="order_detail">
        <table width="100%">
            <tr>
                <th width="200px">Order_ID</th>
                <td>${data.id}</td>
            </tr>
            <tr>
                <th>Customer_Name</th>
                <td>${data.id}</td>
            </tr>
            <tr>
                <th>Phone</th>
                <td>${data.id}</td>
            </tr>
            <tr>
                <th>Email</th>
                <td>${data.id}</td>
            </tr>
            <tr>
                <th>Address</th>
                <td>${data.id}, ${data.id}</td>
            </tr>
            <tr>
                <th height="150px">Note</th>
                <td>${data.id}</td>
            </tr>
        </table>
        <div class="donhang">
            <table width="100%">
                <thead>
                    <tr>
                        <th width="180px">Product_ID</th>
                        <th>Product_Name</th>
                        <th width="120px">Quantity</th>
                        <th>Price</th>
                        <th>Total</th>

                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td data-label="Product_ID">${data.id}</td>
                        <td data-label="Product_Name">${data.id}</td>
                        <td data-label="Quantity">${data.id}</td>
                        <td data-label="Price">${data.id}</td>
                        <td data-label="Pay">${data.id}</td>
                    </tr>
                    <tr>
                        <td data-label="Product_ID">${data.id}</td>
                        <td data-label="Product_Name">${data.id}</td>
                        <td data-label="Quantity">${data.id}</td>
                        <td data-label="Price">${data.id}</td>
                        <td data-label="Pay">${data.id}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td rowspan="4" colspan="4">Grand total</td>
                        <td>${data.id}</td>
                    </tr>
                </tfoot>
            </table>
        </div>
        <div class="tinhtrang">
            <table width="100%">
                <tr>
                    <th width="200px">Order_ID</th>
                    <td>${data.id}</td>
                </tr>
                <tr>
                    <th>Customer_Name</th>
                    <td>${data.id}</td>
                </tr>
                <tr>
                    <th>Phone</th>
                    <td>${data.id}</td>
                </tr>
                <tr>
                    <th>Email</th>
                    <td>${data.id}</td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>${data.id}, ${data.id}</td>
                </tr>
                <tr>
                    <th height="150px">Note</th>
                    <td>${data.id}</td>
                </tr>
            </table>
        </div>
    </div>
               

 `;
 return html;
};

//function của Product
view.addProduct = async () => {
    let files = document.querySelector("#photo").files;
    const addProductForm = document.getElementById('addProductForm');
    const data = {
        name: addProductForm.name.value,
        category: addProductForm.category.value,
        price: addProductForm.price.value,
        color: addProductForm.color.value,
        availableQuantity: addProductForm.quantity.value,
        detail: {
            rearCam: addProductForm.rearCam.value,
            fontCam: addProductForm.fontCam.value,
            ram: addProductForm.ram.value,
            capacity: addProductForm.category.value,
            os: addProductForm.os.value,
            chip: addProductForm.chip.value,
            display: addProductForm.display.value,
            battery: addProductForm.battery.value,
            inTheBox: addProductForm.inTheBox.value,
            releaseDate: addProductForm.releaseDate.value,
        },
        video: addProductForm.video.value,
        des: addProductForm.des.value,
        status: true
    };
    if (files.length >= 3) {
        if (controller.validateForm(data)) {
            let img = await model.uploadImgToFirestorage(files);
            data.img = [...img];
            model.addProduct(data);
        }
    } else {
        view.setErrorMessage('img-error', 'Choose at least 4 Images')
    }
};

view.showDetailProduct = (index, option) => {
    
    let productsData = model.productsData;
    const mainInformation = document.getElementById('mainInformation');
    // Get the modal
    let modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    const closeBtn = document.getElementById('closeBtn');
    // When the user clicks the button, open the modal 
    modal.style.display = "block";
    // When the user clicks on <span> (x), close the modal
    closeBtn.addEventListener('click', () => {
        modal.style.display = "none";
    });
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };

    if (option == 'view') {
        mainInformation.innerHTML = view.htmlDetailProduct(productsData[index]);
    } else if (option == 'update') {
        mainInformation.innerHTML = view.htmlInputProduct(productsData[index]);
        view.listenEventUpdate(index);
    }
};

view.listenEventUpdate = (index) => {
    let productsData = model.productsData;
    const addBtn = document.getElementById('addBtn');
    let updateProductForm = document.getElementById('updateProductForm');
    updateProductForm.addEventListener('change', (e) => {
        addBtn.disabled = false;
        addBtn.addEventListener('click', () => {
            view.updateProduct(productsData[index]);
            addBtn.disabled = true;
        });
    });
};

view.updateProduct = async (data) => {
    let files = document.querySelector("#photo").files;
    const updateProductForm = document.getElementById('updateProductForm');
    const dataToUpdate = {
        name: updateProductForm.name.value,
        category: updateProductForm.category.value,
        price: updateProductForm.price.value,
        color: updateProductForm.color.value,
        availableQuantity: updateProductForm.quantity.value,
        detail: {
            rearCam: updateProductForm.rearCam.value,
            fontCam: updateProductForm.fontCam.value,
            ram: updateProductForm.ram.value,
            capacity: updateProductForm.category.value,
            os: updateProductForm.os.value,
            chip: updateProductForm.chip.value,
            display: updateProductForm.display.value,
            battery: updateProductForm.battery.value,
            inTheBox: updateProductForm.inTheBox.value,
            releaseDate: updateProductForm.releaseDate.value,
        },
        video: updateProductForm.video.value,
        des: updateProductForm.des.value,
    };

    if (controller.validateForm(dataToUpdate)) {
        if (files.length <= 3) {
            view.setErrorMessage('img-error', 'Choose at least 4 Images')
        } else if (files.length == 0) {
            dataToUpdate.img = [...data.img];
        } else {
            let img = await model.uploadImgToFirestorage(files);
            dataToUpdate.img = [...img];
        }
    }
    model.updateProduct(data.id, dataToUpdate)
};


//đoạn này search
view.searchByName = () => {
    const inputSearch = document.getElementById('inputSearch');

    inputSearch.addEventListener('input', () => {
        view.filterByName(inputSearch.value)
        //console.log(inputSearch.value);
    })
};
view.filterByName = (keyValue) => {
    // lọc theo tên và category
    let data = model.productsData;
    let filterData = data.filter(item => {
        return item.name.toLowerCase().includes(keyValue.toLowerCase()) || item.category.toLowerCase().includes(keyValue.toLowerCase())
    })
    //sắp xếp alphabet
    filterData.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
    view.showProductList(filterData);
};

// function cua order
view.showOrderList = (data) => {
    let orderConfirm = document.getElementsByClassName('orderConfirm');
    let comfirmBtn = document.getElementById('comfirmBtn');
    const orderTable = document.getElementById('orders_tbody');
    orderTable.innerHTML = ``;
    for (let i = 0; i < data.length; i++) {
        orderTable.innerHTML += view.htmlOrderList(data[i], i);
        
        if (data[i].status == 'confirm') {
            orderConfirm[i].innerHTML = `<a  class="right__iconTable"><img src="assets/icon-check.svg" alt=""></a>`; 
            orderConfirm[i].style.backgroundColor ='#8BF556';
        } else if (data[i].status == 'cancel') {
            orderConfirm[i].innerHTML = `<a  class="right__iconTable"><img src="assets/icon-x.svg" alt=""></a>`;
            orderConfirm[i].style.backgroundColor ='#F27C94';
        }else if (data[i].status == 'wait') {
            orderConfirm[i].innerHTML = `
            <a class="comfirmBtn right__iconTable" onclick="model.updateStatusOrder('${data[i].id}','confirm')"><img src="assets/icon-check.svg" alt=""></a>
            <a class="comfirmBtn right__iconTable" onclick="model.updateStatusOrder('${data[i].id}','cancel')"><img src="assets/icon-x.svg" alt=""></a>`;
        }

    };
};





view.setScreenBtn = (value) => {

    localStorage.setItem('currentLocationScreen', value);
    location.reload();
};
view.signOutButton = () => {
    firebase.auth().signOut();
    model.currentUser = {};
    localStorage.removeItem('currentLocationScreen');
    model.productData = [];
};

view.setErrorMessage = (elementId, content) => {
    document.getElementById(elementId).innerText = content;
};


function formatDate(input) {
    var date = new Date(input);
    return [
        ("0" + date.getDate()).slice(-2),
        ("0" + (date.getMonth() + 1)).slice(-2),
        date.getFullYear()
    ].join('/');
};

function getQuantity(data) {
    var total = 0;
    for (var i = 0; i < data.items.length; i++) {
        total = total + data.items[i].inCart;
    }
    return total;
}




view.setStatusOrder = (status) => {
    if (status) {
        return 'Accept'
    } else {
        return 'Waiting'
    }
};