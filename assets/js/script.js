const contents = document.querySelectorAll(".content");
const sidebarButtons = document.querySelectorAll(".button");

let currentPage = 0;

function showPage(index) {

  contents.forEach(content => {
    content.classList.add("hidden");
  });

  contents[index].classList.remove("hidden");
  currentPage = index;
}

sidebarButtons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showPage(index);
  });
});

const nextButtons = document.querySelectorAll(".btn-next");

nextButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault();
    if(currentPage === 0) {
      const form = document.getElementById("c1");
      const inputs = form.querySelectorAll(".form-box");
      let formValid = true;
      inputs.forEach(input => {

        const titleErro = input.previousElementSibling;
        const erro = titleErro.querySelector(".erro");

        if(input.value.trim() === "") {
          input.classList.add("input-error");
          erro.classList.add("show-erro");
          formValid = false;
        } else {

          input.classList.remove("input-error");
          erro.classList.remove("show-erro");
        }
      });
      if(!formValid) return;
    }

    showPage(currentPage + 1);
  });
});

const backButtons = document.querySelectorAll(".btn-back");

backButtons.forEach(button => {
  button.addEventListener("click", function(event) {
    event.preventDefault();
    showPage(currentPage - 1);
  });
});