// Adding products dynamically to the product container
const products = [
    { name: 'Air Jordan 1 Mild', price: 93.97, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/cdea9b12-e7f2-452c-9649-1aa6ba2370b1/air-jordan-1-mid-mens-shoes-X5pM09.png' },
    { name: 'Nike Court Legacy', price: 70.00, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/46c88fa2-8d40-46ad-8c0c-c40e05776738/court-legacy-next-nature-womens-shoes-8r07x0.png' },
    { name: 'Nike Dunks Low', price: 115, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c09cf8bc-4d6c-4564-86d6-cc172deab92e/dunk-low-womens-shoes-ppQwKZ.png' },
    { name: 'Nike Dunks Low', price: 115, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d14fc386-1067-4a72-961e-9f8134680703/dunk-low-womens-shoes-4W2Z5P.png' },
    { name: 'Air Jordan 1 Low', price: 115, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a9067ffd-077d-4879-a55d-7b08ea667f56/air-jordan-1-low-womens-shoes-rJrHLw.png' },
    { name: 'Nike Gamma Force', price: 80.97, image: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1d02ae7d-9191-49b3-96a4-c1336cc698fd/gamma-force-shoes-4TR9Xf.png' }
];

//Populate products and add event  listener to button


const productContainer = document.querySelector('.product-container')
products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product');

    //Set inner html for the  product div with product information

    productDiv.innerHTML = `<img id="img" src="${product.image}"
alt="${product.name}">
<h2>${product.name}</h2>
<p>$${product.price.toFixed(2)}</p>`;

    const addButton = document.createElement('button');
    addButton.textContent = 'Add to Cart'
    addButton.addEventListener('click', () => addToCart(product.name, product.image, product.price));

    productDiv.appendChild(addButton);
    productContainer.appendChild(productDiv);

});

//Add Event Listener for the cart button

document.getElementById('cart-button').addEventListener('click', function () {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.style.display = 'block'
});


//Add Event Listener for the close button

document.getElementById('close').addEventListener('click', function () {
    const cartContainer = document.querySelector('.cart-container');
    cartContainer.style.display = 'none';
});

// Function to add product to cart 
function addToCart(productName, productImage, productPrice) {
    //create a new  list item for cart
    const cartItem = document.createElement('li');

    //create an image element for  product
    const productImg = document.createElement('img')
    productImg.src = productImage;
    productImg.alt = productName;
    productImg.style.width = '60px'

//create a div element to hold the  product name and  price

const productInfo = document.createElement('div');
productInfo.textContent = `${productName}  $${productPrice.toFixed(2)}`;

//Create a remove button for each item in the cart 

const removeButton = document.createElement('img');
removeButton.src = '/close-line.svg';
removeButton.style.width = '25px';
removeButton.addEventListener('click', function(){
    cartItem.remove();
});

cartItem.appendChild(productImg);
cartItem.appendChild(productInfo);
cartItem.appendChild(removeButton);


document.querySelector('.cart-items').appendChild(cartItem);

const totalPriceElement = document.getElementById('total-price');

let totalPrice = parseFloat(totalPriceElement.textContent);
totalPrice += productPrice;
totalPriceElement.textContent = totalPrice.toFixed(2);

//show the  cart container  when is  add to cart 
document.querySelector('.cart-container').style.display = 'block';
}









