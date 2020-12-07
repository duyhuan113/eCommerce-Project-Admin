const component = {};
component.loginPage = `
<div class="login-container">
<section>
<div class="container" >
    <div  class="login_form">
        <h1>Sign In</h1>
        <form id="login-form" action="">
            <div class="input-wrapper">
                <input type="text" placeholder="Email..." name="email">
                <div class="error" id="email-error"></div>
            </div>
            <div class="input-wrapper">
                <input type="password" placeholder="Password..." name="password">
                <div class="error" id="password-error"></div>
            </div>
            
            <input type="submit"  value="Login">
        </form>
    </div>
</div>
</section>
</div>
`;

component.sideBar = `
    <div class="left">
        <span lass="left__icon">
            <span></span>
            <span></span>
            <span></span>
        </span>
        <div class="left__content">
            <div class="left__logo" onclick="view.setScreenBtn('homePage')" ><img src="IMG/logoshop.png"> </div>
            <div class="left__profile">
                <div class="left__image"><img src="assets/goku.jfif" alt=""></div>
                <p class="left__name">Supper Saya</p>
            </div>
            <ul class="left__menu">
                <li class="left__menuItem">
                    <a href="index.html" class="left__title" onclick="view.setScreenBtn('homePage')"><img src="assets/icon-dashboard.svg" alt="">Dashboard</a>
                </li>
                <li class=" dropdown">
                    <div class="dropbtn" onclick="view.setScreenBtn('productPage')"><img src="assets/icon-tag.svg" alt="" >Product<img class="left__iconDown" src="assets/arrow-down.svg" alt=""></div>
                    <div class=" dropdown-content">
                        <a onclick="view.setScreenBtn('addProduct')" href="">Add Product</a>
                        
                    </div>
                </li>
                <li class=" dropdown">
                    <div class="dropbtn" onclick="view.setScreenBtn('categoryPage')"><img src="assets/icon-tag.svg" alt="" >Category<img class="left__iconDown" src="assets/arrow-down.svg" alt=""></div>
                    <div class=" dropdown-content">
                        <a onclick="view.setScreenBtn('addCategory')" href="">Add Category</a>
                    </div>
                </li>
                
                <li class=" dropdown">
                    <div class="dropbtn" onclick="view.setScreenBtn('customerPage')"><img src="assets/icon-tag.svg" alt="" >Customer<img class="left__iconDown" src="assets/arrow-down.svg" alt=""></div>
                    <div class=" dropdown-content">
                        <a onclick="view.setScreenBtn('addCustomer')" href="">Add Customer</a>
                    </div>
                </li>
                <li class=" dropdown">
                    <div class="dropbtn" onclick="view.setScreenBtn('orderPage')"><img src="assets/icon-tag.svg" alt="" >Order<img class="left__iconDown" src="assets/arrow-down.svg" alt=""></div>
                    <div class=" dropdown-content">
                        <a onclick="view.setScreenBtn('reportPage')" href="">View Report</a>
                    </div>
                </li>
                
                <li class="left__menuItem">
                    <div class="left__title"><img src="assets/icon-user.svg" alt="">Admin<img class="left__iconDown" src="assets/arrow-down.svg" alt=""></div>
                    <div class="left__text">
                        <a class="left__link" href="insert_admin.html">Add admin</a>
                        <a class="left__link" href="view_admins.html">View admins</a>
                    </div>
                </li>
                <li class="left__menuItem" onclick="view.signOutButton()">
                    <a href="" class="left__title" ><img src="assets/icon-logout.svg" alt="">Sign out</a>
                </li>
            </ul>
        </div>
    </div>
    <!-- div Loading -->
    <div id="loading" style=" display: none;">
        <div class="overLay"></div>
        <div class="loader"></div>
    </div>
`;

component.homePage = `
    <div class="wrapper">
        <div id="dashBoard" class="dashboard">
            <div class="right">
                <div class="right__content">
                    <div class="right__title">Dashboard</div>
                    <p class="right__desc">dashboard</p>
                    <div class="right__cards">
                        <a class="right__card" onclick="view.setScreenBtn('productPage')"     href="" >
                            <div class="right__cardTitle">Products</div>
                            <div id="productCardNumber" class="right__cardNumber">0</div>
                            <div class="right__cardDesc">View detail <img src="assets/arrow-right.svg" alt=""></div>
                        </a>
                        <a class="right__card" href="" onclick="view.setScreenBtn('customerPage')">
                            <div class="right__cardTitle">Customer</div>
                            <div id="userCardNumber" class="right__cardNumber">0</div>
                            <div class="right__cardDesc">View detail<img src="assets/arrow-right.svg" alt=""></div>
                        </a>                          
                        <a class="right__card" href="" onclick="view.setScreenBtn('orderPage')">
                            <div class="right__cardTitle">Order</div>
                            <div id="orderCardNumber" class="right__cardNumber">0</div>
                            <div class="right__cardDesc">View Detail<img src="assets/arrow-right.svg" alt=""></div>
                        </a>
                    </div>
                    <div class="right__table">
                        <p class="right__tableTitle">New order</p>
                        <div class="right__tableWrapper">
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>ID</th>
                                        <th>Email</th>
                                        <th>Quantity</th>
                                        <th>Date</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Confirm</th>
                                        <th>View</th>
                                        <th>Edit</th> 
                                        <th>Delete</th> 
                                    </tr>
                                </thead>
                                <tbody id="orders_tbody">
                                    
                                </tbody>
                            </table>
                        </div>
                        <a onclick="view.setScreenBtn('orderPage')" class="right__tableMore"><p>View all order</p> <img src="assets/arrow-right-black.svg" alt=""></a>
                    </div>
                </div>
                <!-- div Update, div này bị bẩn -->
                <div id="myModal" class="modal">
                    <!-- Modal content -->
                    <div class="modal-content">
                        <div class="right__title">Edit Product Information</div>
                            <span id="closeBtn" class="close">&times;</span>
                            <div class="right">
                                <div class="right__content">
                                    <div id="mainInformation" class="information">
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`;

component.productPage = `
<div class="wrapper">
        <div id="dashBoard" class="dashboard">
            <div class="right">
                <div class="right__content">
                    <div class="right__title">Dashboard</div>
                    <p class="right__desc">View product</p>
                    <div class="right__table">
                        <div class="topnav">
                            <form>
                                <input id="inputSearch" type="text" placeholder="Search...">
                                <button id="btnSearch" >Search</button>
                            </form>
                        </div>
                        <div class="right__tableWrapper">
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th width="230px">Product ID</th>
                                        <th width="180px">Product Name</th>
                                        <th width="100px">Quantity</th>
                                        <th width="150px">Price</th>
                                        <th>Status</th>
                                        <th width="70px">Detail</th>
                                        <th width="70px">Edit</th>
                                        <th width="70px">Delete</th>
                                    </tr>
                                </thead>
                                <tbody id="item_tbody">
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        <!-- div Update, div này bị ẩn -->
        <div id="myModal" class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <div class="right__title">Edit Product Information</div>
                    <span id="closeBtn" class="close">&times;</span>
                    <div class="right">
                        <div class="right__content">
                            <div id="mainInformation" class="information">
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
</div>
`;

component.addProduct = `
<div class="wrapper">
            <div id="dashBoard" class="dashboard">
                <div class="right">
                    <div class="right__content">
                        <div class="right__title">Dashboard</div>
                        <p class="right__desc">Insert product</p>
                        <div class="right__formWrapper">
                            <form id="addProductForm"  action="" method="POST" >
                                <div class="right__inputWrapper">
                                    <label for="p_category">Name</label>
                                    <input type="text" name="name" placeholder="Name" required>
                                    <div class="error" id="name-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="title">Category</label>
                                    <input type="text" name="category" placeholder="Category" required>
                                    <div class="error" id="category-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="title">Price</label>
                                    <input type="text" name="price" placeholder="Price" required>
                                    <div class="error" id="price-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="category">Color</label>
                                    <input type="text" name="color" placeholder="Color">
                                    <div class="error" id="color-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="title">Quantity</label>
                                    <input type="text" name="quantity" placeholder="Quantity">
                                    <div class="error" id="quantity-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="title">Rear Camera</label>
                                    <input type="text" name="rearCam" placeholder="Rear Camera">
                                    <div class="error" id="rearCam-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="title">Font Camera</label>
                                    <input type="text" name="fontCam" placeholder="Font Camera">
                                    <div class="error" id="fontCam-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="title">RAM</label>
                                    <input type="text" name="ram" placeholder="RAM">
                                    <div class="error" id="ram-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="title">Capacity</label>
                                    <input type="text" name="capacity" placeholder="Capacity">
                                    <div class="error" id="capacity-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="title">OS</label>
                                    <input type="text" name="os" placeholder="OS">
                                    <div class="error" id="os-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="title">Chip</label>
                                    <input type="text" name="chip" placeholder="Chip">
                                    <div class="error" id="chip-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="title">Display</label>
                                    <input type="text" name="display" placeholder="Display">
                                    <div class="error" id="display-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="title">Battery</label>
                                    <input type="text" name="battery" placeholder="Battery">
                                    <div class="error" id="battery-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="title">In The Box</label>
                                    <input type="text" name="inTheBox" placeholder="In The Box">
                                    <div class="error" id="inTheBox-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="title">Release Date</label>
                                    <input type="text" name="releaseDate" placeholder="Release Date" required>
                                    <div class="error" id="releaseDate-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="image">Select Picture </label>
                                    <input id="photo" type="file" name="img" multiple>
                                    <div class="error" id="img-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="title">Video</label>
                                    <input type="text" name="video" placeholder="Video">
                                    <div class="error" id="video-error"></div>
                                </div>
                                <div class="right__inputWrapper">
                                    <label for="desc">Description</label>
                                    <textarea id="" cols="30" rows="10" name="des"  
                                        placeholder="Description" required></textarea>
                                </div>
                        </form>
                        <button id="addBtn" class="btn" >Add</button>
                        </div>
                    </div>
                </div>
            </div>
    </div>`;

component.addCustomer = `
    <div class="wrapper">
        <div id="dashBoard" class="dashboard">
            <div class="right">
                <div class="right__content">
                    <div class="right__title">Dashboard</div>
                    <p class="right__desc">Add Customer</p>
                    <div class="right__formWrapper">
                    <form id="addCustomerForm">
                        <div class="right__inputWrapper">
                            <label for="title">Email</label>
                            <input type="email" name="email" placeholder="Email" >
                            <div class="error" id="email-error"></div>
                        </div>
                        <div class="right__inputWrapper">
                            <label for="title">Password</label>
                            <input type="password" name="password" placeholder="Password" >
                            <div class="error" id="password-error"></div>
                        </div>
                        <div class="right__inputWrapper">
                            <label for="p_name">Name</label>
                            <input type="text" name="name" placeholder="Name" >
                            <div class="error" id="name-error"></div>
                        </div>
                        <div class="right__inputWrapper">
                            <label for="title">Date of Birth</label>
                            <input type="date" name="dob"  >
                            <div class="error" id="dob-error"></div>
                        </div>
                        <div class="right__inputWrapper">
                            <label for="title">Gender</label>
                            <input type="text" name="gender" placeholder="Gender" >
                            <div class="error" id="gender-error"></div>
                        </div>
                        <div class="right__inputWrapper">
                            <label for="category">Phone</label>
                            <input type="text" name="phone" placeholder="Phone" >
                            <div class="error" id="phone-error"></div>
                        </div>
                        <div class="right__inputWrapper">
                            <label for="title">Address</label>
                            <input type="text" name="address" placeholder="Address" >
                            <div class="error" id="address-error"></div>
                        </div>
                    </form>
                    <button id="addBtn" class="btn" >Add</button>
                    </div>
                    
                </div>
            </div>
        </div>
    </div>`;

component.orderPage = `
<div class="wrapper">
        <div id="dashBoard" class="dashboard">
            <div class="right">
                <div class="right__content">
                    <div class="right__title">Dashboard</div>
                    <p class="right__desc">View Order</p>
                    <div class="right__table">
                        <div class="topnav">
                            <form>
                                <input id="inputSearch" type="text" placeholder="Search...">
                                <button id="btnSearch" >Search</button>
                            </form>
                        </div>
                        <div class="right__tableWrapper">
                        <div class="right__tableWrapper">
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>ID</th>
                                        <th>Created by Email</th>
                                        <th>Quantity</th>
                                        <th>Date</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Confirm</th>
                                        <th>View</th>
                                        <th>Edit</th> 
                                        <th>Delete</th> 
                                    </tr>
                                </thead>
                                <tbody id="orders_tbody">
                                    
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     
    <!-- div Update, div này bị bẩn -->
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="right__title">Edit Product Information</div>
                <span id="closeBtn" class="close">&times;</span>
                <div class="right">
                    <div class="right__content">
                        <div id="mainInformation" class="information">
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- div Loading -->
    <div id="loading" style=" display: none;">
        <div class="overLay"></div>
        <div class="loader"></div>
    </div>
</div>
`;

component.customerPage = `
<div class="wrapper">
        <div id="dashBoard" class="dashboard">
            <div class="right">
                <div class="right__content">
                    <div class="right__title">Dashboard</div>
                    <p class="right__desc">View Customer</p>
                    <div class="right__table">
                        <div class="topnav">
                            <form>
                                <input id="inputSearch" type="text" placeholder="Search...">
                                <button id="btnSearch" >Search</button>
                            </form>
                        </div>
                        <div class="right__tableWrapper">
                        <div class="right__tableWrapper">
                            <table width="100%">
                                <thead>
                                    <tr>
                                        <th>No.</th>
                                        <th>Username</th>
                                        <th>Name</th>
                                        <th>Orders</th>
                                        <th>MemberShip</th>
                                        <th>Banned</th>
                                        <th>View</th>
                                        <th>Edit</th>
                                        <th>Delete</th> 
                                    </tr>
                                </thead>
                                <tbody id="customer_tbody">
                                    
                                </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     
    <!-- div Update, div này bị bẩn -->
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="right__title">Edit Product Information</div>
                <span id="closeBtn" class="close">&times;</span>
                <div class="right">
                    <div class="right__content">
                        <div id="mainInformation" class="information">
                            
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- div Loading -->
    <div id="loading" style=" display: none;">
        <div class="overLay"></div>
        <div class="loader"></div>
    </div>
</div>
`;

component.categoryPage = `
<div class="wrapper">
    <div id="dashBoard" class="dashboard">
        <div class="right">
            <div class="right__content">
                <div class="right__title">Dashboard</div>
                <p class="right__desc">View Category</p>
                <div class="right__table">
                    <div class="topnav">
                        <form>
                            <input id="inputSearch" type="text" placeholder="Search...">
                            <button id="btnSearch" >Search</button>
                        </form>
                    </div>
                    <div class="right__tableWrapper">
                        <table width="100%">
                            <thead>
                                <tr>
                                    <th>No.</th>
                                    <th>Category ID</th>
                                    <th>Brand Name</th>
                                    <th>DesCription</th>
                                    <th>Image</th>
                                    <th>Edit</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody id="category_tbody">
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <!-- div Update, div này bị ẩn -->
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="right__title">Edit Product Information</div>
                <span id="closeBtn" class="close">&times;</span>
                <div class="right">
                    <div class="right__content">
                        <div id="mainInformation" class="information">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;

component.addCategory = `
<div class="wrapper">
    <div id="dashBoard" class="dashboard">
        <div class="right">
            <div class="right__content">
                <div class="right__title">Dashboard</div>
                <p class="right__desc">Add Category</p>
                <div class="right__formWrapper">
                    <form id="addCategoryForm"  >
                        <div class="right__inputWrapper">
                            <label for="p_category">Brand Name</label>
                            <input type="text" name="brand" placeholder="Brand Name" required>
                            <div class="error" id="brand-error"></div>
                        </div>
                        <div class="right__inputWrapper">
                            <label for="title">Description</label>
                            <input type="text" name="des" placeholder="Description" required>
                            <div class="error" id="des-error"></div>
                        </div>
                        
                        <div class="right__inputWrapper">
                            <label for="image">Select Image </label>
                            <input id="photo" type="file" name="img" >
                            <div class="error" id="img-error"></div>
                        </div>
                    </form>
                    <button id="addBtn" class="btn" >Add</button>
                </div>
            </div>
        </div>
    </div>
</div>
`;

component.reportPage = `
    <div class="wrapper">
        <div id="dashBoard" class="dashboard">
            <div class="right">
                <div class="right__content">
                    <div class="right__title">Sales Summary</div>
                    <p class="right__desc">Financial Report</p>
                    <div class="right__cards">
                        <a class="right__card">
                            <div class="right__cardTitle">Total Orders</div>
                            <div id="orderNumber" class="right__cardNumber">$ 0</div>
                        </a>
                        <a class="right__card">
                            <div class="right__cardTitle">Revenue Total</div>
                            <div id="totalRevenueNumber" class="right__cardNumber">$ 0</div>
                        </a>
                        <a class="right__card">
                            <div class="right__cardTitle">Shipping Cost</div>
                            <div id="shipCostNumber" class="right__cardNumber">$ 0</div>
                        </a>
                        <a class="right__card">
                            <div class="right__cardTitle">Total Profit</div>
                            <div id="totalProfitNumber" class="right__cardNumber">$ 0</div>
                        </a>
                        <a class="right__card">
                            <div class="right__cardTitle">Average Order Size</div>
                            <div id="averageNumber" class="right__cardNumber">$ 0</div>
                        </a>
                    </div>
                    <div id="topPerformProduct" class="topPerformProduct">
                        <h1>TOP PERFORM PRODUCT</h1>
                        <table >
                            <thead>
                                <tr>
                                    <th style="width: 200px;">Product Name</th>
                                    <th style="width: 100px;">Profit</th>
                                    <th style="width: 100px;">Margin</th>
                                </tr>
                            </thead>
                            <tbody id="topPerformProduct_tbody">
                                
                            </tbody>
                        </table>
                    </div>
                    <div id="rangeMonths" class="rangeMonths">
                        <h1>DATE RANGE</h1>
                        <h3 for="strDate"> START DATE</h3>
                        <input id="strDate" type="date" value="2020-11-01">
                        <h3 for="endDate"> END DATE</h3>
                        <input id="endDate" type="date" value="2020-11-30">
                        <button id="viewDateRangeBtn" class="btn" onclick="view.getDateRange()">View</button>
                    </div>
                    <div class="right__table" style="height:600px;width:900px;">
                        <canvas id="myChart" width="400" height="400"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>`;