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