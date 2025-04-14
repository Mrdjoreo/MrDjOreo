
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 3000);

document.addEventListener('DOMContentLoaded', () => {
  showSlide(currentSlide);

  const uploadInput = document.getElementById('mediaUpload');
  const mediaPreview = document.getElementById('mediaPreview');

  uploadInput.addEventListener('change', () => {
    mediaPreview.innerHTML = '';
    [...uploadInput.files].forEach(file => {
      const reader = new FileReader();
      reader.onload = () => {
        let element;
        if (file.type.startsWith('audio')) {
          element = document.createElement('audio');
          element.controls = true;
          element.src = reader.result;
        } else if (file.type.startsWith('video')) {
          element = document.createElement('video');
          element.controls = true;
          element.src = reader.result;
          element.width = 320;
        }
        mediaPreview.appendChild(element);
      };
      reader.readAsDataURL(file);
    });
  });
});
