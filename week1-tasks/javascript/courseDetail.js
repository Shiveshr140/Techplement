const starRating = document.querySelector(".rating");
let rating = ``;
for (let i = 0; i < 5; i++) {
  rating += `
       <svg class="star" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
      </svg>
    `;
  starRating.innerHTML = rating;
}

//********************************* modal for card 2

// create function to show/close modal window common for cards those have links
function createModal(triggerElement, contentHtml) {
  // Create modal elements
  const overlay = document.createElement("div");
  const modal = document.createElement("div");

  // Add necessary classes to the modal and overlay
  overlay.classList.add("overlay", "hidden");
  modal.classList.add("modal-card", "hidden");

  // Append modal and overlay to the body
  document.body.appendChild(overlay);
  document.body.appendChild(modal);

  // Set modal content dynamically
  modal.innerHTML = contentHtml;

  // Show the modal
  triggerElement.addEventListener("click", () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  });

  // Close modal on overlay click or close button click
  overlay.addEventListener("click", () => {
    overlay.classList.add("hidden");
    modal.classList.add("hidden");
  });

  const closeButton = modal.querySelector(".close-modal-card");
  if (closeButton) {
    closeButton.addEventListener("click", () => {
      overlay.classList.add("hidden");
      modal.classList.add("hidden");
    });
  }

  // Close modal on the "Ok" button click
  const okButton = modal.querySelector(".ok");
  if (okButton) {
    okButton.addEventListener("click", () => {
      overlay.classList.add("hidden");
      modal.classList.add("hidden");
    });
  }
}

// Modal content for Enroll
const enrollContent = `
  <div class="modal-card-header">
    <h3>
      <span>Sign up</span>
      <button class="close-modal-card">&times;</button>
    </h3>
    <p>Learn on your own time from top universities and businesses.</p>
  </div>
  <form class="enroll-form">
    <div class="field">
      <label class="label" for="name">Full name</label>
      <input class="input name" id="name" placeholder="Enter your full name" required />
    </div>
    <div class="field">
      <label class="label" for="email" type="email">Email</label>
      <input class="input email" id="email" placeholder="name@gmail.com" required />
    </div>
    <div class="field" type="password">
      <label class="label" for="password">Password</label>
      <input class="input password" id="password" placeholder="Create password" required />
    </div>
    <button class="form-button">Join for free</button>
  </form>
`;

// Enroll Button
const enrollButton = document.querySelector(".enroll-button");
createModal(enrollButton, enrollContent);

// Modal content for Learn More (Card 1)
const learnMoreContent1 = `
  <div class="learn-more-card1">
    <button class="close-modal-card learn-modal-close-button">&times;</button>
    <h2>This course is part of multiple programs</h2>
    <div class="learn-body">
      <h3>The Ultimate React Course</h3>
      <h3>React Testing Library with Jest / Vitest</h3>
      <h3>NodeJs: Advanced Concept</h3>
      <h3>Web Development: Zero to Advanced</h3>
      <h3>Web Design from Zero to Advance</h3>
      <button class="ok"> Ok </button>
    </div>
  </div>
`;

// Learn More Card 1
const learnMore1 = document.querySelector(".card1-learn");
createModal(learnMore1, learnMoreContent1);

// Modal content for Learn More (Card 2)
const learnMoreContent2 = `
  <div class="learn-more-card4">
    <button class="close-modal-card learn-modal-close-button">&times;</button>
    <img class="badge-logo" src="./style/assets/logo-badge.jpg" />
    <h1> Learn from our very best </h1>
    <p> Our Learnify Business collection is a curation of top-rated courses for individuals and 
    organizations to upskill and reach their goals. 
    </p>
    <h3> Always fresh </h3>
    <p> We add to the collection based on market trends and feedback from learners and their organizations. </p>
    <h3> Better every day </h3>
    <p> We continuously refine the collection to help learners and businesses stay one step ahead. </p>
    <button class="ok"> Ok </button>
  </div>
`;

// Learn More Card 2
const learnMore2 = document.querySelector(".card4-learn");
createModal(learnMore2, learnMoreContent2);
