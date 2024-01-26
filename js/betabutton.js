const betaButton = document.querySelector(".betaButton");

document.addEventListener("DOMContentLoaded", run);
function run() {
  console.log("calisiyor");
  betaButton.addEventListener("click", showAlert);
  /*setTimeout(function () {
    showAlert();
  }, 5000);*/
}

function showAlert() {
  Swal.fire({
    title: "Information",
    text: "The website will undergo a comprehensive overhaul in the near future, leveraging powerful technologies such as Next.js and Tailwind. This modernization aims to enhance user experience and optimize site performance. The new design is planned to encompass user-friendly interfaces, fast loading times, and customizable features.",
    icon: "question",
    backdrop: `
    rgba(1,255,221,0.1)
    left top
    no-repeat
  `,
  });
}
