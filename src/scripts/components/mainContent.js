import "styles/mainContent.css";

export default class MainContent {
  constructor(parentElement, content) {
    this.parent = parentElement;

    this.mainContentContainer = document.createElement("div");
    this.mainContentContainer.id = "main-content-container";

    this.contentDisplay = document.createElement("h2");
    this.contentDisplay.textContent = content;

    this.mainContentContainer.appendChild(this.contentDisplay);

    this.form = document.createElement("form");
    this.form.id = "main-model-form";

    this.emailInput = document.createElement("input");
    this.emailInput.type = "email";
    this.emailInput.placeholder = "Email...";
    this.emailInput.required = true;

    this.countryInput = document.createElement("input");
    this.countryInput.type = "text";
    this.countryInput.placeholder = "Country...";
    this.countryInput.required = true;

    this.zipCodeInput = document.createElement("input");
    this.zipCodeInput.type = "text";
    this.zipCodeInput.placeholder = "Zip Code...";
    this.zipCodeInput.required = true;
    this.zipCodeInput.pattern = "^\\d{5}$";

    this.passwordInput = document.createElement("input");
    this.passwordInput.type = "password";
    this.passwordInput.placeholder = "Password...";
    this.passwordInput.required = true;

    this.passwordConfirmInput = document.createElement("input");
    this.passwordConfirmInput.type = "password";
    this.passwordConfirmInput.placeholder = "Confirm Password...";
    this.passwordConfirmInput.required = true;

    this.formSubmitButton = document.createElement("button");
    this.formSubmitButton.type = "submit";
    this.formSubmitButton.textContent = "Submit";

    this.form.append(
      this.emailInput,
      this.countryInput,
      this.zipCodeInput,
      this.passwordInput,
      this.passwordConfirmInput,
      this.formSubmitButton
    );
    this.mainContentContainer.appendChild(this.form);

    this.addFormValidation();

    this.parent.appendChild(this.mainContentContainer);
  }

  addFormValidation() {
    // this.emailInput.addEventListener("input", () => {
    //   if (this.emailInput.validity.typeMismatch) {
    //     this.emailInput.setCustomValidity("Expecting username@domain.tld");
    //     this.showError();
    //   } else {
    //     this.emailInput.setCustomValidity("");
    //   }
    // });
    this.passwordConfirmInput.addEventListener("focusout", () => {
      if (this.passwordConfirmInput.value !== this.passwordInput.value) {
        this.passwordConfirmInput.setCustomValidity("Passwords must match");
        this.showError(this.passwordConfirmInput);
      } else {
        this.passwordConfirmInput.setCustomValidity("");
      }
    });
  }

  // eslint-disable-next-line class-methods-use-this
  showError(invalidInput) {
    if (!invalidInput.validity.valid) {
      invalidInput.reportValidity();
    }
  }

  displayContent(content) {
    this.contentDisplay.textContent = content;
  }

  bindUpdateContent(handler) {
    this.formSubmitButton.addEventListener("click", (event) => {
      if (this.form.checkValidity()) {
        event.preventDefault();
        handler("Account Created! :)");
      } else {
        handler("Account Creation Error :(");
      }
    });
  }
}
