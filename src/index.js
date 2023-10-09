import css from "./style.css";

// prepare a form

const body = document.querySelector("body");
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const inputCountry = document.createElement("input");
const inputZip = document.createElement("input");
const inputPass = document.createElement("input");
const inputPassConf = document.createElement("input");
const button = document.createElement("button");
const labelEmail = document.createElement("label");
const labelCountry = document.createElement("label");
const labelZip = document.createElement("label");
const labelPass = document.createElement("label");
const labelPassConf = document.createElement("label");
const spanEmail = document.createElement("span");
const spanCountry = document.createElement("span");
const spanZip = document.createElement("span");
const spanPass = document.createElement("span");
const spanPassConf = document.createElement("span");

labelEmail.setAttribute("for", "email");
inputEmail.setAttribute("id", "email");
inputEmail.setAttribute("name", "email");
inputEmail.setAttribute("type", "email");
labelCountry.setAttribute("for", "country");
inputCountry.setAttribute("id", "country");
inputCountry.setAttribute("name", "country");
labelZip.setAttribute("for", "zipcode");
inputZip.setAttribute("id", "zipcode");
inputZip.setAttribute("name", "zipcode");
labelPass.setAttribute("for", "password");
inputPass.setAttribute("id", "password");
inputPass.setAttribute("name", "password");
labelPassConf.setAttribute("for", "password-confirm");
inputPassConf.setAttribute("id", "password-confirm");
inputPassConf.setAttribute("name", "password-confirm");

labelEmail.textContent = "Email address:";
labelCountry.textContent = "Country:";
labelZip.textContent = "Zip code";
labelPass.textContent = "Password:";
labelPassConf.textContent = "Confirm password:";
button.textContent = "Submit";

form.appendChild(labelEmail);
form.appendChild(inputEmail);
form.appendChild(spanEmail);
form.appendChild(labelCountry);
form.appendChild(inputCountry);
form.appendChild(spanCountry);
form.appendChild(labelZip);
form.appendChild(inputZip);
form.appendChild(spanZip);
form.appendChild(labelPass);
form.appendChild(inputPass);
form.appendChild(spanPass);
form.appendChild(labelPassConf);
form.appendChild(inputPassConf);
form.appendChild(spanPassConf);
form.appendChild(button);
body.appendChild(form);

// validity

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

inputEmail.addEventListener("input", (event) => {
  if (inputEmail.validity.typeMismatch) {
    inputEmail.setCustomValidity("Enter a valid email address!");
  } else {
    inputEmail.setCustomValidity("");
  }
});
