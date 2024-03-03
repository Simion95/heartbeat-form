let userCard = document.querySelector(".user-card");

let emailInput = document.querySelector(".email-input");
let userEmail = document.querySelector(".user-email");
let alertMessage = document.querySelector(".alerta-mesaj-email");

let firstNameInput = document.querySelector(".first-name-input");
let userFirstName = document.querySelector(".user-first-name");

let lastNameInput = document.querySelector(".last-name-input");
let userLastName = document.querySelector(".user-last-name");

let locationInput = document.querySelector(".location-input");
let userLocation = document.querySelector(".user-location");

let phoneInput = document.querySelector(".phone-input");
let userPhone = document.querySelector(".user-phone");

let saveButton = document.querySelector(".save-button");


let lengthEmail = () => {
    if (emailInput.value.length < 6 && emailInput.value.length !== 0) {
        emailInput.style.cssText = "border: solid; border-color: red";
        alertMessage.style.display = "block";
        
    }
    else {
        emailInput.style.cssText = "";
        alertMessage.style.display = "";
    }
};

    let updateDisplay = () => {
        if (
            firstNameInput.value !== "" ||
            lastNameInput.value !== "" ||
            emailInput.value !== "" ||
            locationInput.value !== "" ||
            phoneInput.value !== ""
            ) {
                userCard.style.display = "block";
        } else {
            userCard.style.display = "none";
        }
    };
    
    let updateUserCard = () => {
    
        userFirstName.innerText = (firstNameInput.value || "First Name");
        userLastName.innerText = (lastNameInput.value || "Last Name");
        userEmail.innerText = (emailInput.value || "Email");
        userLocation.innerText = (locationInput.value || "Location");
        userPhone.innerText = (phoneInput.value || "Phone");
      };

      let card = () => {
        updateDisplay();
        updateUserCard();
      };

      let saveStuck = () => {
        emailInput.disabled = true;
        firstNameInput.disabled = true;
        lastNameInput.disabled = true;
        locationInput.disabled = true;
        phoneInput.disabled = true;
        saveButton.disabled = true;
        saveButton.style.setProperty("background-color", "var(--black)");
        saveButton.style.setProperty("color", "var(--white)");
    };

    firstNameInput.addEventListener('input', card);
    lastNameInput.addEventListener('input', card);
    emailInput.addEventListener('input', card);
    locationInput.addEventListener('input', card);
    phoneInput.addEventListener('input', card);
    emailInput.addEventListener("input", lengthEmail);
    saveButton.addEventListener('click', saveStuck);