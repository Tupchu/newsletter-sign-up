const form = document.querySelector("#email-form");
const emailInput = document.querySelector("#email");

const card = document.querySelector("#newsletter-card");
const confirmation = document.querySelector("#newsletter-confirmation");
const confirmationEmail = document.querySelector("#confirmation-email");

const emailBtn = document.querySelector("#email-btn");
const dismissBtn = document.querySelector("#dismiss-btn");
const errorMsg = document.querySelector("#error-msg");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  handleEmailSubmission();
});

dismissBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // show newsletter card
  card.classList.toggle("hidden");
  confirmation.classList.toggle("hidden");
  errorMsg.classList.add("hidden");
  emailInput.classList.remove("invalid-input");

  form.reset();
});

function handleEmailSubmission() {
  const formData = new FormData(form);
  const email = formData.get("email");

  if (validateEmail(email)) {
    // show confirmation element
    card.classList.toggle("hidden");
    confirmation.classList.toggle("hidden");
    confirmationEmail.innerHTML = email;
  } else {
    // show error message
    errorMsg.classList.remove("hidden");
    emailInput.classList.add("invalid-input");
  }
}

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
