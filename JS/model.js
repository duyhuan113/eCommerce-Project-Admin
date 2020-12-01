const model = {};
model.productsData = undefined;
model.usersData = undefined;
model.ordersData = undefined;
model.currentUser = undefined;
model.currentLocationScreen = localStorage.getItem('currentLocationScreen');

model.login = (data) => {
    try {
        console.log('Login...');
        firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        // đoạn này sau khi login thành công, chuyển tiếp email vừa dùng để check role
        //view.setScreenBtn('homePage');
    } catch (err) {
        console.log(err);
        alert(err.message)
    }
};


model.getProductsData = async () => {
    //đoạn này bóc tách dữ liệu từ db trả về
    const response = await firebase.firestore().collection("products").get()
    model.productsData = getDataFromDocs(response.docs).sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name > a.name) ? -1 : 0));
    model.getUsersData();
    if (model.currentLocationScreen == 'productPage') {
        view.showProductList(model.productsData);
    }
};
model.getUsersData = async () => {
    //đoạn này bóc tách dữ liệu từ db trả về
    const response = await firebase.firestore().collection("users").get()
    model.usersData = getDataFromDocs(response.docs);
    model.usersData.sort((a, b) => (a.name.toLowerCase() > b.name.toLowerCase()) ? 1 : ((b.name > a.name) ? -1 : 0));

    if (model.currentLocationScreen == 'customerPage') {
        view.showCustomerList(model.usersData);
    }

    model.getOrdersData();

};
model.getOrdersData = async () => {
    //đoạn này bóc tách dữ liệu từ db trả về
    const response = await firebase.firestore().collection("orders").get()
    model.ordersData = getDataFromDocs(response.docs).sort((a, b) => (a.createAt < b.createAt) ? 1 : ((b.createAt < a.createAt) ? -1 : 0));;
    if (model.currentLocationScreen == 'homePage') {
        view.showDashBoard(model.ordersData);
    } else if (model.currentLocationScreen == 'orderPage') {
        view.showOrderList(model.ordersData);
    }
};

//function này lấy order by id 
model.getOrdersDatabyId = async (id) => {
    const response = await firebase.firestore().collection("orders").where("email", "==", id).get()
    return getDataFromDocs(response.docs).sort((a, b) => (a.createAt < b.createAt) ? 1 : ((b.createAt < a.createAt) ? -1 : 0));
};


model.uploadImgToFirestorage = async (files) => {
    let images = [];
    let imagePaths = [];
    images = [...files];
    for (let i = 0; i < images.length; i++) {
        file = images[i];
        const name = "imgProduct" + file.name;
        const metadata = {
            contentType: file.type
        };
        const task = await firebase.storage().ref().child(name).put(file, metadata);
        let path = await firebase.storage().ref().child(name).getDownloadURL();
        imagePaths.push(path);
        console.log(i);
    }
    return imagePaths;
};

model.addProduct = (data) => {
    const dataToCreate = {
        ...data,
        createAt: new Date().toISOString()
    }
    firebase.firestore().collection('products').doc().set(dataToCreate);
    return alert('Successful')
};

model.update = async (id, data, collection) => {
    await firebase.firestore().collection(collection).doc(id).update(data);
    model.getOrdersData();
    model.getProductsData();
    model.getUsersData();
    


}
model.removeItem = (collection, id) => {
    console.log(id);
    firebase.firestore().collection(collection).doc(id).delete().then(function () {
        console.log("Document successfully deleted!");
        model.getProductsData();
        model.getUsersData()
    }).catch(function (error) {
        console.error("Error removing document: ", error);
    });
};


//function này update Status cho cả product và customer
model.updateStatus = async (collection, id, value) => {
    await firebase.firestore().collection(collection).doc(id).update({ status: value });
    model.getProductsData();
    model.getUsersData();
};

// function này update Status cho Order
model.updateStatusOrder = async (id, status) => {
    console.log(id);
    console.log(status);
    await firebase.firestore().collection('orders').doc(id).update({ status: status });
    model.getOrdersData();
};


//đoạn này lấy Data từ doc
getDataFromDocs = (docs) => {
    return docs.map(item => getDataFromDoc(item))
}
getDataFromDoc = (doc) => {
    const data = doc.data()
    data.id = doc.id
    return data
}

