<script>
const thumb = document.getElementById("zoomThumb");
const overlay = document.getElementById("zoomOverlay");
const zoomed = document.getElementById("zoomLarge");

let scale = 1;
let pos = { x: 0, y: 0 };
let isDragging = false;
let dragStart = { x: 0, y: 0 };

thumb.addEventListener("click", () => {
  overlay.style.display = "flex";
  scale = 1;
  pos = { x: 0, y: 0 };
  updateTransform();
});

// Close on overlay click
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) overlay.style.display = "none";
});

// Prevent closing when clicking on the image
zoomed.addEventListener("click", e => e.stopPropagation());

// Dragging
overlay.addEventListener("mousedown", e => {
  isDragging = true;
  overlay.style.cursor = "grabbing";
  dragStart.x = e.clientX - pos.x;
  dragStart.y = e.clientY - pos.y;
});

overlay.addEventListener("mouseup", () => {
  isDragging = false;
  overlay.style.cursor = "grab";
});

overlay.addEventListener("mousemove", e => {
  if (!isDragging) return;
  pos.x = e.clientX - dragStart.x;
  pos.y = e.clientY - dragStart.y;
  updateTransform();
});

// Scroll zoom
overlay.addEventListener("wheel", e => {
  e.preventDefault();
  const delta = e.deltaY > 0 ? -0.1 : 0.1;
  scale = Math.min(Math.max(scale + delta, 0.2), 5);
  updateTransform();
});

function updateTransform() {
  zoomed.style.transform = `translate(${pos.x}px, ${pos.y}px) scale(${scale})`;
}
</script>
