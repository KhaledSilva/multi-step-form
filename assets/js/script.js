const btn = document.querySelectorAll(".button");
const contents = document.querySelectorAll(".content");

btn.forEach(button => {
  button.addEventListener("click", () => {

    const id = button.dataset.id;

    contents.forEach(content => {
      content.classList.add("hidden");
    });

    document.getElementById(id).classList.remove("hidden");
  });
});

const form = document.getElementById("c1");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const inputs = form.querySelectorAll(".form-box");

  inputs.forEach(input => {

    const titleErro = input.previousElementSibling;
    const erro = titleErro.querySelector(".erro");

    if(input.value.trim() === "") {
      input.classList.add("input-error");
      erro.classList.add("show-erro");
    } else {
      input.classList.remove("input-error");
      erro.classList.remove("show-erro");
    }
  });
});