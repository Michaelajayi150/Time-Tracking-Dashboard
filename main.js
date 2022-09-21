let schedule = "weekly";
const allBtn = document.querySelectorAll("#trigger");

data.forEach((item, index) => {
  $("#main").append(`<section class="row w-100 pt-5 mx-auto background ${
    `bg-` + index
  }">
    <div class="col items py-4 px-3">
      <div class="d-flex align-items-center justify-content-between mb-1">
        <h1>${item.title}</h1>
        <img src="./images/icon-ellipsis.svg" alt="ellipsis" />
      </div>
      <div class="d-flex flex-md-column align-items-center align-items-md-start justify-content-between">
        <h2 class="time mb-0">
          ${item.timeframes[schedule].current}${
    item.timeframes[schedule].current <= 1 ? "hr" : "hrs"
  }
        </h2>
        <small class="later">
          ${
            schedule === "daily"
              ? "Previous"
              : schedule === "weekly"
              ? "Last Week"
              : "Last Month"
          } - ${item.timeframes[schedule].previous}hrs
        </small>
      </div>
    </div>
  </section>`);
});

function updateChild() {
  let allTime = document.querySelectorAll(".time");
  let allPrev = document.querySelectorAll(".later");

  allTime.forEach((time, index) => {
    let item = data[index];

    time.innerHTML = `${item.timeframes[schedule].current}${
      item.timeframes[schedule].current <= 1 ? "hr" : "hrs"
    }`;
  });

  allPrev.forEach((prev, index) => {
    let item = data[index];

    prev.innerHTML = `
    ${
      schedule === "daily"
        ? "Previous"
        : schedule === "weekly"
        ? "Last Week"
        : "Last Month"
    } - ${item.timeframes[schedule].previous}hrs`;
  });
}

allBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    $(".triggered").removeClass("triggered");
    btn.classList.add("triggered");
    schedule = btn.innerHTML.toLowerCase();
    updateChild();
  });
});
