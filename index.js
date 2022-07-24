document.addEventListener("DOMContentLoaded", function () {
  console.log("Готов!");
  const outerWrapper = document.getElementsByClassName("outer-wrapper")[0];
  const header = document.getElementsByClassName("header")[0];

  let isHeaderExpanded = true;
  outerWrapper.addEventListener("scroll", (event) => {
    console.log(event.target.scrollTop);
    if (event.target.scrollTop > 50 && isHeaderExpanded) {
      isHeaderExpanded = false;
      header.classList.toggle("expanded-header", false);
    }
    if (event.target.scrollTop < 50 && !isHeaderExpanded) {
      isHeaderExpanded = true;
      header.classList.toggle("expanded-header", true);
    }
  });
});
