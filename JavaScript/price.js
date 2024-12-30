const slidesData = {
  portrait: [
    {
      type: "video",
      src: "Images/Price/Portrait/agirliswalkingdownthestreet.MOV",
      alt: "Девушка ходит по улице",
    },
    { type: "image", src: "Images/Price/Portrait/child.jpeg", alt: "Ребёнок" },
    { type: "image", src: "Images/Price/Portrait/girl.jpeg", alt: "Девочка" },
    { type: "image", src: "Images/Price/Portrait/woman.jpeg", alt: "Женщина" },
    {
      type: "image",
      src: "Images/Price/Portrait/girlinthehay.jpg",
      alt: "Девушка на сене",
    },
    {
      type: "image",
      src: "Images/Price/Portrait/girlontherailway.jpg",
      alt: "Девушка на железной дороге",
    },
  ],
  family: [
    { type: "image", src: "Images/Price/Family/family.jpeg", alt: "Семья" },
    { type: "image", src: "Images/Price/Family/family 2.jpeg", alt: "" },
    { type: "image", src: "Images/Price/Family/family 3.jpeg", alt: "" },
    { type: "image", src: "Images/Price/Family/family 4.jpg", alt: "" },
    { type: "image", src: "Images/Price/Family/family 5.jpg", alt: "" },
    { type: "image", src: "Images/Price/Family/family 6.jpg", alt: "" },
  ],
  wedding: [
    {
      type: "image",
      src: "Images/Price/Wedding/womaninthecruch.jpg",
      alt: "Девушка в свадебном наряде",
    },
    {
      type: "image",
      src: "Images/Price/Wedding/womaninthecruch 2.jpg",
      alt: "",
    },
    {
      type: "image",
      src: "Images/Price/Wedding/womaninthecruch 3.jpg",
      alt: "",
    },
    {
      type: "image",
      src: "Images/Price/Wedding/womaninthecruch 4.jpg",
      alt: "",
    },
    {
      type: "image",
      src: "Images/Price/Wedding/womaninthecruch 5.jpg",
      alt: "",
    },
    {
      type: "image",
      src: "Images/Price/Wedding/womaninthecruch 6.jpg",
      alt: "",
    },
  ],
  couple: [
    { type: "video", src: "Images/Price/Couple/couple.MOV", alt: "Пара" },
    { type: "image", src: "Images/Price/Couple/couple 2.jpg", alt: "" },
    { type: "image", src: "Images/Price/Couple/couple 3.jpg", alt: "" },
    { type: "image", src: "Images/Price/Couple/couple 4.jpg", alt: "" },
    { type: "image", src: "Images/Price/Couple/couple 5.jpg", alt: "" },
    { type: "image", src: "Images/Price/Couple/couple 6.jpg", alt: "" },
  ],
  animals: [
    {
      type: "image",
      src: "Images/Price/Animals/girlwithhorse.jpg",
      alt: "Девушка и лошадь",
    },
    { type: "image", src: "Images/Price/Animals/girlwithhorse 2.jpg", alt: "" },
    { type: "image", src: "Images/Price/Animals/girlwithhorse 3.jpg", alt: "" },
    { type: "image", src: "Images/Price/Animals/girlwithhorse 4.jpg", alt: "" },
    { type: "image", src: "Images/Price/Animals/girlwithhorse 5.jpg", alt: "" },
    { type: "image", src: "Images/Price/Animals/girlwithhorse 6.jpg", alt: "" },
    {
      type: "image",
      src: "Images/Price/Animals/a-dog.jpg",
      alt: "Фотография собаки",
    },
    { type: "image", src: "Images/Price/Animals/a-dog-(2).jpg", alt: "" },
    { type: "image", src: "Images/Price/Animals/a-dog-(6).jpg", alt: "" },
  ],
};

let currentIndex = 0;
let currentType = "portrait";
const slidesContainer = document.querySelector(".slides");
const types = document.querySelectorAll(".type");

function loadSlides(type) {
  currentType = type;
  const newSlides = slidesData[type];
  slidesContainer.innerHTML = "";

  newSlides.forEach((slide, index) => {
    let mediaElement;
    if (slide.type === "image") {
      mediaElement = document.createElement("img");
      mediaElement.src = slide.src;
      mediaElement.alt = slide.alt;
    } else if (slide.type === "video") {
      mediaElement = document.createElement("video");
      mediaElement.src = slide.src;
      mediaElement.alt = slide.alt;
      mediaElement.autoplay = true;
      mediaElement.muted = true;
      mediaElement.loop = true;
    }

    mediaElement.classList.add("slide");
    if (index === currentIndex) mediaElement.classList.add("active");
    slidesContainer.appendChild(mediaElement);
  });

  updateSliderPosition();
}

document.querySelector(".next").addEventListener("click", () => {
  moveToNextSlide();
});

document.querySelector(".prev").addEventListener("click", () => {
  moveToPrevSlide();
});

types.forEach((type) => {
  type.addEventListener("click", () => {
    const selectedType = type.getAttribute("data-type");
    loadSlides(selectedType);
    currentIndex = 0;
  });
});

function moveToNextSlide() {
  const slides = document.querySelectorAll(".slide");
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.add("active");
  updateSliderPosition();
}

function moveToPrevSlide() {
  const slides = document.querySelectorAll(".slide");
  slides[currentIndex].classList.remove("active");
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");
  updateSliderPosition();
}

function updateSliderPosition() {
  slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

loadSlides(currentType);
