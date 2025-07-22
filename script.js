let currentIndex = 0;
let images = [];

function openLightbox(imgElement) {
  const galleryImages = document.querySelectorAll('.gallery img');
  images = Array.from(galleryImages);
  currentIndex = images.indexOf(imgElement);
  document.getElementById("lightbox-img").src = imgElement.src;
  document.getElementById("lightbox").style.display = "flex";
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
  const cards = document.querySelectorAll('.image-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
