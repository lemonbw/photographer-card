let currentImageIndex = 0;
const images = [
  "Images/Gallery/girlwithdog.jpeg",
  "Images/Gallery/womanontherailway.jpeg",
  "Images/Gallery/womanonthebeach.jpeg",
  "Images/Gallery/girlbythecar.jpeg",
  "Images/Gallery/girlbythecar2.jpeg",
  "Images/Gallery/girlwithtangerine.jpeg",
  "Images/Gallery/motherhugsson.jpeg",
  "Images/Gallery/girlwithabouquetofflowers.jpeg",
  "Images/Gallery/girlwithahat.jpeg",
  "Images/Gallery/girlwithdog2.jpeg",
  "Images/Gallery/familyreadingafairytale.jpeg",
  "Images/Gallery/walkinggirl.jpeg",
];

function openModal(element) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  modal.classList.add("show");
  modalImg.classList.remove("show");

  const imagePath = element.src.split("/").pop();
  currentImageIndex = images.findIndex((image) => image.includes(imagePath));

  modalImg.src = element.src;

  setTimeout(() => {
    highlightActiveThumbnail();
    modalImg.classList.add("show");
  }, 300);
}

function highlightActiveThumbnail() {
  const thumbnails = document.querySelectorAll(".thumbnail");

  thumbnails.forEach((thumbnail) => {
    thumbnail.classList.remove("active-thumbnail");
  });

  if (thumbnails[currentImageIndex]) {
    thumbnails[currentImageIndex].classList.add("active-thumbnail");
  }
}

function changeImage(direction) {
  const modalImg = document.getElementById("modalImg");
  modalImg.classList.remove("show");

  setTimeout(() => {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
      currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
      currentImageIndex = 0;
    }

    highlightActiveThumbnail();
    modalImg.src = images[currentImageIndex];
    modalImg.classList.add("show");
  }, 300);
}

function closeModal() {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  modalImg.classList.remove("show");
  setTimeout(() => {
    modal.classList.remove("show");
  }, 300);
}

document.getElementById("modal").addEventListener("click", function (event) {
  if (event.target === this) {
    closeModal();
  }
});
