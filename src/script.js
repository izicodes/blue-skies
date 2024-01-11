// form
const usernameText = document.querySelector("#username-text");
const passwordText = document.querySelector("#password-text");
const about = document.querySelector("#about");
const loginBtn = document.querySelector(".loginBtn");
const aboutPage = document.querySelector(".about-page");
const loadingScreen = document.querySelector(".loading-screen");
const lockedMode = document.querySelector(".locked-mode");
const unlockedMode = document.querySelector(".unlocked-mode");
const loginPage = document.querySelector(".login-page");

loginBtn.addEventListener("click", () => {
  if (
    usernameText.value === "stoneoceancoder" &&
    passwordText.value === "pass123"
  ) {
    usernameText.style.borderColor = "rgba(255, 255, 255, 0.6)";
    passwordText.style.borderColor = "rgba(255, 255, 255, 0.6)";
    loginPage.classList.add("hide");
    loadingScreen.classList.remove("hide");

    // Show unlockedMode after 4 seconds (during loadingScreen)
    setTimeout(() => {
      loadingScreen.style.display = "none";
      unlockedMode.classList.remove("hide");
      lockedMode.classList.add("hide");
    }, 4000);
  } else {
    if (usernameText.value !== "stoneoceancoder") {
      usernameText.style.borderColor = "#fa7777";
    } else {
      usernameText.style.borderColor = "rgba(255, 255, 255, 0.6)";
    }

    if (passwordText.value !== "pass123") {
      passwordText.style.borderColor = "#fa7777";
    } else {
      passwordText.style.borderColor = "rgba(255, 255, 255, 0.6)";
    }
  }
});

about.addEventListener(('click'), () => {
    aboutPage.classList.remove('hide');
    about.querySelector('path').style.fill = '#2795ef';
})

function fadeIn(element, duration) {
  let opacity = 0;
  const intervalTime = 50; // Time interval for the fade effect (in milliseconds)

  const fadeInInterval = setInterval(() => {
    opacity += intervalTime / duration;

    if (opacity >= 1) {
      clearInterval(fadeInInterval);
      opacity = 1; // Ensure opacity reaches exactly 1 at the end
    }

    element.style.opacity = opacity;
  }, intervalTime);
}

// Usage example:
// const myDiv = document.querySelector(".login-page"); // Replace 'myDiv' with the actual ID of your div
// fadeIn(myDiv, 2000);