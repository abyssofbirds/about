document.addEventListener("DOMContentLoaded", function () {
  const outerWrapper = document.getElementsByClassName("outer-wrapper")[0];
  const header = document.getElementsByClassName("header")[0];

  let isHeaderExpanded = true;
  let counter = 0;
  outerWrapper.addEventListener("scroll", (event) => {
    if (event.target.scrollTop > 50 && isHeaderExpanded) {
      isHeaderExpanded = false;
      counter++;
      header.classList.toggle("expanded-header", false);
    }
    if (event.target.scrollTop < 50 && !isHeaderExpanded) {
      isHeaderExpanded = true;
      counter++;

      header.classList.toggle("expanded-header", true);
    }
  });
});

// Get the text field
const button = document.getElementById("copy-email");
button.addEventListener("click", (event) => {
  event.preventDefault();
  event.stopPropagation();
  event.stopImmediatePropagation();
  navigator.clipboard.writeText("deniskind@inbox.ru");
  const emailEl = document.querySelector(".email-title");
  emailEl.textContent = "copied";
  setInterval(() => {
    emailEl.textContent = "email";
  }, 5000);
  
});

// Alert the copied text
