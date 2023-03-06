const menuEl = document.querySelector("#close-btn")
const cartDropDownEl = document.querySelector(".cart-dropDown")
const productsEl = document.querySelector(".container")
const products = [
  {
      id: 0,
      name: "Fall Limited Edition Sneakers",
      price: 125,
      instock: 100,
      imgSrc: "./images/image-product-1.jpg",
      thumnailImgSrc: "./images/image-product-1-thumbnail.jpg",
    }
]

function renderProducts() {
  products.forEach((product) => {
    productsEl.innerHTML += `
    <div class= "product-images">
          <div class="large-img slideshow-container">
            <div class="big-img slides fade">
              <img src="${products.imgSrc}" alt="product picture 1" />
            </div>
            <div class="big-img not-active slides fade">
              <img src="/images/image-product-2.jpg" alt="product picture 2" />
            </div>
            <div class="big-img not-active slides fade">
              <img src="/images/image-product-3.jpg" alt="product picture 3" />
            </div>
            <div class="big-img not-active slides fade">
              <img src="/images/image-product-4.jpg" alt="product picture 4" />
            </div>

            <a class="prev" onclick="moveSlide(-1)"><svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></a>
            <a class="next" onclick="moveSlide(1)"><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg></a>
          </div>
          <div class="thumbnail-container">
            <span class="thumbnailImage" onclick="currentSlide(1)">
              <img
                src="${products.thumnailImgSrc}"
                alt="product picture 1"
              />
            </span>

            <span class="not-yet-active thumbnailImage" onclick="currentSlide(2)">
              <img
                src="/images/image-product-2-thumbnail.jpg"
                alt="product picture 2"
              />
            </span>

            <span class="not-yet-active thumbnailImage" onclick="currentSlide(3)">
              <img
                src="/images/image-product-3-thumbnail.jpg"
                alt="product picture 3"
              />
            </span>

            <span class="not-yet-active thumbnailImage" onclick="currentSlide(4)">
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
            <h2>${products.name}</h2>

            <p>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>

            <div class="price">
              <div class="new-price-container align-items-center">
                <h3><strong>$${products.price}</strong></h3>
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
                    <use fill="#FF7E1B" fill-rule="nonzero" xlink:href="#a" />
                  </svg>
                </button>
                <p id="num-of-products">0</p>
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
                    <use fill="#FF7E1B " fill-rule="nonzero" xlink:href="#b" />
                  </svg>
                </button>
              </div>

              <div class="add-to-cart" onclick="addToCart()">
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
    `
  })
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
      cartDropDownEl.style.display = "none"
    }
  }

  let slideIndex = 1;
  showSlides(slideIndex);

  // Next/previous controls
  function moveSlide(n) {
    showSlides(slideIndex += n);
  }

  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slides");
    let thumbnails = document.getElementsByClassName("thumbnailImage");

    if (n > slides.length) {
      slideIndex = 1
    } else if (n < 1) {
      slideIndex = slides.length
    }

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < thumbnails.length; i++) {
      thumbnails[i].className = thumbnails[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
  thumbnails[slideIndex-1].className += " active";
  }

  let ProductNum = document.getElementById("num-of-products")
  let productNumber = 0

  function reduce() {
    productNumber -= 1

    if (productNumber <= 0) {
      productNumber = 0
    }

    ProductNum.textContent = productNumber
  }

  function increase() {
    productNumber += 1

    if (productNumber >= 15) {
      productNumber = 15
    }

    ProductNum.textContent = productNumber
  }

  // add to cart
function addToCart(id) {
  console.log()
}
  