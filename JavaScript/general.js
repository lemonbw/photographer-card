const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.body; // Ссылка на body

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Добавляем/убираем класс для отображения меню
    body.classList.toggle('active'); // Добавляем/убираем класс для затемнения фона

    // Анимация гамбургера в крестик
    hamburger.classList.toggle('is-active');
});
