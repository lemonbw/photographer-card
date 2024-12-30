# Сайт-визитка фотографа

Это персональный сайт-визитка фотографа Зарины Назаровой. На сайте вы сможете познакомиться с её портфолио, узнать цены на услуги, прочитать отзывы клиентов и найти контактные данные для связи.

## Содержание

- [Обзор](#обзор)
  - [Скриншоты](#скриншоты)
  - [Ссылки](#ссылки)
- [Процесс разработки и технологии](#процесс-разработки-и-технологии)
  - [Технологии](#технологии)
  - [Что я изучил](#что-я-изучил)
  - [Чему я продолжаю учиться](#чему-я-продолжаю-учиться)
  - [Ресурсы](#ресурсы)
- [Об авторе](#об-авторе)
- [Благодарности](#благодарности)

## Обзор

Этот сайт создан с использованием HTML5, CSS3 и JavaScript, без применения фреймворков и библиотек. Тем не менее, он включает множество интерактивных элементов, таких как:

- Быстрая навигация;
- Слайд-шоу;
- Переключение между элементами прайс-листа.

Сайт также имеет мобильную версию, адаптированную с помощью медиазапросов для удобного просмотра на разных устройствах.

### Скриншоты

![Главная страница](/Images/screenshots/main.jpeg)
![Галерея](/Images//screenshots/gallery.jpeg)
![Прайс-лист](/Images/screenshots/price.jpeg)
![Отзывы](/Images/screenshots/reviews.jpeg)
![Обо мне](/Images/screenshots/about.jpeg)

### Ссылки

- Код на GitHub: [GitHub](https://github.com/lemonbw/photographer-card)
- Адрес веб-сайта: [GitHub Pages](https://lemonbw.github.io/photographer-card/)

## Процесс разработки и технологии

### Технологии

- Семантическая разметка, выполненная на HTML5
- Уникальные стили, созданные с помощью CSS3
- Интерактивные элементы и динамическая загрузка изображений и видео, реализованные на JavaScript

### Что я изучил

Это был мой первый проект и во время разработки я изучил множество новых вещей. В том числе:

- Динамическая загрузка данных, реализованная с помощью JavaScript
- Анимации, созданные с использованием CSS3 и JavaScript
- Функционал для интерактивного взаимодействия с элементами через JavaScript
- Современное позиционирование с использованием Flexbox и Grid
- Применение псевдоклассов и псевдоэлементов в CSS3 для улучшения дизайна
- Семантическое структурирование страницы с использованием элементов div, section, header, footer, main
- Организация общих стилей и скриптов в отдельные файлы для удобства и масштабируемости
- Контроль версий при помощи технологий Git, GitHub, GitHub Desktop

```html
<head>
    <!--Подключение общих и локальных стилей-->
    <link rel="stylesheet" href="CSS/general.css">
    <link rel="stylesheet" href="CSS/main.css">
</head>
<body>
    <!--Семантическая структура страницы-->
    <header>
        <nav id="navbar" class="navbar">
            <!--Навигационное меню-->
        </nav>
    </header>
    <main>
        <!--Главная секция веб-страницы-->
        <section class="second">
            <div class="description">
            </div>
        </section>
        <section class="navigation" id="gallery">
            <div  class="navigation-text">
            </div>
    </main>
    <footer>
        <!--Футер с контактами-->
        <ul class="social">
        </ul>
    </footer>
    <!--Подключение общих и локальных скриптов-->
    <script src="JavaScript/main.js"></script>
    <script src="JavaScript/general.js"></script>
</body>
```

```css
/*Позиционирование при помощи flexbox*/
.navigation {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
/*Псевдоэлемент*/
.navigation-text::before {
  content: "";
  z-index: -1;
}
/*Медиазапросы для адаптации под мобильные устройства*/
@media (max-width: 768px) {
  .navigation-text {
    max-width: 70vw;
    font-size: 1.2rem;
  }
}
/*Различные состояния объетка для анимации*/
.hamburger.is-active div:nth-child(1) {
  transform: rotate(-45deg) translate(-22px, 6px);
}

.hamburger.is-active div:nth-child(2) {
  opacity: 0;
}

.hamburger.is-active div:nth-child(3) {
  transform: rotate(45deg) translate(-22px, -6px);
}
```

```js
// Функция активации анимации, при попадании элемента в зону видимости
function onScroll() {
  hiddenElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("visible");
    } else {
      element.classList.remove("visible");
    }
  });
}
// Массив данных для последующей динамической загрузки изображений
const images = [
  "Images/Gallery/girlwithdog.jpeg",
  "Images/Gallery/womanontherailway.jpeg",
];
// Функция для отображения модального окна и динамической загрузки изображений в слайд-шоу.
function openModal(element) {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImg");

  modal.classList.add("show");
  modalImg.classList.remove("show");

  const imagePath = element.src.split("/").pop();
  currentImageIndex = images.findIndex((image) => image.includes(imagePath));

  modalImg.src = element.src;
}
```

### Чему я продолжаю учиться

Я продолжаю изучать дизайн и правильную структуру проектов, а также стремлюсь к уверенному использованию HTML5, CSS3 и JavaScript. В будущем я планирую изучать библиотеки Tailwind CSS и React, а также использовать Vite для быстрой и структурированной сборки проектов.

### Ресурсы

- **[Learn HTML!](https://web.dev/learn/html/)** — Отличный курс по HTML для начинающих. Доступен на русском и английском языках.
- **[Learn CSS!](https://web.dev/learn/css?hl=ru)** — Другой курс на этой платформе, подходящий для изучения CSS.
- **[Learn JS!](https://web.dev/javascript?hl=ru)** — Курс для знакомства с JavaScript.
- **[ItProger](https://itproger.com/)** — Онлайн-школа с бесплатными видеоуроками по программированию.
- **[Enki](https://play.google.com/store/apps/details?id=com.enki.insights&hl=en-US)** — Бесплатное мобильное приложение для изучения различных языков программирования.
- **[CS50's Web Programming with Python and JavaScript](https://learning.edx.org/course/course-v1:HarvardX+CS50W+Web/home)** — Гарвардский курс CS50, посвящённый веб-разработке.
- **[Git, GitHub, & GitHub Desktop for Beginners](https://www.youtube.com/watch?v=8Dd7KRpKeaE)** — Видеоурок Джессики Чан о технологиях контроля версий.

## Об авторе

- GitHub - [Мой аккаунт на GitHub](https://github.com/lemonbw)
- VK - [Мой аккаунт вконтакте](https://vk.com/leonblackwhite)

## Благодарности

Я хотел бы поблагодарить всех программистов и учителей, которые делятся материалами для изучения программирования в открытом доступе.

Также выражаю свою благодарность Зарине Назаровой за возможность реализовать мой первый бизнес-проект в веб-разработке.
