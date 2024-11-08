//*************************************************  generate courses

const courseDetail = [
  {
    title: "The Ultimate React Course",
    instructor: "Mr. Miles Olson",
    description:
      "Master modern React from beginner to advanced! Next.js, Context API, React Query, Redux, Tailwind, advanced patterns",
    image: "reactjs.jpg",
    rating: 4,
    price: "₹3999",
    videoSrc: "https://www.youtube.com/embed/gmp0istg5xo?si=xcvjOctZ3cP0K84d",
  },
  {
    title: "JavaScript Mastery",
    instructor: "Alexandrine Stracke",
    description:
      "Master JavaScript in 5 Hours: Flow Control, Functions, DOM, Asynchronous, OOP, and Practical Projects.",
    image: "javascript.jpg",
    rating: 5,
    price: "₹3500",
    videoSrc: "https://www.youtube.com/embed/iRL0FqPzsnk?si=nmVTXIzNGygvrr5k",
  },
  {
    title: "NodeJs: Advance Concept",
    instructor: "Rafael Wiegand",
    description:
      "Get advanced with Node.Js! Learn caching with Redis, speed up through clustering, and add image upload with S3 and Node!",
    image: "https://www.enprowess.com/images/hire%20Node.svg",
    rating: 3,
    price: "₹1750",
    videoSrc: "https://www.youtube.com/embed/SfWPqr04srM?si=ks0OGYRWix9Wldta",
  },
  {
    title: "Web Design from Zero to Advance",
    instructor: "Miss Eudora Paucek",
    description:
      "Become a UX/UI Designer! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
    image: "html_css.jpg",
    rating: 2,
    price: "₹1999",
    videoSrc: "https://www.youtube.com/embed/g7xkVEWrX8E?si=lLRq2HNRvZSj5kjd",
  },
  {
    title: "Data Structure & Algorthim",
    instructor: "Eric Hilll",
    description:
      "DSA for Cracking the Coding Interview. Animated Examples for Faster Learning and Deeper Understanding.",
    image: "dsa.jpg",
    rating: 5,
    price: "₹560",
    videoSrc: "https://www.youtube.com/embed/1SBAdKZhrUg?si=K6BWcQn0l0MQU-ll",
  },
  {
    title: "MongoDB - The Complete Developer's Guide",
    instructor: "Sigurd Fay",
    description:
      "Master MongoDB Development for Web &amp; Mobile Apps. CRUD Operations, Indexes, Aggregation Framework - All about MongoDB!",
    image: "mongodb.jpg",
    rating: 5,
    price: "₹700",
    videoSrc: "https://www.youtube.com/embed/-bt_y4Loofg?si=g4mNmk_sEU0Dp53f",
  },
  {
    title: "React Testing Library with Jest / Vitest",
    instructor: "Reid Ryan",
    description:
      "Learn best practices for testing your apps with Jest / Vitest and React Testing Library. All code written via TDD!",
    image: "react-testing.jpg",
    rating: 5,
    price: "₹350",
    videoSrc: "https://www.youtube.com/embed/n_sS-GAgZ98?si=kiEWXIFok5ey1L7e",
  },
  {
    title: "The Complete Python Bootcamp",
    instructor: "Cyrus Kilback",
    description:
      "Learn Python like a Professional Start from the basics and go all the way to creating your own applications and games.",
    image: "python.jpg",
    rating: 4,
    price: "₹2000",
    videoSrc: "https://www.youtube.com/embed/15cMbvhOj7Q?si=5bJSHcx4b0JNv_6J",
  },
  {
    title: "REST APIs with Flask and Python",
    instructor: "Vicky Smitham",
    description:
      "Build professional REST APIs with Python, Flask, Docker, Flask-Smorest, and Flask-SQLAlchemy",
    image: "python-flask.jpg",
    rating: 4,
    price: "₹800",
    videoSrc: "https://www.youtube.com/embed/AgVqsmz-ZW4?si=SG-0rLtj7slAwsPh",
  },
];

// Select the search input field and content wrapper
const contentWrapper = document.querySelector(".content-wrapper");

const generateCourses = (num) => {
  const courses = [];
  for (let i = 0; i < num; i++) {
    const course = courseDetail[i];
    courses.push({
      id: i + 1,
      title: course.title,
      description: course.description,
      price: course.price,
      image: course.image.startsWith("https:")
        ? `${course.image}`
        : `./style/assets/${course.image}`,
      instructor: course.instructor,
      rating: course.rating,
      src: course.videoSrc,
    });
  }
  return courses;
};

const courses = generateCourses(9);

// Function to generate course HTML based on a filtered list
function displayCourses(coursesToShow) {
  let courseHTML = "";
  for (let course of coursesToShow) {
    courseHTML += `
      <div class="main-div" data-price=${course.price} data-rating=${course.rating}> 
        <div class="poster">
          <div class="poster-image-price">
            <img class="poster-image" src=${course.image} alt="course image" />
            <p class="course-price">${course.price}</p>
          </div>
          <div class="poster-info">
            <h3>${course.title}</h3>
            <p class="poster-instructor"> -by ${course.instructor}</p>
            <p class="poster-description">${course.description}</p>
          </div>
        </div>
        <input type="hidden" value=${course.src} />
      </div>
    `;
  }
  contentWrapper.innerHTML = courseHTML;
}

// Initial display of all courses
displayCourses(courses);
