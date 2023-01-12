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
