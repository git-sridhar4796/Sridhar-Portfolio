const hamburgerBtn = document.getElementById("hamburgerBtn");
const mobileMenu = document.getElementById("mobileMenu");

hamburgerBtn.addEventListener("click", () => {
  // Check if the menu is currently closed (max-h-0)
  const isClosed = mobileMenu.classList.contains("max-h-0");

  if (isClosed) {
    // If closed, open it (remove max-h-0, add max-h-96, add opacity-100)
    mobileMenu.classList.remove("max-h-0", "opacity-0", "scale-y-0");
    mobileMenu.classList.add("max-h-96", "opacity-100", "scale-y-100"); // Use a max-height that's sufficiently large
  } else {
    // If open, close it (remove max-h-96, add max-h-0, add opacity-0)
    mobileMenu.classList.remove("max-h-96", "opacity-100", "scale-y-100");
    mobileMenu.classList.add("max-h-0", "opacity-0", "scale-y-0");
  }
});
