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

const plans = document.querySelectorAll(".plans");

plans.forEach(plan => {
  plan.addEventListener("click", () => {
    plans.forEach(item => {
      item.classList.remove("plan-active");
    });
    plan.classList.add("plan-active");
  });
});

const toggle = document.querySelector(".switch input");
const planValues = document.querySelectorAll(".plan-value");
const bonusMessages = document.querySelectorAll(".free-bonus-msg");
const labels = document.querySelectorAll(".label");

toggle.addEventListener("change", () => {

  const yearly = toggle.checked;

  labels.forEach(label => {
    label.classList.remove("active");
  });

  if(yearly) {
    labels[1].classList.add("active");
  } else {
    labels[0].classList.add("active");
  }

  planValues.forEach(value => {

    const month = value.dataset.month;
    const year = value.dataset.year;

    if(yearly) {
      value.textContent = `$${year}/yr`;
    } else {
      value.textContent = `$${month}/mo`;
    }
  });

  bonusMessages.forEach(msg => {

    if(yearly) {
      msg.textContent = "2 months free";
    } else {
      msg.textContent = "";
    }
  });
});