const header = document.querySelector(".nav-bar");
const sectionOne = document.querySelector(".section-container");
const logo = document.querySelector(".logo");
const dark_logo = document.querySelector(".dark-logo");
const li = document.querySelectorAll(".menu-list");




const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function (
    entries,
    sectionOneObserver
) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            logo.style.display = "none";
            dark_logo.style.display = "flex";
            li.forEach(function (item) {
                item.classList.add("dark-menu");
            })
        } else {
            dark_logo.style.display = "none";
            logo.style.display = "flex"; 
            li.forEach(function (item) {
            item.classList.remove("dark-menu");
            })
        }
    });
},
    sectionOneOptions);

sectionOneObserver.observe(sectionOne);