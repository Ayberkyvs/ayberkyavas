// Sections
const section1 = document.querySelector(".section1");
const section2 = document.querySelector(".section2");
const section3 = document.querySelector(".section3");
const section4 = document.querySelector(".section4");

// Ses
const audio = document.getElementById("rageAudio");
const volumeButton = document.querySelectorAll(".volume-button");
const volumeIcon = document.querySelectorAll(".volume-button i");

// Visual Effects
const logo = document.querySelector(".info-container a");

//Buttons
const section1Button = document.querySelector(".section1-button");
const section2Button = document.querySelector(".section2-button");
const section3Button = document.querySelector(".section3-button");
const cryButton = document.querySelectorAll(".cry-button");
const tryagain = document.querySelector(".try-again");

// Oyun Alanı
const gameinner = document.querySelector(".game");

document.addEventListener("DOMContentLoaded", run);
var isVolumeOn = true;
var isGameOver = false;

function run() {
  const gameOver = localStorage.getItem("isGameOver");
  if (gameOver) {
    section1Button.classList.add("deactiveSection");
    tryagain.classList.remove("deactiveSection");
    tryagain.addEventListener("click", () => {
      section1.classList.add("deactiveSection");
      section4.classList.remove("deactiveSection");
      volumeButton.forEach((button) => {
        button.classList.add("deactiveSection");
      });
    });
  } else {
    cryButton.forEach((button) => {
      button.addEventListener("click", () => {
        if (button != cryButton[0]) {
          location.reload();
        }
      });
    });
    section1Button.addEventListener("click", () => {
      console.log("tıklandı");
      section1.classList.add("deactiveSection");
      section2.classList.remove("deactiveSection");
    });
    section2Button.addEventListener("click", () => {
      console.log("tıklandı");
      section2.classList.add("deactiveSection");
      section3.classList.remove("deactiveSection");
      gameinner.classList.add("ragegif");
      audio.volume = 0.05;
      audio.play();
      document.title = "Savaş Zamanı";
      logo.style.color = "red";
    });
    section3Button.addEventListener("click", () => {
      gameinner.classList.remove("ragegif");
      section3.classList.add("deactiveSection");
      section4.classList.remove("deactiveSection");
    });
    volumeButton.forEach((button) => {
      button.addEventListener("click", () => {
        isVolumeOn = !isVolumeOn;
        if (isVolumeOn) {
          audio.play();
          volumeIcon.forEach((icon) => {
            icon.classList.remove("icon-volume-mute");
            icon.classList.add("icon-volume-high");
          });
        } else {
          audio.pause();
          volumeIcon.forEach((icon) => {
            icon.classList.remove("icon-volume-high");
            icon.classList.add("icon-volume-mute");
          });
        }
      });
    });
  }
}
// Get to DOM elements for game
const gameContainer = document.querySelector(".gamecontainer"),
  userResult = document.querySelector(".user_result img"),
  cpuResult = document.querySelector(".cpu_result img"),
  result = document.querySelector(".result"),
  optionImages = document.querySelectorAll(".option_image");
userText = document.querySelector(".user_result_text");
cpuText = document.querySelector(".cpu_result_text");

// Loop through each option image element
optionImages.forEach((image, index) => {
  image.addEventListener("click", (e) => {
    image.classList.add("active");

    userResult.src = cpuResult.src = "images/rock.png";
    result.textContent = "Yükleniyor...";

    // Loop through each option image again
    optionImages.forEach((image2, index2) => {
      // If the current index doesn't match the clicked index
      // Remove the "active" class from the other option images
      index !== index2 && image2.classList.remove("active");
    });

    gameContainer.classList.add("start");

    // Set a timeout to delay the result calculation
    let time = setTimeout(() => {
      gameContainer.classList.remove("start");

      // Get the source of the clicked option image
      let imageSrc = e.target.querySelector("img").src;
      // Set the user image to the clicked option image
      userResult.src = imageSrc;

      // Generate a random number between 0 and 2
      let randomNumber = Math.floor(Math.random() * 3);
      // Create an array of CPU image options
      let cpuImages = [
        "images/rock.png",
        "images/paper.png",
        "images/scissors.png",
      ];
      // Set the CPU image to a random option from the array
      cpuResult.src = cpuImages[randomNumber];

      // Assign a letter value to the CPU option (R for rock, P for paper, S for scissors)
      let cpuValue = ["R", "P", "S"][randomNumber];
      // Assign a letter value to the clicked option (based on index)
      let userValue = ["R", "P", "S"][index];

      // Create an object with all possible outcomes
      let outcomes = {
        RR: "Beraberlik",
        RP: "Ayberk",
        RS: "Sen",
        PP: "Beraberlik",
        PR: "Sen",
        PS: "Ayberk",
        SS: "Beraberlik",
        SR: "Ayberk",
        SP: "Sen",
      };

      // Look up the outcome value based on user and CPU options
      let outComeValue = outcomes[userValue + cpuValue];
      if (outComeValue == "Ayberk") {
        deger = cpuText.textContent;
        deger++;
        cpuText.textContent = deger;
      } else if (outComeValue == "Sen") {
        deger = userText.textContent;
        deger++;
        userText.textContent = deger;
      }

      // Display the result
      result.textContent =
        userValue === cpuValue ? "Beraberlik" : `${outComeValue} Kazandı!!`;

      if (cpuText.textContent > 2 || userText.textContent > 2) {
        gameContainer.classList.remove("start");
        if (cpuText.textContent > userText.textContent) {
          result.textContent = "Oyun Bitti! Ben Kazandım, sözünü tut :)";
        } else {
          result.textContent = "Tebrikler sen kazandın... ve beni kaybettin.";
        }
        setTimeout(() => {
          localStorage.setItem("isGameOver", "true");
          location.reload();
        }, 3000);
      }
    }, 2500);
  });
});
