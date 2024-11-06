// show model window for each courses

// Create a modal container element in HTML if not already present
const modalContainer = document.createElement("div");
const overlay = document.createElement("div");
modalContainer.classList.add("content", "hidden");
overlay.classList.add("overlay", "hidden");
document.body.appendChild(modalContainer);
document.body.appendChild(overlay);

// Add event listeners to each main-div after they are generated
document.querySelectorAll(".main-div").forEach((mainDiv) => {
  mainDiv.addEventListener("click", () => {
    const courseTitle = mainDiv.querySelector("h3").textContent;
    const courseDescription = mainDiv.querySelector(
      ".poster-description"
    ).textContent;
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
      <p class="course-title"><strong>${courseTitle}</strong></p>
      <p class="course-description">${courseDescription}</p>
      <div class="course-close-modal">
        <button class="learn-course"><a href="./courseDetail.html">Learn More</a></button>
        <button class="close-modal">&times;</button>
      </div>
    `;
    modalContainer.classList.remove("hidden");
    overlay.classList.remove("hidden");
    // contentWrapper.classList.add("blur-background");

    // Add close button functionality
    document.querySelector(".close-modal").addEventListener("click", () => {
      modalContainer.classList.add("hidden");
      contentWrapper.classList.remove("blur-background");
      overlay.classList.add("hidden");
      // clossing the video which you have playing
      document.querySelector("iframe").src = "";
    });
  });
});