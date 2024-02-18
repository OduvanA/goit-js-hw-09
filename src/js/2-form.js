const form = document.querySelector(".feedback-form");

const isStorageData = localStorage.getItem("feedback-form-state");
if (isStorageData){
    const data = JSON.parse(isStorageData);
    form.email.value = data.email;
    form.message.value = data.message;
}

form.addEventListener('input', (event) => {
  const email = event.currentTarget.email.value.trim();
  const message = event.currentTarget.message.value.trim();
  const storageData = {
    email,
    message,
  };
  localStorage.setItem("feedback-form-state", JSON.stringify(storageData));
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = event.currentTarget.email.value.trim();
  const message = event.currentTarget.message.value.trim();
  if (email && message) {
    console.log({
      email,
      message,
    })
    form.reset();
    localStorage.removeItem("feedback-form-state")
  }
  else {
    alert('All form fields must be filled in');
  }
});
