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


// email

function checkEmailValidity() {

  const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
  // on loading page, check of its empty or valid
  window.addEventListener("load", () => {
  const emailValid = inputEmail.value.length === 0 || emailRegExp.test(inputEmail.value);
  inputEmail.className = emailValid ? "valid" : "invalid";
  });
  // check validity on input
  inputEmail.addEventListener("input", () => {
    const emailValid = inputEmail.value.length === 0 || emailRegExp.test(inputEmail.value);
  
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
  //checking the form on submit
// check if thats how you add empty attrs
  form.setAttribute("novalidate", true);
  form.addEventListener("submit", (event) => {
  event.preventDefault();
  
    //email
    const emailValid = inputEmail.value.length === 0 || emailRegExp.test(inputEmail.value);
    if (!emailValid) {
      spanEmail.className = "invalid";
      spanEmail.textContent = "Please enter a valid email address."
      inputEmail.className = "error-active"
    } else {
      inputEmail.className = "error-inactive";
            inputEmail.className = "valid";
      spanEmail.textContent = "";
    }

  // country - required
  // choose an option: poland, switzerland, france, netherlands
  
  const countryValid = inputCountry.value.length !== 0;
  if (!countryValid) {
    spanCountry.className = "invalid";
      spanEmail.textContent = "This field is required.";
    inputCountry.className = "error-active";
  } else {
    spanCountry.className = "valid";
      spanEmail.textContent = "";
    inputCountry.className = "error-inactive";
  }
  
  // zip code - not required, pattern
  // pl 00-000
  // ch (ch-)0000
  // fr (f-)00000
  // nl (nl-)0000aa - 2 letters except SA, sd or ss
  const zipPatterns = {
    pl: [
      "^\\d{2}-\\d{3}$",
      ""
      ],
    ch: [
      "^(CH-)?\\d{4}$",
      ""
      ],
    fr: [
      "^(F-)?\\d{5}$",
      ""
      ],
    nl: [
      "^(NL-)?\\d{4}\\s*([A-RT-Z][A-Z]|S[BCE-RT-Z])$",
      ""
      ];
      
  const zipConstr = new RegExp(zipPatterns.[inputCountry.value][0], "");    
  
  if (zipConstr.test(inputZip.value)) {
    inputZip.setCustomValidity("");
  } else {
    inputZip.setCustomValidity(zipPatterns.[inputCountry.value][0]);
    

  }  
  
//  test test
});

  
}