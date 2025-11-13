const form = document.querySelector("form");

const firstNameOutput = document.querySelector("#first_name_output");
const lastNameOutput = document.querySelector("#last_name_output");
const emailOutput = document.querySelector("#email_output");
const passwordOutput = document.querySelector("#password_output");
const langOutput = document.querySelector("#lang_output");
const termsOutput = document.querySelector("#terms_output");
const kommentarOutput = document.querySelector("#kommentar_output");

function cancelPopup(event) {
  event.preventDefault();
  form.querySelector(":user-invalid").focus();
}

function handleSubmit(event) {
  event.preventDefault();

  // 1. Saml værdierne fra formularen
  const formData = new FormData(form);
  const firstName = formData.get("first_name");
  const lastName = formData.get("age");
  const email = formData.get("email");
  const password = formData.get("password");
  const lang = formData.getAll("language").join(", ");
  const terms = formData.get("accept_terms");
  const kommentar = formData.get("kommentar");

  // 2. Vis værdierne i de rigtige output-felter
  firstNameOutput.textContent = firstName;
  lastNameOutput.textContent = lastName;
  emailOutput.textContent = email;
  passwordOutput.textContent = password;
  langOutput.textContent = lang;
  termsOutput.textContent = terms;
  kommentarOutput.textContent = kommentar;

  form.reset();
}

form.addEventListener("invalid", cancelPopup, true);
form.addEventListener("submit", handleSubmit);
