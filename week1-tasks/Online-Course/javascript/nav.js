// I want to use this nav bar accross the multiple files, so make it a function
function createNavContent() {
  const header = document.querySelector(".header");
  header.innerHTML = `
    <div class="header-info">
        <p>
          Personal Plan| Accelerate your career with access to 11,000+ of our
          top courses. <a href="courseDetail.html">Learn more</a>
        </p>
        <button class="header-info-button">&times;</button>
    </div>
    <nav>
      <div class="nav-logo-cat-input">
        <h1><a class="logo-link" href="index.html"> Learnify </a></h1>
        <div class="dropdown">
            <select>
                <option value="" selected disabled>Choose a Category</option>
                <option value="development">Development</option>
                <option value="business">Business</option>
                <option value="finance">Finance & Accounting</option>
                <option value="it-software">IT & Software</option>
                <option value="office-productivity">Office Productivity</option>
                <option value="design">Design</option>
            </select>
        </div>
        <input class="search" placeholder="Start searching...." />
      </div>
          
          <div class="nav-wrapper">
           <div class="cart">
            <img class="cart-logo" src="./style/assets/logo-cart.png" alt="cart logo" />
            <ul class="cart-list">
              <li>
                <img src="./style/assets/angular js.jpg" alt="image" />
                <p>Web design</p>
              </li>
              <li>
                <img src="./style/assets/react-testing.jpg" alt="image" />
                <p>React Testing</p>
              </li>
              <li>
                <img src="./style/assets/logo_node.jpg" alt="image" />
                <p>Node JS developer</p>
              </li>
              <li>
                <img src="./style/assets/logo-js.jpg" alt="image" />
                <p>Master JavaScript</p>
              </li>
            </ul>
          </div>
          <div class="wishlist">
            <img
            class="wishlist-logo"
            src="./style/assets/logo-heart.jpg"
            alt="wislist-logo"
          />
           <div class="hidden wishlist-display">
            <p> Your wishlist is empty </p>
            <h3> explore courses </h3>
           </div>
          </div>
        <div class="notification">
          <img
            class="notification-logo"
            src="./style/assets/logo-notification.jpg"
            alt="wislist-logo"
          />
          <div class="hidden notification-display">
            <div> 
              <h3> Notifications  </h3>
              <p> settings  </p>
            </div>
             <p> no notification </p>
          </div>
        </div>
      <div class="profile">
        <img
            class="profile-logo"
            src="./style/assets/logo.jpg"
            alt="profile logo"
        />
        <div class="hidden profile-display">
          <div class="profile-display-header"> 
            <img src="./style/assets/profile-logo.jpg" />
            <div> 
              <h3> Shivesh Rajput </h3>
              <p> shiveshr1995@gmail.com </p>
            </div>
          </div>
          <div class="profile-display-body1">
            <p> My Learning </p>
            <p> Cart </p>
            <p> Wishlist </p>
            <p> Notification </p>
          </div>
          <div class="profile-display-body1 profile-display-body2">
            <p> Messages </p>
            <p> General Settings </p>
            <p> Account Settings </p>
          </div>
        </div>
      </div>
      </div>
    </nav>
    `;
}

createNavContent();

//*************** close the header info, focus input as soon application loaded & display/hide cart

const headerButton = document.querySelector(".header-info-button");
const headerInfo = document.querySelector(".header-info");

const searchInput = document.querySelector("nav input");

const cart = document.querySelector(".cart");
const cartDisplay = document.querySelector(".cart ul");

// Focus the search input as soon as the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  searchInput.focus();
});

// remove header info
headerButton.addEventListener("click", () => {
  headerInfo.classList.add("header-info-hidden");
});

// show/hide cart and background blur
document.addEventListener("click", (e) => {
  if (cart.contains(e.target)) {
    cartDisplay.classList.toggle("cart-list");
    cartDisplay.classList.toggle("cart-display");
  }

  if (!cart.contains(e.target)) {
    cartDisplay.classList.add("cart-list");
    cartDisplay.classList.remove("cart-display");
  }
});

// show/hide wishlist
const wishlist = document.querySelector(".wishlist");
const wishlistDiv = document.querySelector(".wishlist div");

document.addEventListener("click", (e) => {
  console.log(e.target);
  if (wishlist.contains(e.target)) {
    wishlistDiv.classList.toggle("hidden");
    wishlistDiv.classList.toggle("cart-display");
  }
  if (!wishlist.contains(e.target)) {
    wishlistDiv.classList.add("hidden");
    wishlistDiv.classList.remove("cart-display");
  }
});

// show hide notification
const notification = document.querySelector(".notification");
const notificationDiv = document.querySelector(".notification div");

document.addEventListener("click", (e) => {
  console.log(e.target);
  if (notification.contains(e.target)) {
    notificationDiv.classList.toggle("hidden");
    notificationDiv.classList.toggle("cart-display");
  }
  if (!notification.contains(e.target)) {
    notificationDiv.classList.add("hidden");
    notificationDiv.classList.remove("cart-display");
  }
});

// show hide profile
const profile = document.querySelector(".profile");
const profileDiv = document.querySelector(".profile div");

document.addEventListener("click", (e) => {
  console.log(e.target);
  if (profile.contains(e.target)) {
    profileDiv.classList.toggle("hidden");
    profileDiv.classList.toggle("cart-display");
  }
  if (!profile.contains(e.target)) {
    profileDiv.classList.add("hidden");
    profileDiv.classList.remove("cart-display");
  }
});
