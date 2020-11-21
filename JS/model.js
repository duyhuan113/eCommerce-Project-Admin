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
    model.getOrdersData()

};
model.getOrdersData = async () => {
    //đoạn này bóc tách dữ liệu từ db trả về
    const response = await firebase.firestore().collection("orders").get()
    model.ordersData = getDataFromDocs(response.docs).sort((a, b) => (a.createAt < b.createAt) ? 1 : ((b.createAt < a.createAt) ? -1 : 0));;
    if (model.currentLocationScreen == 'homePage') {
        view.showDashBoard(model.ordersData);
    }else{
        view.showOrderList(model.ordersData);
    }
};

model.uploadImgToFirestorage = async (files) => {
    console.log('ok, cho ty!!!');
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

model.addProduct =  (data) => {
    const dataToCreate = {
        ...data,
        createAt: new Date().toISOString()
    }
    console.log(dataToCreate);
    firebase.firestore().collection('products').doc().set(dataToCreate);
    return alert('Successful')
};

model.updateProduct =(id,data)=>{
    firebase.firestore().collection('products').doc(id).update(data);
    return alert('Successful');
}
model.removeProduct = (id)=>{
    console.log(id);
    firebase.firestore().collection("products").doc(id).delete().then(function() {
        console.log("Document successfully deleted!");
        model.getProductsData();
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
};

model.updateStatusProduct= async (id,status)=>{
    if(status){
        await firebase.firestore().collection('products').doc(id).update({status:false});
    }else {
        await firebase.firestore().collection('products').doc(id).update({status:true});
    }
    model.getProductsData();
};

model.updateStatusOrder = async (id,status)=>{
    console.log(id);
    console.log(status);
    await firebase.firestore().collection('orders').doc(id).update({status:status});
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

