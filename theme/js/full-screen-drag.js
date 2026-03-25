document.addEventListener("DOMContentLoaded", () => {
  const imgs = document.querySelectorAll(".zoom-img");

  // Overlay einmal erzeugen
  const overlay = document.createElement("div");
  overlay.className = "zoom-overlay";
  const bigImg = document.createElement("img");
  overlay.appendChild(bigImg);
  document.body.appendChild(overlay);

  imgs.forEach(img => {
    img.addEventListener("click", () => {
      bigImg.src = img.src;
      overlay.style.display = "flex";
    });
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
  });
});