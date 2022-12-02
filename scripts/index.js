const semplesForm = document.forms["semplesForm"];

const getData = (event) => {
  const name = semplesForm.name.value;
  const surname = semplesForm.surname.value;
  const email = semplesForm.email.value;
  event.preventDefault();
  console.log(name, surname, email); //данные получаются!!!
  event.target.reset();
};

semplesForm.addEventListener("submit", getData);
