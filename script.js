let form = document.querySelector('form');
let container = document.querySelector(".container");
let alertMessage = document.querySelector(".container-alert"); // ✅ تم التعديل هنا
let dissmissMessage = document.querySelector(".alert-message button");
let alertMessageEname = document.querySelector(".alert-message p span");

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let email = document.querySelector("input[type='email']");
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let isValid = pattern.test(email.value.trim());

  let inputBox = email.closest('.input-box');

  if (isValid) {
    inputBox.classList.remove('error');
    alertMessageEname.innerHTML = email.value;
    alert('Subscribed successfully!');

    container.classList.add("hidden");
    alertMessage.classList.remove("hidden");

    form.reset();
  } else {
    inputBox.classList.add('error');
  }
});

dissmissMessage.addEventListener("click", () => {
  container.classList.remove("hidden");
  alertMessage.classList.add("hidden");
});
