const hiddenElements = document.querySelectorAll(".hidden");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

prevButton.addEventListener("mousedown", function () {
  prevButton.classList.add("active");
});
prevButton.addEventListener("mouseup", function () {
  setTimeout(() => {
    prevButton.classList.remove("active");
  }, 100); // Удаляет класс через 100 мс
});

nextButton.addEventListener("mousedown", function () {
  nextButton.classList.add("active");
});
nextButton.addEventListener("mouseup", function () {
  setTimeout(() => {
    nextButton.classList.remove("active");
  }, 100); // Удаляет класс через 100 мс
});

function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

function onScroll() {
  hiddenElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", onScroll);
window.addEventListener("load", onScroll);
const slidesData = {
  reasons: [
    {
      id: "first-reason",
      icon: "Images/About/icon-idea.svg",
      title: "Уникальный стиль",
      description:
        "Я обладаю креативным взглядом на мир, и мои работы отличаются глубиной и искренностью. Вы получите результат, который поразит вас и ваших близких.",
    },
    {
      id: "second-reason",
      icon: "Images/About/icon-business-woman.svg",
      title: "Профессионализм",
      description:
        "Вы можете не сомневаться, что каждая фотография будет сделана с безупречным мастерством и вниманием к деталям. Я гарантирую высокое качество снимков, которые станут драгоценными воспоминаниями на всю жизнь.",
    },
    {
      id: "third-reason",
      icon: "Images/About/icon-individual.svg",
      title: "Индивидуальный подход",
      description:
        "Я понимаю, что каждый клиент уникален, и поэтому воплощаю в жизнь даже самые смелые идеи. Вы получите фотографии, отражающие вашу индивидуальность и уникальность момента.",
    },
    {
      id: "fourth-reason",
      icon: "Images/About/diversity.svg",
      title: "Широкий спектр услуг",
      description:
        "От семейных и свадебных фотосессий до корпоративных мероприятий и рекламных проектов — я владею разнообразными стилями и техниками, чтобы создать идеальные фотографии в любой ситуации. Вам не придется искать других мобилографов, так как я обладаю всеми необходимыми навыками.",
    },
  ],
};

let currentIndex = 0;
let currentType = "reasons";
const slidesContainer = document.getElementById("slidesContainer");

function loadSlides(type) {
  currentType = type;
  const newSlides = slidesData[type];
  slidesContainer.innerHTML = "";

  newSlides.forEach((slide, index) => {
    const slideElement = document.createElement("div");
    slideElement.classList.add("slide");

    // Создание заголовка
    const headerElement = document.createElement("h3");
    headerElement.classList.add("reason-headers");

    // Добавление специального класса только для "Индивидуального подхода"
    if (slide.title === "Индивидуальный подход") {
      headerElement.classList.add("individual-approach"); // Добавляем класс
    }

    headerElement.textContent = slide.title; // Устанавливаем текст заголовка

    // Создание параграфа
    const paragraphElement = document.createElement("p");
    paragraphElement.classList.add("reason-paragraphs");
    paragraphElement.textContent = slide.description; // Устанавливаем текст параграфа

    // Создание и добавление иконки
    const iconElement = document.createElement("img");
    iconElement.src = slide.icon;
    iconElement.alt = slide.title;
    iconElement.classList.add("icons");

    // Собираем все элементы вместе
    slideElement.appendChild(iconElement);
    slideElement.appendChild(headerElement);
    slideElement.appendChild(paragraphElement);

    if (index === currentIndex) slideElement.classList.add("active");
    slidesContainer.appendChild(slideElement);
  });

  updateSliderPosition();
}

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

// Добавление обработчиков событий для кнопок
document.querySelector(".next").addEventListener("click", moveToNextSlide);
document.querySelector(".prev").addEventListener("click", moveToPrevSlide);

// Загрузка слайдов при инициализации
loadSlides(currentType);
