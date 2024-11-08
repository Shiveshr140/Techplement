// show model window for each courses

// first handle rataing, i.e fill or empty based on class
function starRating(rate) {
  return `<svg class=${rate} xmlns="http://www.w3.org/2000/svg" width="16" height="16"  class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>`;
}

// Create a modal container element in HTML if not already present
const modalContainer = document.createElement("div");
const overlay = document.createElement("div");
modalContainer.classList.add("content", "hidden");
overlay.classList.add("overlay", "hidden");
document.body.appendChild(modalContainer);
document.body.appendChild(overlay);

// Function to add event listeners to each course element
function attachCourseClickListeners() {
  document.querySelectorAll(".main-div").forEach((mainDiv) => {
    mainDiv.addEventListener("click", () => {
      const courseTitle = mainDiv.querySelector("h3").textContent;
      const courseDescription = mainDiv.querySelector(
        ".poster-description"
      ).textContent;
      const coursePrice = mainDiv.getAttribute("data-price");
      const numRating = mainDiv.getAttribute("data-rating");
      const courseVideo = mainDiv.querySelector("input").value;

      // Display the modal content
      modalContainer.innerHTML = `
        <iframe
          class="course-video"
          src=${courseVideo}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
        <div class="title-rating"> 
          <p class="course-title"><strong>${courseTitle}</strong></p>
          <ul class="rating-list"> </ul>
        </div>
        <p class="course-description">${courseDescription}</p>
        <div class="course-close-modal">
          <button class="learn-course"><a href="./courseDetail.html">Learn more</a></button>
          <button class="course-price-button">Price: ${coursePrice} only </button>
          <button class="close-modal">&times;</button>
        </div>
      `;

      const ratingList = document.querySelector(".rating-list");
      let ratingInnerHTML = ``;
      for (let i = 1; i <= 5; i++) {
        if (i <= numRating) {
          ratingInnerHTML += `<li>${starRating("star")}</li>`;
        } else {
          ratingInnerHTML += `<li>${starRating("starEmpty")}</li>`;
        }
      }
      ratingList.innerHTML = ratingInnerHTML;

      modalContainer.classList.remove("hidden");
      overlay.classList.remove("hidden");

      // Close button functionality
      document.querySelector(".close-modal").addEventListener("click", () => {
        modalContainer.classList.add("hidden");
        overlay.classList.add("hidden");
        document.querySelector("iframe").src = "";
      });
    });
  });
}

// Initial display of all courses and attach click listeners
displayCourses(courses);
attachCourseClickListeners();

// Event listener for the search input, filter/search logic
searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase();
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(query)
  );

  displayCourses(filteredCourses);
  attachCourseClickListeners(); // Reattach click listeners for the updated list
});
