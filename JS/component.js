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
        <div class="left__logo" onclick="view.setScreenBtn('homePage')"><img src="IMG/logoshop.png"> </div>
        <div class="left__profile">
            <div class="left__image"><img src="assets/goku.jfif" alt=""></div>
            <p class="left__name">Supper Saya</p>
        </div>
        <ul class="left__menu">

            <li class=" dropdown">
                <div class="dropbtn" onclick="view.setScreenBtn('homePage')"></i>DashBoard</div>

            </li>
            <li class=" dropdown">
                <div class="dropbtn" onclick="view.setScreenBtn('productPage')">Product<img class="left__iconDown" src="assets/arrow-down.svg" alt=""></div>
                <div class=" dropdown-content">
                    <a onclick="view.setScreenBtn('addProduct')" href="">Add Product</a>
                </div>
            </li>
            <li class=" dropdown">
                <div class="dropbtn" onclick="view.setScreenBtn('categoryPage')">Category<img
                        class="left__iconDown" src="assets/arrow-down.svg" alt=""></div>
                <div class=" dropdown-content">
                    <a onclick="view.setScreenBtn('addCategory')" href="">Add Category</a>
                </div>
            </li>

            <li class=" dropdown">
                <div class="dropbtn" onclick="view.setScreenBtn('customerPage')">Customer</div>
            </li>
            <li class=" dropdown">
                <div class="dropbtn" onclick="view.setScreenBtn('orderPage')">Order<img class="left__iconDown"
                        src="assets/arrow-down.svg" alt=""></div>
                <div class=" dropdown-content">
                    <a onclick="view.setScreenBtn('reportPage')" href="">View Report</a>
                </div>
            </li>
            <li class=" dropdown">
                <div class="dropbtn" onclick="view.signOutButton()">LogOut</div>
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
    <div class="right">
        <div class="right__content">
            <div class="right__title">Dashboard</div>
            
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
                <div class="right__title">Edit Product Information <span id="closeBtn" class="close">&times;</span></div>
                    
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

component.productPage = `
    <div class="right">
        <div class="right__content">
            <div class="right__title">View product</div>
            <div class="right__table">
                <div class="topnav">
                    <form>
                        <input id="inputSearch" type="text" placeholder="Search...">
                        <button type="button"><i class="fas fa-search"></i></button>
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
                        <!-- JS CODE-->
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
    <!-- div Update, div này bị ẩn -->
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="right__title">Edit Product Information <span id="closeBtn" class="close">&times;</span></div>
                <div class="right">
                    <div class="right__content">
                        <div id="mainInformation" class="information">
                            <!-- JS CODE-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

component.addProduct = `
<div class="right">
    <div class="right__content">
        <div class="right__title">Add Product</div>
        <div class="right__formWrapper">
            <form id="addProductForm" action="" method="POST">
                <div class="add-pro">
                    <div class="row-pro">
                        <label for=""><b>Name:</b> </label>
                        <span><input type="text" class="form-control" name="name" placeholder="Name"
                                style="width: 390px; " required></span>
                        <div class="error" id="name-error"></div>

                    </div>
                    <div class="row-pro">
                        <div class="col-pro ma-55">
                            <label for="Color"><b>Category:</b></label>
                            <div> <select id="optionCategory" name="category" class="form-control" style="width:180px">
                                    <option value="">-- Choose a category -- </option>
                                    <!-- JS CODE  -->
                                </select></div>
                            <div class="error" id="category-error"></div>
                        </div>
                        <div class="col-pro ma-30">
                            <label for="Color"><b>Corlor:</b></label>
                            <div>
                                <select id="optionColor" class="form-control" name="color" style="width:180px">
                                    <option value="">-- Choose a color --</option>
                                    <option value="white">White</option>
                                    <option value="red">Red</option>
                                    <option value="grey">Grey</option>
                                    <option value="blue">BLue</option>
                                    <option value="gold">Gold</option>

                                </select>
                            </div>
                            <div class="error" id="color-error"></div>
                        </div>
                    </div>
                    <div class="row-pro">
                        <div class="col-pro ma-55">
                            <label for=""><b>Quantity:</b> </label>
                            <div>
                                <input name="quantity" placeholder="Quantity"
                                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    type="number" maxlength="6" style="width:180px;" class="form-control" required>
                            </div>
                            <div class="error" id="quantity-error"></div>
                        </div>
                        <div class="col-pro ma-30">
                            <label for=""><b>Price:</b> </label>
                            <div>
                                <input name="price"
                                    oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
                                    type="number" maxlength="10" style="width:180px;" class="form-control" required>
                            </div>
                            <div class="error" id="price-error"></div>
                        </div>
                    </div>
                    <div class="row-pro">
                        <label for=""><b>Description:</b> </label>
                        <div class="text-des">
                            <textarea id="editor1" name="des" cols="30" rows="10" class="form-control"></textarea>
                        </div>
                    </div>
                    <div class="row-pro">
                        <div class="col-pro ">
                            <label for=""><b>Font Camera:</b> </label>
                            <span><input type="text" class="form-control" name="fontCam" placeholder=""
                                    style="width: 280px;" required></span>
                            <div class="error" id="fontCam-error"></div>
                        </div>
                    </div>
                    <div class="row-pro">
                        <div class="col-pro ">
                            <label for=""><b>Rear Camera:</b> </label>
                            <span><input name="rearCam" type="text" class="form-control" placeholder=""
                                    style="width: 280px;" required></span>
                            <div class="error" id="rearCam-error"></div>
                        </div>
                    </div>
                    <div class="row-pro" style="margin-top:25px;">
                        <div class="col-pro ma-115">
                            <label for=""><b>Ram:</b> </label>
                            <div>
                                <span><input name="ram" type="text" class="form-control" placeholder=""
                                        style="width: 143px;" required></span>
                            </div>
                            <div class="error" id="ram-error"></div>
                        </div>
                        <div class="col-pro ma-30">
                            <label for=""><b>Capacity:</b> </label>
                            <div>
                                <span><input name="capacity" type="text" class="form-control" placeholder=""
                                        style="width: 143px;" required></span>
                            </div>
                            <div class="error" id="capacity-error"></div>
                        </div>
                        <div class="col-pro ma-30">
                            <label for=""><b>Battery:</b> </label>
                            <div>
                                <span><input name="battery" type="text" class="form-control" placeholder=""
                                        style="width: 143px;" required></span>
                            </div>
                            <div class="error" id="battery-error"></div>
                        </div>
                    </div>
                    <div class="row-pro" style="margin-top:25px;">
                        <div class="col-pro ma-115">
                            <label for=""><b>Operation System:</b> </label>
                            <div>
                                <input name="os" type="text" class="form-control" style="width:230px" name="os"
                                    placeholder="" required>
                            </div>
                            <div class="error" id="os-error"></div>
                        </div>
                        <div class="col-pro ma-30">
                            <label for="""><b>Display:</b> </label>
                        <div>
                            <input name="display" type="text" class="form-control" placeholder=""
                                style="width: 230px;" required>
                        </div>
                        <div class="error" id="display-error"></div>
                    </div>
                </div>
                <div class="row-pro">
                    <div class="col-pro">
                        <label for=""><b>Chip:</b> </label>
                        <span><input name="chip" type="text" class="form-control"
                                style="width: 490px; margin-left:63px;" required></span>
                    </div>
                    <div class="error" id="chip-error"></div>
                </div>
                <div class="row-pro">
                    <div class="col-pro">
                        <label for=""><b>In The Box:</b> </label>
                        <textarea name="inTheBox" style="height:80px;" cols="30" rows="10"
                            class="form-control"></textarea>
                    </div>
                    <div class="error" id="inTheBox-error"></div>

                </div>
                <div class="row-pro">
                    <div class="col-pro">
                        <label for=""><b>Release Date:</b> </label>
                        <span><input name="releaseDate" type="date"  class="form-control" placeholder=""
                                style="width: 150px;" required></span>
                        
                    </div>
                    <div class="error" id="releaseDate-error"></div>
                </div>
                <div class="row-pro" style="margin-top: 30px;">
                    <div class="col-pro ">
                        <label for=""><b>Image:</b> </label>
                        <span><input id="photo" type="file" name="img" type="file"
                                style="width:490px; margin-left: 55px;" multiple required></span>
                    </div>
                    <div class="error" id="img-error"></div>
                </div>
                <div>
                    <div class="col-pro">
                        <label for=""><b>Video:</b> </label>
                        <span><input name="video" style="width:490px; margin-left: 57px;" class="form-control"
                                type="text" placeholder="" required></span>
                    </div>
                    <div class="error" id="video-error"></div>
                </div>
        </div>
        </form>
        <button id="addBtn" class="btn" style="margin-top:30px;">Add</button>
    </div>
</div>
`;


component.orderPage = `
    <div class="right">
        <div class="right__content">
            <div class="right__title">View Order</div>
            <div class="right__table">
                <div class="topnav">
                    <form>
                        <input id="inputSearch" type="text" placeholder="Search...">
                        <button type="button"><i class="fas fa-search"></i></button>
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
    <!-- div Update, div này bị bẩn -->
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="right__title">Edit Product Information <span id="closeBtn" class="close">&times;</span></div>
                
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
`;
component.customerPage = `
    <div class="right">
        <div class="right__content">
            <div class="right__title">View Customer</div>
            <div class="right__table">
                <div class="topnav">
                    <form>
                        <input id="inputSearch" type="text" placeholder="Search...">
                        <button type="button"><i class="fas fa-search"></i></button>
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
    <!-- div Update, div này bị bẩn -->
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="right__title">Edit Product Information <span id="closeBtn" class="close">&times;</span></div>
                
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

`;

component.categoryPage = `
    <div class="right">
        <div class="right__content">
            <div class="right__title">View Category</div>
            <div class="right__table">
                <div class="topnav">
                    <form>
                        <input id="inputSearch" type="text" placeholder="Search...">
                        <button type="button"><i class="fas fa-search"></i></button>
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
    <!-- div Update, div này bị ẩn -->
    <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
            <div class="right__title">Edit Product Information <span id="closeBtn" class="close">&times;</span></div>
                
                <div class="right">
                    <div class="right__content">
                        <div id="mainInformation" class="information">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;

component.addCategory = `
    <div class="right">
        <div class="right__content">
            <div class="right__title">Add Category</div>
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
    </div>`;

component.reportPage = `
    <div class="right">
        <div class="right__content">
            <div class="right__title">Sales Summary</div>
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

            <div class="right_side">
                <div id="rangeMonths" class="rangeMonths">
                    <h1>DATE RANGE</h1>
                    <h3 for="strDate"> START DATE</h3>
                    <input id="strDate" type="date" value="2020-11-01">
                    <h3 for="endDate"> END DATE</h3>
                    <input id="endDate" type="date" value="2020-11-30">
                    <button id="viewDateRangeBtn" class="btn" onclick="view.getDateRange()">View</button>
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
            </div>
            
            
            <div class="right__table" style="height:600px;width:900px;">
                <canvas id="myChart" width="450" height="380"></canvas>
            </div>
        </div>
    </div>`;

component.viewAdminPage = `
    <div class="right">
        <div class="right__content">
            <div class="right__title">View Admin Account</div>
            <div class="right__table">
                <div class="topnav">
                    <form>
                        <input id="inputSearch" type="text" placeholder="Search...">
                        <button type="button"><i class="fas fa-search"></i></button>
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
                                <th>Banned</th>
                                <th>View</th>
                                <th>Edit</th>
                                <th>Delete</th> 
                            </tr>
                        </thead>
                        <tbody id="adminAccount_tbody">
                            
                        </tbody>
                    </table>
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
    </div>`;



