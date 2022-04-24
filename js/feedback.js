const accordionTitles = document.querySelectorAll('.accordion-title');
const serviceTitles = document.querySelectorAll('.service-title');
const parent = document.getElementById('parent-service-questions');

accordionTitles.forEach((accordionTitle) => {
    accordionTitle.addEventListener('click', () => {
        const questionHeight = accordionTitle.nextElementSibling.scrollHeight;
        // const current_height = parent.style.maxHeight.split('px')[0];
        const height = parseInt(parent.style.maxHeight);
        // parent.style.maxHeight = current_height === '' ? 0 : parseInt(current_height);
        accordionTitle.classList.toggle('active-header');
        if (accordionTitle.classList.contains('active-header')) {
            accordionTitle.nextElementSibling.style.maxHeight = `${questionHeight}px`;
            parent.style.maxHeight = `${questionHeight + height}px`;
            console.log(parent.style.maxHeight, questionHeight);
        } else {
            accordionTitle.nextElementSibling.style.maxHeight = '0px';
        }
    });
});

serviceTitles.forEach((serviceTitle) => {
    serviceTitle.addEventListener('click', () => {
        const serviceHeight = serviceTitle.nextElementSibling.scrollHeight;
        console.log(serviceHeight);
        serviceTitle.classList.toggle('active-service');
        if (serviceTitle.classList.contains('active-service')) {
            serviceTitle.nextElementSibling.style.maxHeight = `${serviceHeight}px`;
        } else {
            serviceTitle.nextElementSibling.style.maxHeight = '0px';
        }
    });
});
