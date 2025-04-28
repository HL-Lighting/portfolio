const current = document.getElementById('current');
const thumbs = document.querySelectorAll('.thumb');

thumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    // Update main image
    current.src = thumb.src;

    // Remove 'active' from all thumbnails
    thumbs.forEach(t => t.classList.remove('active'));

    // Add 'active' to clicked thumbnail
    thumb.classList.add('active');
  });
});
