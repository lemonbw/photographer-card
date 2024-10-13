const reviewsData = {
    reviews: [
        { text: 'Спасибо Зариночка. Ты просто волшебница!!! Фоточки огонь))) У меня все проят твой номер телефона. Ты просто супер детка.', author: 'Наталья'},
        { text: 'Мне очень нравится! Я думала, что совсем не фотогеенична и камера меня совсем не любит. А тут, что ни кадр, то хорошо. Очень много отличных кадров.', author: 'Яна' },
        { text: 'Только хорошее впечатление от ваших работ! Настоящий профессионал в своём деле. Всегда множество творческих идей, в результате которых получаются просто потрясающие снимки. На съёмке дружеская атмосфера и хорошее настроение. Ещё просто обожаю стиль обработки фото. Всегда результат выше всяких ожиданий! Очень рекомендую!', author: 'Даяна' },
        { text: 'Зарина благодарю за красивое атмосферное видео! Вам удалось отлично передать мощь и красоту уникального собора Пресвятой Девы Марии, настроение невесты, её загадочность, нежность и изящность. А также в видео отлично, правильно показано изысканное платье с его особенными деталями.<br>Желаю вам развить свой талант, чтоб вас узнавали по вашему "почерку" и уверена в нашем дальнейшем сотрудничестве. С уважением Натали.', author: 'Натали'},
        { text: 'Провела весь вечер за просмотром фотографий. Какие же они получились чудесными, столько волшебства в каждом кадре! Благодарим тебя всей семьёй. Всего 1 час времени, а память осталась на всю жизнь! Ты такой душевный фотограф, всё прошло так комфортно, что у меня нет слов, чтобы описать все эмоции благодарности! Процветания тебе и побольше клиентов. Которые так же как и я будут в осенний вечер утепляться приятными фотографиями!', author: 'A6_Ade_Aze'},
        { text: 'Спасибо огромное за фотографии, которые одна лучше другой!!! Я в восторге и не только я)) Спасибио за прекрасную память на всю жизнь!! Очень приятно было с вами работать, вы прекрасный профессионал!!', author: 'Микляев'},
    ]
};

const mediaData = {
    media: [
        [
            { type: 'image', src: 'Images/Reviews/First-review/woman-with-a-smile.jpg', alt: 'Фотография девушки' },
            { type: 'image', src: 'Images/Reviews/First-review/woman-with-a-smile-(2).jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/First-review/woman-with-a-smile-(3).jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/First-review/woman-with-a-smile-(4).jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/First-review/woman-with-a-smile-(5).jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/First-review/woman-with-a-smile-(6).jpg', alt: '' }
        ],
        [
            { type: 'video', src: 'Images/Reviews/Second-review/girl.MOV', alt: 'Видео с девочкой'},
            { type: 'video', src: 'Images/Reviews/Second-review/family.MOV', alt: '' },
            { type: 'image', src: 'Images/Reviews/Second-review/family-(2).jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/Second-review/girl-(2).jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/Second-review/brother-and-sister.jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/Second-review/woman-and-a-car.jpg', alt: '' },
        ],
        [
            { type: 'image', src: 'Images/Reviews/Third-review/girl.jpg', alt: 'Фотография девушки' },
            { type: 'image', src: 'Images/Reviews/Third-review/girl-(2).jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/Third-review/girl-(3).jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/Third-review/girl-(4).jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/Third-review/girl-(5).jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/Third-review/girl-(6).jpg', alt: '' }
        ],
        [
            { type: 'video', src: 'Images/Reviews/Fourth-review/bride.MOV', alt: 'Видео: невеста в соборе'},
            { type: 'video', src: 'Images/Reviews/Fourth-review/bride-(2).mp4', alt: ''},
            { type: 'image', src: 'Images/Price/Wedding/womaninthecruch.jpg', alt: 'Девушка в свадебном наряде' },
            { type: 'image', src: 'Images/Price/Wedding/womaninthecruch 2.jpg', alt: '' },
            { type: 'image', src: 'Images/Price/Wedding/womaninthecruch 3.jpg', alt: '' },
            { type: 'image', src: 'Images/Price/Wedding/womaninthecruch 4.jpg', alt: '' },
            { type: 'image', src: 'Images/Price/Wedding/womaninthecruch 5.jpg', alt: '' },
            { type: 'image', src: 'Images/Price/Wedding/womaninthecruch 6.jpg', alt: '' }
        ],
        [
            { type: 'image', src: 'Images/Reviews/Fifth-review/green-family.jpg', alt: 'Семья на берегу' },
            { type: 'image', src: 'Images/Reviews/Fifth-review/green-family-(2).jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/Fifth-review/green-family-(3).jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/Fifth-review/green-family-(4).jpg', alt: '' },
        ],
        [
            { type: 'image', src: 'Images/Reviews/Sixth-review/family.jpg', alt: 'Отец с сыном' },
            { type: 'image', src: 'Images/Reviews/Sixth-review/family-(2).jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/Sixth-review/family-(3).jpg', alt: '' },
            { type: 'image', src: 'Images/Reviews/Sixth-review/man.jpg', alt: 'Мужик' },
            { type: 'image', src: 'Images/Reviews/Sixth-review/man-(2).jpg', alt: 'Мужик' },
            { type: 'image', src: 'Images/Reviews/Sixth-review/man-(3).jpg', alt: 'Мужик' },
        ]
    ]
};

let autoSwitchInterval;
let currentIndex = 0;
let currentPhotoIndex = 0;
const reviewsContainer = document.querySelector('.reviews');
const photosContainer = document.querySelector('.photos');
const types = document.querySelectorAll('.type');

// Загрузка отзывов
function loadReviews() {
    const newReviews = reviewsData.reviews; 
    reviewsContainer.innerHTML = '';

    newReviews.forEach((review, index) => {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');
        reviewElement.innerHTML = `<p>${review.text}</p><p class="author">— ${review.author}</p>`;
        reviewsContainer.appendChild(reviewElement);
    
        if (index === currentIndex) {
            reviewElement.classList.add('active');
        } else {
            reviewElement.classList.remove('active');
        }
    });
    

    updateReviewPosition();
    loadPhotos(currentIndex); 
}

types.forEach(type => {
    type.addEventListener('click', () => {
        loadReviews(); 
        currentIndex = 0; 
        currentPhotoIndex = 0;
    });
});

function moveToNextReview() {
    currentIndex = (currentIndex + 1) % reviewsData.reviews.length; 
    updateReview();
}

function moveToPrevReview() {
    currentIndex = (currentIndex - 1 + reviewsData.reviews.length) % reviewsData.reviews.length; 
    updateReview();
}

function updateReview() {
    loadPhotos(currentIndex);
    loadReviews();
    currentPhotoIndex = 0; 
}


function updateReviewPosition() {
    reviewsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function loadPhotos(reviewIndex) {
    if (!mediaData.media[reviewIndex]) {
        console.error(`No media found for review index: ${reviewIndex}`);
        return;
    }

    const currentMedia = mediaData.media[reviewIndex];
    photosContainer.innerHTML = '';

    currentMedia.forEach((media, index) => {
        let mediaElement;

        if (media.type === 'image') {
            mediaElement = document.createElement('img');
            mediaElement.src = media.src;
            mediaElement.classList.add('photo');
        } else if (media.type === 'video') {
            mediaElement = document.createElement('video');
            mediaElement.src = media.src;
            mediaElement.classList.add('video');
            mediaElement.controls = false; 
            mediaElement.autoplay = true; 
            mediaElement.loop = true; 
            mediaElement.muted = true;
        }

        mediaElement.addEventListener('mouseenter', stopAutoSwitch);
        mediaElement.addEventListener('mouseleave', startAutoSwitch);

        if (index === currentPhotoIndex) mediaElement.classList.add('active');
        photosContainer.appendChild(mediaElement);
    });

    updateMediaPosition();
}

// Переключение фотографий
function moveToNextPhoto() {
    const currentMedia = mediaData.media[currentIndex];
    currentPhotoIndex = (currentPhotoIndex + 1) % currentMedia.length;
    updatePhotoDisplay();
}

function moveToPrevPhoto() {
    const currentMedia = mediaData.media[currentIndex];
    currentPhotoIndex = (currentPhotoIndex - 1 + currentMedia.length) % currentMedia.length;
    updatePhotoDisplay();
}

function updatePhotoDisplay() {
    const photosContainer = document.querySelector('.photos');
    const activePhoto = photosContainer.querySelector('.photo.active');
    if (activePhoto) {
        activePhoto.classList.remove('active');
    }
    photosContainer.children[currentPhotoIndex].classList.add('active');
    updateMediaPosition();
}

function updateMediaPosition() {
    photosContainer.style.transform = `translateX(-${currentPhotoIndex * 100}%)`;
}

function startAutoSwitch() {
    autoSwitchInterval = setInterval(() => {
        moveToNextPhoto();
    }, 5000);
}

function stopAutoSwitch() {
    clearInterval(autoSwitchInterval);
}

function layers() {
    let reviewss = document.getElementsByClassName('social-review');
    for (let i = 0; i < reviewss.length; i++) {
        reviewss[i].style.zIndex = reviewss.length - i; // Устанавливаем z-index для каждого изображения
    }
}

layers(); // Вызываем функцию

const scrollArrow = document.getElementById('scrollArrow');
const socialReviews = document.getElementById('socialReviews');
const reviews = document.getElementsByClassName('social-review');
const textElement = document.querySelector('#social-review-text');
let isExpanded = false; // Состояние для отслеживания положения

scrollArrow.addEventListener('click', function() {
    isExpanded = !isExpanded; // Переключаем состояние

    // Изменяем расстояние между изображениями
    for (let review of reviews) {
        review.style.marginRight = isExpanded ? '20px' : '-180px'; // Увеличиваем или возвращаем расстояние
    }
    socialReviews.style.overflowX = isExpanded ? 'auto' : 'hidden';
    socialReviews.style.width = isExpanded ? '79vw' : '31.4vw';
    // Перемещаем контейнер влево
    socialReviews.style.transform = isExpanded ? 'translateX(-50vw)' : 'translateX(0)'; // Перемещение влево
    textElement.style.opacity = isExpanded ? '0' : '1';
    textElement.style.transform = isExpanded ? 'translateX(-30vw)' : 'translateX(0)';
    // Прокручиваем влево
    socialReviews.scrollBy({
        behavior: 'smooth' // Плавная прокрутка
    });

    // Переворот и перемещение стрелки
    this.style.transform = isExpanded ? 'translateX(-50vw) rotate(180deg)' : 'translateX(0) rotate(0deg)';
});

scrollArrow.addEventListener('mouseover', function() {
    this.style.textShadow = '-1px -1px 2px rgba(0, 0, 0, 0.9), 1px -1px 2px rgba(0, 0, 0, 0.9), -1px 1px 2px rgba(0, 0, 0, 0.9), 1px 1px 2px rgba(0, 0, 0, 0.9)';
});
scrollArrow.addEventListener('mouseout', function() {
    this.style.textShadow = '-1px -1px 2px rgba(0, 0, 0, 0.5), 1px -1px 2px rgba(0, 0, 0, 0.5), -1px 1px 2px rgba(0, 0, 0, 0.5), 1px 1px 2px rgba(0, 0, 0, 0.5)';
});


loadReviews();
loadPhotos(currentIndex);
startAutoSwitch();