document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('.zoom-img').forEach(img => {
    const panzoom = Panzoom(img, {
      maxScale: 5,
      minScale: 1,
      contain: 'outside'
    });
    img.parentElement.addEventListener('wheel', panzoom.zoomWithWheel);
  });
});
