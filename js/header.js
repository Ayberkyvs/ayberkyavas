const header = document.querySelector(".info-container");
run();

function run() {
  document.addEventListener("scroll", handleScroll);
}
function handleScroll() {
  if (window.scrollY <= 0) {
    header.classList.remove("header-color");
  } else {
    header.classList.add("header-color");
  }
}
