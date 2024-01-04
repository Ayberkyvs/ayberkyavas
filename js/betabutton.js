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
    title: "Bilgilendirme",
    text: "Web sitesi geliştirme sürecinde, olası hatalar ve kusurlar ortaya çıkabilir. Lütfen bize bildirerek katkıda bulununuz.",
    icon: "question",
    backdrop: `
    rgba(1,255,221,0.1)
    left top
    no-repeat
  `,
  });
}
