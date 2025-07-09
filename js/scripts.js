/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank// Use this file to add JavaScript to your project

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const experienceCards = document.querySelectorAll('.experience-card');

    filterButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-filter');
            experienceCards.forEach((card) => {
                if (card.getAttribute('data-category') === category) {
                    card.classList.remove('d-none');
                } else {
                    card.classList.add('d-none');
                }
            });
        });
    });
});

