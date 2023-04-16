const throttle = require('lodash.throttle');

const emailInput = document.querySelector('input[name="email"]');
const messageInput = document.querySelector('textarea[name="message"]');

const feedbackKey = 'feedback-form-state';

function saveFormState() {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(feedbackKey, JSON.stringify(state));
}

function restoreFormState() {
  const state = JSON.parse(localStorage.getItem(feedbackKey));
  if (state) {
    emailInput.value = state.email;
    messageInput.value = state.message;
  }
}

function clearFormState() {
  localStorage.removeItem(feedbackKey);
  emailInput.value = '';
  messageInput.value = '';
}

const throttledSaveFormState = throttle(saveFormState, 500);

document.addEventListener('input', throttledSaveFormState);
document.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log({ email: emailInput.value, message: messageInput.value });
  clearFormState();
});

document.addEventListener('DOMContentLoaded', restoreFormState);