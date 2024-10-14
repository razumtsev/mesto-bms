const showError = (options, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(options.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(options.errorClass);
}

const hideError = (options, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(options.inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(options.errorClass);
}

const isValid = (options, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showError(options, formElement, inputElement, inputElement.validationMessage);
  } else {
    hideError(options, formElement, inputElement);
  }
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    // console.log(!inputElement.validity.valid);
    return !inputElement.validity.valid;
  });
}

const toggleButtonState = (options, inputList, buttonElement) => {
  const submitButtonInactive = options.inactiveButtonClass;
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute('disabled', true);
    buttonElement.classList.add(submitButtonInactive);
  } else {
    buttonElement.removeAttribute('disabled', true);
    buttonElement.classList.remove(submitButtonInactive);
  }
}

const setEventListeners = (options, formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(options.inputSelector));
  const buttonElement = formElement.querySelector(options.submitButtonSelector);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      isValid(options, formElement, inputElement);
      toggleButtonState(options, inputList, buttonElement);
    });
  });
  formElement.addEventListener('reset', () => {
    setTimeout(() => {
      toggleButtonState(options, inputList, buttonElement);
    }, 0)
  });
  toggleButtonState(options, inputList, buttonElement);
}

export const enableValidation = (options) => {
  const formsList = document.querySelectorAll(options.formSelector);
  formsList.forEach((formElement) => {
    setEventListeners(options, formElement);
  });
}
