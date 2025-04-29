// const current = document.getElementById('current');
const thumbs = document.querySelectorAll('.thumb');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const mainDisplay = document.getElementById('main-img');
let currentIndex = 0;

function updateImage(index) {
  // current.src = thumbs[index].src;
  // thumbs.forEach(t => t.classList.remove('active'));
  // thumbs[index].classList.add('active');
  // currentIndex = index;
  const thumb = thumbs[index];
  mainDisplay.innerHTML = '';
  if (thumb.dataset.type === 'pdf') {
    const object = document.createElement('object');
    object.data = thumb.dataset.pdf;
    object.width = '90%';
    object.height = '70vh';
    object.innerHTML = '<p>Your browser does not support PDFs. <a href="${thumb.dataset.pdf}" target="_blank">Download the PDF</a>.</p>';
    mainDisplay.appendChild(object);
  } else {
    const img = document.createElement('img');
    img.id = 'current';
    img.src = thumb.src;
    img.alt = "Main Image";
    mainDisplay.appendChild(img);
  }
  thumbs.forEach(t => t.classList.remove('active'));
  thumb.classList.add('active');
}
document.querySelectorAll('[data-gallery]').forEach(gallery => {
  const mainImg = gallery.querySelector('.gallery-main img');
  const thumbs = gallery.querySelectorAll('.thumb');

  thumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      mainImg.src = thumb.src;

      thumbs.forEach(t => t.classList.remove('selected'));
      thumb.classList.add('selected');
    });
  });
});
thumbs.forEach((thumb, index) => {
  thumb.addEventListener('click', () => {
    updateImage(index);
  });
});

nextBtn.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex >= thumbs.length) currentIndex = 0;
  updateImage(currentIndex);
});

prevBtn.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) currentIndex = thumbs.length - 1;
  updateImage(currentIndex);
});
