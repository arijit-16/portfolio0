// Dark mode toggle
document.getElementById("themeToggle").onclick = () => {
  document.body.classList.toggle("dark");
  const btn = document.getElementById("themeToggle");
  btn.textContent = document.body.classList.contains("dark") ? "🌙" : "🌞";
};

// Hero typing effect
const phrases = ["Arijit Pal ", "a Developer ", "an AIML Enthusiast ", "a Problem Solver "];
let i = 0, j = 0, isDeleting = false;
const typed = document.querySelector(".typed");

function typeEffect() {
  let currentPhrase = phrases[i];
  if (isDeleting) {
    typed.textContent = currentPhrase.substring(0, j--);
  } else {
    typed.textContent = currentPhrase.substring(0, j++);
  }

  if (!isDeleting && j === currentPhrase.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
    setTimeout(typeEffect, 400);
  } else {
    setTimeout(typeEffect, isDeleting ? 50 : 100);
  }
}

typeEffect();

// About Me typed animation
const aboutPhrases = [
  "Hi, I'm Arijit Pal."
];
let a = 0, b = 0, aboutDeleting = false;
const aboutTyped = document.getElementById("aboutTyped");

function aboutTypeEffect() {
  let currentPhrase = aboutPhrases[a];
  if (aboutDeleting) {
    aboutTyped.textContent = currentPhrase.substring(0, b--);
  } else {
    aboutTyped.textContent = currentPhrase.substring(0, b++);
  }

  if (!aboutDeleting && b === currentPhrase.length) {
    aboutDeleting = true;
    setTimeout(aboutTypeEffect, 1500);
  } else if (aboutDeleting && b === 0) {
    aboutDeleting = false;
    a = (a + 1) % aboutPhrases.length;
    setTimeout(aboutTypeEffect, 500);
  } else {
    setTimeout(aboutTypeEffect, aboutDeleting ? 50 : 100);
  }
}

// Start About typed effect only when section opens
// Fade-in rest lines in About and other sections on open

// Collapsible sections logic
document.querySelectorAll(".collapsible-header").forEach(header => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const isOpen = content.classList.toggle("open");

    // Change arrow icon
    header.textContent = header.textContent.includes("⬇️")
      ? header.textContent.replace("⬇️", "⬆️")
      : header.textContent.replace("⬆️", "⬇️");

    // Handle fade-in texts inside content
    const fadeElems = content.querySelectorAll(".fade-in-text");
    if (isOpen) {
      // Start typed effect only for About section
      if (header.textContent.includes("About Me")) {
        aboutTypeEffect();
      }
      // Fade in each line sequentially with delay
      fadeElems.forEach((el, idx) => {
        setTimeout(() => {
          el.classList.add("visible");
        }, 500 * idx);
      });
    } else {
      // Close content: hide fade-in texts and reset About typed text
      fadeElems.forEach(el => el.classList.remove("visible"));
      if (header.textContent.includes("About Me")) {
        aboutTyped.textContent = "";
        a = 0; b = 0; aboutDeleting = false;
      }
    }
  });
});
