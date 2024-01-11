// form
const usernameText = document.querySelector("#username-text");
const passwordText = document.querySelector("#password-text");
const windowsIcon = document.querySelector("#windows");
const about = document.querySelector("#about");
const loginBtn = document.querySelector(".loginBtn");
const aboutPage = document.querySelector(".about-page");
const loadingScreen = document.querySelector(".loading-screen");
const lockedMode = document.querySelector(".locked-mode");
const unlockedMode = document.querySelector(".unlocked-mode");
const loginPage = document.querySelector(".login-page");
const tabIcons = document.querySelectorAll(".tabs svg");

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

tabIcons.forEach(function (svg) {
  svg.addEventListener("click", () => {
    let target = `.${svg.dataset.target}`;
    let page = document.querySelector(target);
    page.classList.remove("hide");
    page.style.opacity = 0;
    fadeIn(page, 400);
    svg.querySelector("path").style.fill = "#2795ef";

    let xBtn = page.querySelector(".top-bar svg");
    xBtn.addEventListener("click", () => {
      page.classList.add("hide");
      svg.querySelector("path").style.fill = "#E5F4FF";
    });

    windowsIcon.addEventListener("click", () => {
      page.classList.add("hide");
      svg.querySelector("path").style.fill = "#E5F4FF";
    });

    console.log(xBtn);
  });
});

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
