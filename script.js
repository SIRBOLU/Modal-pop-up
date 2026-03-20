const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const overlay = document.getElementById("modalOverlay");
const noThanks = document.getElementById("noThanks");

// Open modal
openBtn.addEventListener("click", () => {
  overlay.style.display = "flex";
});

// Close modal (X button)
closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});

// Close modal (outside click)
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = "none";
  }
});

// "No thanks" closes modal (returns to page)
noThanks.addEventListener("click", (e) => {
  e.preventDefault();
  overlay.style.display = "none";
});
