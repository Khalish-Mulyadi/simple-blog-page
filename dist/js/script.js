// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// table of content
const tableOfContent = document.querySelector("#table_of_content");
const tableOfContentButton = document.querySelector("#table_of_content_button");

tableOfContentButton.addEventListener("click", function () {
  //   tableOfContentButton.classList.toggle("hamburger-active");
  tableOfContent.classList.toggle("hidden");
});

// progress bar
function updateProgressBar() {
  const { scrollTop, scrollHeight } = document.documentElement;
  const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
  document.querySelector("#progress-bar").style.setProperty("--progress", scrollPercent);
}

document.addEventListener("scroll", updateProgressBar);
