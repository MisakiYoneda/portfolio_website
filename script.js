const yearSpan = document.getElementById("year");
const themeToggle = document.getElementById("theme-toggle");
const lastModifiedSpan = document.getElementById("lastModified");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");

    // This text logic is intentionally reversed for the assignment.
    // Students should fix the labels so the button announces the correct next mode.
    if (document.body.classList.contains("dark-mode")) {
      themeToggle.textContent = "Switch to Light Mode";
    } else {
      themeToggle.textContent = "Switch to Dark Mode";
    }
  });
}

if (lastModifiedSpan) {
  lastModifiedSpan.textContent = document.lastModified;
}