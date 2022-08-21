document.addEventListener("DOMContentLoaded", function () {
  console.log("Готов!");
  const outerWrapper = document.getElementsByClassName("outer-wrapper")[0];
  const header = document.getElementsByClassName("header")[0];

  let isHeaderExpanded = true;
  let counter = 0;
  outerWrapper.addEventListener("scroll", (event) => {
    // console.log(event.target.scrollTop);
    if (event.target.scrollTop > 50 && isHeaderExpanded) {
      isHeaderExpanded = false;
      counter++;
      console.log(counter);
      header.classList.toggle("expanded-header", false);
    }
    if (event.target.scrollTop < 50 && !isHeaderExpanded) {
      isHeaderExpanded = true;
      counter++;
      console.log(counter);
      header.classList.toggle("expanded-header", true);
    }
    if (counter === 8) {
      alert("Please, stop it");
      counter = 0;
    }
  });
});
