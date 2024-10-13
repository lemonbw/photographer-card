const hiddenElements = document.querySelectorAll('.hidden');

function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

function onScroll() {
    hiddenElements.forEach(element => {
        if (isElementInViewport(element)) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);
