const header = document.querySelector('.nav-bar');
const sectionOne = document.querySelector('.section-container');
const logo = document.querySelector('.logo');
const dark_logo = document.querySelector('.dark-logo');
const li = document.querySelectorAll('.menu-list');
const menu = document.querySelector('.menu_btn');
const menu_mb = document.querySelector('.menu_mb');

menu.addEventListener('click', () => {
    menu_mb.classList.toggle('menu_flex_none');
});

const sectionOneOptions = {
    rootMargin: '-200px 0px 0px 0px',
};

const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
) {
    entries.forEach((entry) => {
        if (!entry.isIntersecting) {
            header.classList.add('nav-bar-on-white-bg');
            menu.classList.add('menu-btn-dark');
            logo.style.display = 'none';
            dark_logo.style.display = 'flex';
            li.forEach(function (item) {
                item.classList.add('dark-menu');
            });
        } else {
            header.classList.remove('nav-bar-on-white-bg');
            menu.classList.remove('menu-btn-dark');
            dark_logo.style.display = 'none';
            logo.style.display = 'flex';
            li.forEach(function (item) {
                item.classList.remove('dark-menu');
            });
        }
    });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// ///////////////////////////////////////

const slides = document.querySelectorAll('.slider');
const btns = document.querySelectorAll('.btn');

let currentSlide = 1;

// manual slider
const manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');
        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
};

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        manualNav(i);
        currentSlide = i;
    });
});

// autoplay

const repeat = function (activeClass) {
    let active = document.getElementsByClassName('active');
    let i = 1;

    const repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if (slides.length == i) {
                i = 0;
            }

            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 5000);
    };
    repeater();
};
repeat();
