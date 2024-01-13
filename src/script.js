// form
const usernameText = document.querySelector("#username-text");
const passwordText = document.querySelector("#password-text");
const windowsIcon = document.querySelector("#windows");
const about = document.querySelector("#about");
const lockTheScreen = document.querySelector("#lockTheScreen");
const loginBtn = document.querySelector(".loginBtn");
const aboutPage = document.querySelector(".about-page");
const loadingScreen = document.querySelector(".loading-screen");
const lockedMode = document.querySelector(".locked-mode");
const unlockedMode = document.querySelector(".unlocked-mode");
const loginPage = document.querySelector(".login-page");
const date = document.querySelector(".date");
const tabIcons = document.querySelectorAll(".tabs svg");
const pages = document.querySelectorAll(".page");
const navItems = document.querySelectorAll(".nav-item");
const projectsWrapper = document.querySelector(".projects-wrapper");

loginBtn.addEventListener("click", () => {
  if (
    usernameText.value === "stoneoceancoder" &&
    passwordText.value === "pass123"
  ) {
    usernameText.style.borderColor = "rgba(255, 255, 255, 0.6)";
    passwordText.style.borderColor = "rgba(255, 255, 255, 0.6)";
    usernameText.value = "";
    passwordText.value = "";
    loginPage.classList.add("hide");
    loadingScreen.classList.remove("hide");

    setTimeout(() => {
      loadingScreen.classList.add("hide");
      unlockedMode.classList.remove("hide");
      lockedMode.classList.add("hide");
    }, 2000);
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

// tabIcons.forEach(function (svg) {
//   svg.addEventListener("click", () => {
//     let target = `.${svg.dataset.target}`;
//     let page = document.querySelector(target);
//     page.classList.remove("hide");
//     page.style.opacity = 0;
//     fadeIn(page, 400);
//     svg.querySelector("path").style.fill = "#2795ef";

//     let xBtn = page.querySelector(".top-bar svg");
//     xBtn.addEventListener("click", () => {
//       page.classList.add("hide");
//       svg.querySelector("path").style.fill = "#E5F4FF";
//     });

//     windowsIcon.addEventListener("click", () => {
//       page.classList.add("hide");
//       svg.querySelector("path").style.fill = "#E5F4FF";
//     });

//     lockTheScreen.addEventListener("click", () => {
//       if (!page.classList.contains("hide")) {
//         page.classList.add("hide");
//         svg.querySelector("path").style.fill = "#E5F4FF";
//       }
//     });

//     console.log(xBtn);
//   });
// });

let currentPage = null; // Track the currently open page

tabIcons.forEach(function (svg) {
  let target = `.${svg.dataset.target}`;
  let page = document.querySelector(target);

  svg.addEventListener("click", () => {
    if (currentPage !== null && currentPage !== page) {
      // If another page is open, close it
      currentPage.classList.add("hide");
      currentPage.querySelector("path").removeAttribute("style");

      tabIcons.forEach((icon) => {
        icon.querySelector("path").removeAttribute("style");
      });
    }

    if (page.classList.contains("hide")) {
      // If the clicked page is hidden, show it
      page.classList.remove("hide");
      page.style.opacity = 0;
      fadeIn(page, 400);
      svg.querySelector("path").style.fill = "#2795ef";
      currentPage = page;
    } else {
      // If the clicked page is already open, close it
      page.classList.add("hide");
      svg.querySelector("path").removeAttribute("style");
      currentPage = null;
    }

    let xBtn = page.querySelector(".top-bar svg");
    xBtn.addEventListener("click", () => {
      page.classList.add("hide");
      svg.querySelector("path").removeAttribute("style");
      currentPage = null;
    });

    windowsIcon.addEventListener("click", () => {
      page.classList.add("hide");
      svg.querySelector("path").removeAttribute("style");
      currentPage = null;
    });

    lockTheScreen.addEventListener("click", () => {
      if (!page.classList.contains("hide")) {
        page.classList.add("hide");
        svg.querySelector("path").removeAttribute("style");
        currentPage = null;
      }
    });
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

function fade(element, duration, direction) {
  let opacity = direction === "in" ? 0 : 1;
  const intervalTime = 50;

  const fadeInterval = setInterval(() => {
    if (direction === "in") {
      opacity += intervalTime / duration;
      if (opacity >= 1) {
        clearInterval(fadeInterval);
        opacity = 1;
      }
    } else if (direction === "out") {
      opacity -= intervalTime / duration;
      if (opacity <= 0) {
        clearInterval(fadeInterval);
        opacity = 0;
      }
    }

    element.style.opacity = opacity;
  }, intervalTime);
}

// Function to format the date
function formatDate(date) {
  const daysOfWeek = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const months = [
    "jan",
    "feb",
    "mar",
    "apr",
    "may",
    "jun",
    "jul",
    "aug",
    "sep",
    "oct",
    "nov",
    "dec",
  ];

  const day = date.getDate();
  const daySuffix =
    day >= 11 && day <= 13
      ? "th"
      : ["th", "st", "nd", "rd", "th", "th", "th", "th", "th", "th"][day % 10];
  const dayString = day + daySuffix;

  const dayOfWeek = daysOfWeek[date.getDay()];
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${dayOfWeek} ${dayString} ${month} ${year}`;
}
date.textContent = formatDate(new Date());

lockTheScreen.addEventListener("click", () => {
  loadingScreen.classList.remove("hide");
  setTimeout(() => {
    unlockedMode.classList.add("hide");
    loadingScreen.classList.add("hide");
    lockedMode.classList.remove("hide");
    loginPage.classList.remove("hide");
  }, 1500);
});

navItems.forEach(function (item) {
  item.addEventListener("click", () => {
    const openOnValue = projectsWrapper.dataset.openon;
    const target = item.dataset.target;
    const targetPage = document.querySelector(target);
    const currentPage = document.querySelector(openOnValue);

    fade(currentPage, 300, "out");

    // Hide the current page after fading out
    setTimeout(() => {
      currentPage.classList.add("hide");
      targetPage.classList.remove("hide");
      fade(targetPage, 300, "in");
    }, 350); // Adjust the delay based on your fade duration

    projectsWrapper.dataset.openon = target;

    navItems.forEach(function (item) {
      item.classList.remove("active");
    });
    item.classList.add("active");
  });
});
