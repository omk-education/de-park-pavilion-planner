"use strict";
const filter = document.querySelector("#filter");
const items = document.querySelectorAll(".card__item");

function applyFilter() {
  const value = filter.value;

  items.forEach((item) => {
    const status = item.dataset.status;

    if (value === "all" || status === value) {
      item.style.display = "block"; 
    } else {
      item.style.display = "none";
    }
  });
}

// Событие при смене фильтра
filter.addEventListener("change", applyFilter);
