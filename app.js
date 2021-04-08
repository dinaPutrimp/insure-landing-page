const navSlide = () => {
    const hamburger = document.querySelector('.hamburger');
    const nav = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        // nav.classList.toggle('nav-active');
        if (nav.classList.toggle('nav-active')) {
            hamburger.src = 'images/icon-close.svg';
        } else {
            hamburger.src = 'images/icon-hamburger.svg';
        }
    });
}

navSlide();