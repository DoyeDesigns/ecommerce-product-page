const menuEl = document.querySelector("#close-btn");
const cartDropDownEl = document.querySelector(".cart-dropDown");
const productsEl = document.querySelector(".container");
const cartItemsEl = document.querySelector(".cart-items");
const hiddenImgEl = document.querySelector(".hidden-images-container");

function renderProducts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
        <div class= "product-images">
          <div class="large-img slideshow-container">
            <div class="big-img slides" onclick ="openHiddenImage()">
              <img src="${product.imgSrc}" alt="product picture 1" />
            </div>
            <div class="big-img slides" onclick ="openHiddenImage()">
              <img src="/images/image-product-2.jpg" alt="product picture 2" />
            </div>
            <div class="big-img slides" onclick ="openHiddenImage()">
              <img src="/images/image-product-3.jpg" alt="product picture 3" />
            </div>
            <div class="big-img slides" onclick ="openHiddenImage()">
              <img src="/images/image-product-4.jpg" alt="product picture 4" />
            </div>

            <a class="prev-Hidden" onclick="moveSlide(-1)"><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></a>
            <a class="next-Hidden" onclick="moveSlide(1)"><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></a>
          </div>
          <div class="thumbnail-container">
            <span class="thumbnailImage" onclick="currentSlide(1)">
              <img
                src="${product.thumnailImgSrc}"
                alt="product picture 1"
              />
            </span>

            <span class="thumbnailImage" onclick="currentSlide(2)">
              <img
                src="/images/image-product-2-thumbnail.jpg"
                alt="product picture 2"
              />
            </span>

            <span class="thumbnailImage" onclick="currentSlide(3)">
              <img
                src="/images/image-product-3-thumbnail.jpg"
                alt="product picture 3"
              />
            </span>

            <span class="thumbnailImage" onclick="currentSlide(4)">
              <img
                src="/images/image-product-4-thumbnail.jpg"
                alt="product picture 4"
              />
            </span>
          </div>
        </div>
        <div class="product-desc">
          <div class="product-info">
            <h1><strong>sneaker Company</strong></h1>
            <h2>${product.name}</h2>

            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>

            <div class="price">
              <div class="new-price-container align-items-center">
                <h3><strong>$${product.price}</strong></h3>
                <div class="discount">
                  <p><strong>50%</strong></p>
                </div>
              </div>
            <div class="old-price">
              <h4><del>$250.00</del></h4>
            </div>
            </div>

            <div class="add-to-cart-section">
              <div class="amount">
                <button id="reduce" onclick="reduce()">
                  <svg
                    width="12"
                    height="4"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <path
                        d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z"
                        id="a"
                      />
                    </defs>
                    <use fill="" fill-rule="evenodd" xlink:href="#a" />
                  </svg>
                </button>
                <p id="num-of-products">1</p>
                <button id="increase" onclick="increase()">
                  <svg
                    width="12"
                    height="12"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                  >
                    <defs>
                      <path
                        d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z"
                        id="b"
                      />
                    </defs>
                    <use fill="" fill-rule="evenodd" xlink:href="#b" />
                  </svg>
                </button>
              </div>

              <div class="add-to-cart" onclick="addToCart(${product.id})">
                <button>
                  <svg
                    width="22"
                    height="20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
                      fill="#fff"
                      fill-rule="nonzero"
                    />
                  </svg>
                  <strong>Add to cart</strong> 
                </button>
              </div>
            </div>
          </div>
        </div>
    `;
  });
}

renderProducts();

function openNav() {
  document.getElementById("side-nav").style.display = "block";
  // document.getElementsByClassName("close-icon").style.display = "block";
}

function closeNav() {
  document.getElementById("side-nav").style.display = "none";
  // document.getElementsByClassName("close-icon").style.display = "none";
}

function dropDown() {
  let cartDropDownEl = document.querySelector(".cart-dropDown");
  if (cartDropDownEl.style.display === "none") {
    cartDropDownEl.style.display = "block";
  } else {
    cartDropDownEl.style.display = "none";
  }
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function moveSlide(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let thumbnails = document.getElementsByClassName("thumbnailImage");

  if (n > slides.length) {
    slideIndex = 1;
  } else if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  for (i = 0; i < thumbnails.length; i++) {
    thumbnails[i].className = thumbnails[i].className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  thumbnails[slideIndex - 1].className += " active";
}

let ProductNum = document.getElementById("num-of-products");
let productNumber = 0;

function reduce() {
  let numberOfUnits = productNumber--;

  if (productNumber < 1) {
    productNumber = 1;
  }

  ProductNum.textContent = productNumber;
}

function increase() {
  numberOfUnits = productNumber++;

  if (productNumber >= 15) {
    productNumber = 15;
  }

  ProductNum.textContent = productNumber;
}

// cart array
let cart = [];

// add to cart
function addToCart(id) {
  const totalCartItemEl = document.querySelector(".total-cart-items");
  // check if product already exists in cart
  if (cart.some((item) => item.id === id)) {
    alert("Product already in cart!");
  } else {
    const item = products.find((product) => product.id === id);

    cart.push({
      ...item,
      numberOfUnits: Number(ProductNum.innerHTML),
    });

    totalCartItemEl.style.display = "block";
  }

  updateCart();
}

// update cart
function updateCart() {
  renderCartItems();
  renderSubtotal();
}

// render cart items
function renderCartItems() {
  cartItemsEl.innerHTML = ""; // clear cart element
  cart.forEach((item) => {
    cartItemsEl.innerHTML += `
      <div class="cart-item">
                <img src="${item.thumnailImgSrc}" alt="" />
                <div class="item-desc-container">
                  <div class="item-desc">
                    <p>${item.name}</p>
                    <span class="prices">
                      $${item.price}.00 x ${item.numberOfUnits} <span class ="total-price"></span>
                    </span>
                    <p ">
                      
                    </p>
                  </div>
                  <button class ="delete-btn" onclick ="removeItemFromCart(id)">
                    <svg
                      width="14"
                      height="16"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                    >
                      <defs>
                        <path
                          d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                          id="a"
                        />
                      </defs>
                      <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
                    </svg>
                  </button>
                </div>
        </div>
        <div class="checkout-btn">
          <button><strong>Checkout</strong></button>
        </div>
      `;
  });
}

function removeItemFromCart(id) {
  cart = cart.filter((item) => item.id !== id);

  updateCart();
}

// calculate and render subtotal
function renderSubtotal() {
  let totalPrice = 0,
    totalItems = 0;
  const totalPriceEl = document.querySelector(".total-price");
  const totalCartItemEl = document.querySelector(".total-cart-items");

  cart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  totalPriceEl.innerHTML = "$" + totalPrice + ".00";
  totalCartItemEl.innerHTML = totalItems;
}

let slidesIndex = 1;
viewSlides(slidesIndex);

// Next/previous controls
function moveSlides(x) {
  viewSlides((slidesIndex += x));
}

// Thumbnail image controls
function currentSlides(x) {
  viewSlides((slidesIndex = x));
}

function viewSlides(x) {
  let i;
  let slide = document.getElementsByClassName("slide");
  let hiddenthumbnails = document.getElementsByClassName(
    "hidden-thumbnailImage"
  );

  if (x > slide.length) {
    slidesIndex = 1;
  } else if (x < 1) {
    slidesIndex = slide.length;
  }

  for (i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  for (i = 0; i < hiddenthumbnails.length; i++) {
    hiddenthumbnails[i].className = hiddenthumbnails[i].className.replace(
      " active",
      ""
    );
  }

  slide[slidesIndex - 1].style.display = "block";
  hiddenthumbnails[slidesIndex - 1].className += " active";
}

function openHiddenImage() {
  hiddenImgEl.style.display = "block";
}

function closeHiddenImg() {
  hiddenImgEl.style.display = "none";
}
