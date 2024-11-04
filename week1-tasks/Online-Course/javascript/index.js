// I want to use this nav bar accross the multiple files
function createNavContent() {
  const nav = document.querySelector("nav");
  nav.innerHTML = `
     <div class="nav-logo-cat">
          <h1>Learnify</h1>
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
        </div>
        <input placeholder="Start searching...." />
        <div class="cart">
          <h3>
            <span>Cart</span>
            <img src="./style/assets/logo-cart.png" alt="cart logo" />
          </h3>
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
        <img
          class="wishlist-logo"
          src="./style/assets/logo-heart.jpg"
          alt="wislist-logo"
        />
        <img
          class="notification-logo"
          src="./style/assets/logo-notification.jpg"
          alt="wislist-logo"
        />
        <img
          class="profile-logo"
          src="./style/assets/logo.jpg"
          alt="profile logo"
        />
      
  `;
}

createNavContent();

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

// show/hide cart
document.addEventListener("click", (e) => {
  console.log(cart.contains(e.target));

  if (cart.contains(e.target)) {
    cartDisplay.classList.toggle("cart-list");
    cartDisplay.classList.toggle("cart-display");
  }

  if (!cart.contains(e.target)) {
    cartDisplay.classList.add("cart-list");
    cartDisplay.classList.remove("cart-display");
  }
});

//*************************************************  generate courses

const courseDetail = [
  {
    title: "The Ultimate React Course",
    description:
      "Master modern React from beginner to advanced! Next.js, Context API, React Query, Redux, Tailwind, advanced patterns",
    image: "reactjs.jpg",
    rating: 4,
    videoSrc: "https://www.youtube.com/embed/gmp0istg5xo?si=xcvjOctZ3cP0K84d",
  },
  {
    title: "JavaScript Mastery",
    description:
      "Master JavaScript in 5 Hours: Flow Control, Functions, DOM, Asynchronous, OOP, and Practical Projects.",
    image: "javascript.jpg",
    rating: 5,
    videoSrc: "https://www.youtube.com/embed/iRL0FqPzsnk?si=nmVTXIzNGygvrr5k",
  },
  {
    title: "NodeJs: Advance Concept",
    description:
      "Get advanced with Node.Js! Learn caching with Redis, speed up through clustering, and add image upload with S3 and Node!",
    image: "javascript.jpg",
    rating: 3,
    videoSrc: "https://www.youtube.com/embed/SfWPqr04srM?si=ks0OGYRWix9Wldta",
  },
  {
    title: "Web Design from Zero to Advance",
    description:
      "Become a UX/UI Designer! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
    image: "html_css.jpg",
    rating: 2,
    videoSrc: "https://www.youtube.com/embed/g7xkVEWrX8E?si=lLRq2HNRvZSj5kjd",
  },
  {
    title: "Data Structure & Algorthim",
    description:
      "DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.",
    image: "dsa.jpg",
    rating: 5,
    videoSrc: "https://www.youtube.com/embed/1SBAdKZhrUg?si=K6BWcQn0l0MQU-ll",
  },
  {
    title: "MongoDB - The Complete Developer's Guide",
    description:
      "Master MongoDB Development for Web &amp; Mobile Apps. CRUD Operations, Indexes, Aggregation Framework - All about MongoDB!",
    image: "mongodb.jpg",
    rating: 5,
    videoSrc: "https://www.youtube.com/embed/-bt_y4Loofg?si=g4mNmk_sEU0Dp53f",
  },
  {
    title: "React Testing Library with Jest / Vitest",
    description:
      "Learn best practices for testing your apps with Jest / Vitest and React Testing Library. All code written via TDD!",
    image: "react-testing.jpg",
    rating: 5,
    videoSrc: "https://www.youtube.com/embed/n_sS-GAgZ98?si=kiEWXIFok5ey1L7e",
  },
  {
    title: "The Complete Python Bootcamp",
    description:
      "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games.",
    image: "python.jpg",
    rating: 4,
    videoSrc: "https://www.youtube.com/embed/15cMbvhOj7Q?si=5bJSHcx4b0JNv_6J",
  },
  {
    title: "REST APIs with Flask and Python",
    description:
      "Build professional REST APIs with Python, Flask, Docker, Flask-Smorest, and Flask-SQLAlchemy",
    image: "python-flask.jpg",
    rating: 4,
    videoSrc: "https://www.youtube.com/embed/AgVqsmz-ZW4?si=SG-0rLtj7slAwsPh",
  },
];

// const courseImg = ["fullstack.jpg", "", "nextjs.jpg"];

const generateCourses = (num) => {
  const courses = [];
  for (let i = 0; i < num; i++) {
    const randomNum = Math.floor(Math.random() * courseDetail.length);
    courses.push({
      id: i + 1,
      title: courseDetail[randomNum].title,
      description: courseDetail[randomNum].description,
      price: faker.commerce.price(),
      //   category: faker.commerce.department(),
      image: `../style/assets/${courseDetail[randomNum].image}`,
      instructor: faker.name.findName(),
      rating: Math.floor(Math.random() * 5),
      src: courseDetail[randomNum].videoSrc,
    });
  }
  return courses;
};

// console.log("hi", generateCourses(10));
const courses = generateCourses(9);

const contentWrapper = document.querySelector(".content-wrapper");

function returnMain() {
  let courseHTML = "";
  for (let course of courses) {
    courseHTML += `
      <div class="main-div"> 
        <div class="poster">
          <img class="poster-image" src=${course.image} alt="course image" />
          <div class="poster-info">
            <h3>${course.title}</h3>
            <p class="poster-instructor"> -by ${course.instructor}</p>
            <p class="poster-description">${course.description}</p>
          </div>
        </div>
        <input type="hidden" value= ${course.src} />
      </div>
    `;
  }
  contentWrapper.innerHTML = courseHTML;
}

returnMain();
