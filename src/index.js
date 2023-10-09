/* eslint-disable no-lonely-if */
/* eslint-disable prefer-destructuring */
// eslint-disable-next-line no-unused-vars
import css from "./style.css";

// prepare a form

const body = document.querySelector("body");
const form = document.createElement("form");
const inputEmail = document.createElement("input");
const selectCountry = document.createElement("select");
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
const optionChoose = document.createElement("option");
const optionPL = document.createElement("option");
const optionCH = document.createElement("option");
const optionFR = document.createElement("option");
const optionNL = document.createElement("option");

labelEmail.setAttribute("for", "email");
inputEmail.setAttribute("id", "email");
inputEmail.setAttribute("name", "email");
inputEmail.setAttribute("type", "email");
labelCountry.setAttribute("for", "country");
selectCountry.setAttribute("id", "country");
selectCountry.setAttribute("name", "country");
labelZip.setAttribute("for", "zipcode");
inputZip.setAttribute("id", "zipcode");
inputZip.setAttribute("name", "zipcode");
labelPass.setAttribute("for", "password");
inputPass.setAttribute("id", "password");
inputPass.setAttribute("name", "password");
labelPassConf.setAttribute("for", "password-confirm");
inputPassConf.setAttribute("id", "password-confirm");
inputPassConf.setAttribute("name", "password-confirm");
optionChoose.setAttribute("value", "choose");
optionPL.setAttribute("value", "pl");
optionCH.setAttribute("value", "ch");
optionFR.setAttribute("value", "fr");
optionNL.setAttribute("value", "nl");

labelEmail.textContent = "Email address:";
labelCountry.textContent = "Country:";
labelZip.textContent = "Zip code";
labelPass.textContent = "Password:";
labelPassConf.textContent = "Confirm password:";
button.textContent = "Submit";
optionChoose.textContent = "-- Choose a country --";
optionPL.textContent = "Poland";
optionCH.textContent = "Switzerland";
optionFR.textContent = "France";
optionNL.textContent = "Netherlands";

selectCountry.appendChild(optionChoose);
selectCountry.appendChild(optionPL);
selectCountry.appendChild(optionCH);
selectCountry.appendChild(optionFR);
selectCountry.appendChild(optionNL);

form.appendChild(labelEmail);
form.appendChild(inputEmail);
form.appendChild(spanEmail);
form.appendChild(labelCountry);
form.appendChild(selectCountry);
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

// email

function checkEmailValidity() {
  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  // on loading page, check of its empty or valid
  window.addEventListener("load", () => {
    const emailValid =
      inputEmail.value.length === 0 || emailRegExp.test(inputEmail.value);
    inputEmail.className = emailValid ? "valid" : "invalid";
  });
  // check validity on input
  inputEmail.addEventListener("input", () => {
    const emailValid =
      inputEmail.value.length === 0 || emailRegExp.test(inputEmail.value);

    if (emailValid) {
      inputEmail.className = "valid";
      spanEmail.textContent = "";
      inputEmail.className = "error-inactive";
    } else {
      inputEmail.className = "invalid";
    }
  });
}

function checkFormValidity() {
  // checking the form on submit check if thats how you add empty attrs

  const emailRegExp =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  form.setAttribute("novalidate", true);
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // email
    const emailValid =
      inputEmail.value.length === 0 || emailRegExp.test(inputEmail.value);
    if (!emailValid) {
      spanEmail.className = "invalid";
      spanEmail.textContent = "Please enter a valid email address.";
      inputEmail.className = "error-active";
    } else {
      inputEmail.className = "error-inactive";
      inputEmail.className = "valid";
      spanEmail.textContent = "";
    }

    // country - required
    // choose an option: poland, switzerland, france, netherlands

    if (selectCountry.value === "choose") {
      spanCountry.className = "invalid";
      spanCountry.textContent = "This field is required.";
      selectCountry.className = "error-active";
    } else {
      spanCountry.className = "valid";
      spanCountry.textContent = "";
      selectCountry.className = "error-inactive";
    }

    // zip code - required, pattern

    const zipValid = inputZip.value.length;

    const zipPatterns = {
      choose: ["", ""],
      pl: [
        "^\\d{2}-\\d{3}$",
        "Poland's zipcodes must follow this pattern: 2 digits, followed by a hyphen (-), followed by 3 digits, e.g. 12-345.",
      ],
      ch: [
        "^(CH-)?\\d{4}$",
        "Switzerland's zipcodes must follow this pattern: optional 'CH-' and 4 digits, e.g. CH-1234 or 1234.",
      ],
      fr: [
        "^(F-)?\\d{5}$",
        "France's zipcodes must follow this pattern: optional 'FR-', followed by 5 digits, e.g. FR-12345 or 12345.",
      ],
      nl: [
        "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
        "Netherland's zipcodes must follow this pattern: 4 digits followed by 2 letters except SA, SD and SS.",
      ],
    };
    // eslint-disable-next-line no-unused-vars

    const countryCurrent = selectCountry.value;

    const zipConstr = new RegExp(zipPatterns[countryCurrent][0], "");

    if (!zipValid) {
      spanZip.textContent = "This field is required";
      spanZip.className = "invalid";
      inputZip.className = "error-active";
    } else {
      if (zipConstr.test(inputZip.value)) {
        spanZip.textContent = "";
        spanZip.className = "valid";
        inputZip.className = "error-inactive";
      } else {
        spanZip.textContent = zipPatterns[countryCurrent][1];
        spanZip.className = "invalid";
        inputZip.className = "error-active";
      }
    }
  });
}

checkEmailValidity();
checkFormValidity();
