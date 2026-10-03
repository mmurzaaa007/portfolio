const burger = document.querySelector("#burger");
const nav = document.querySelector("#nav");
const form = document.querySelector("#requestForm");
const message = document.querySelector("#formMessage");

burger.addEventListener("click", () => {
  nav.classList.toggle("is-open");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = form.name.value.trim();
  const course = form.course.value;

  if (!name || !course) {
    message.textContent = "Пожалуйста, заполните все поля.";
    return;
  }

  message.textContent = `${name}, заявка на курс «${course}» успешно оформлена!`;
  form.reset();
});
