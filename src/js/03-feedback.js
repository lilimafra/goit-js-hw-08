document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.feedback-form');
  const emailInput = form.querySelector('input[name="email"]');
  const messageInput = form.querySelector('textarea[name="message"]');

  form.addEventListener(
    'input',
    _.throttle(function () {
      const formData = {
        email: emailInput.value,
        message: messageInput.value,
      };
      localStorage.setItem('feedback-form-state', JSON.stringify(formData));
    }, 500)
  );

  function fillFormFromLocalStorage() {
    const formData = JSON.parse(localStorage.getItem('feedback-form-state'));
    if (formData) {
      emailInput.value = formData.email;
      messageInput.value = formData.message;
    }
  }

  fillFormFromLocalStorage();

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const formData = {
      email: emailInput.value,
      message: messageInput.value,
    };
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    emailInput.value = '';
    messageInput.value = '';
  });
});
