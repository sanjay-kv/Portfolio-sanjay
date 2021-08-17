// ================ NAVIGATION MENU ==============
(() => {

    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const navMenu = document.querySelector('.nav-menu');
    const closeNavBtn = navMenu.querySelector('.close-nav-menu');

    hamburgerBtn.addEventListener('click', showNavMenu);
    closeNavBtn.addEventListener('click', hideNavMenu);

    function showNavMenu() {
        navMenu.classList.add('open');
        bodyScrollingToggle();

        document.onkeydown = (e) => {
            if (e.keyCode == 27) {
                hideNavMenu();
            }
        }
    }
    function hideNavMenu() {
        navMenu.classList.remove('open');
        fadeOutEffect();
        bodyScrollingToggle();

        document.onkeydown = (e) => {
            if (e.keyCode == 27) {
                null;
            }
        }
    }
    function fadeOutEffect() {
        document.querySelector('.fade-out-effect').classList.add('active');
        setTimeout(() => {
            document.querySelector('.fade-out-effect').classList.remove('active');
        }, 300)
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('link-item')) {
            if (e.target.hash !== '') {
                e.preventDefault();
                const hash = e.target.hash;

                document.querySelector('section.active').classList.add('hide');
                document.querySelector('section.active').classList.remove('active');

                document.querySelector(hash).classList.add('active');
                document.querySelector(hash).classList.remove('hide');

                navMenu.querySelector('.active').classList.add('outer-shadow', 'hover-in-shadow');
                navMenu.querySelector('.active').classList.remove('active', 'inner-shadow');

                if (navMenu.classList.contains('open')) {
                    e.target.classList.add('active', 'inner-shadow');
                    e.target.classList.remove('outer-shadow', 'hover-in-shadow');

                    hideNavMenu();
                } else {
                    let navItems = navMenu.querySelectorAll('.link-item');
                    navItems.forEach((item) => {
                        if (hash === item.hash) {
                            item.classList.add('active', 'inner-shadow');
                            item.classList.remove('outer-shadow', 'hover-in-shadow');
                        }
                    });
                    fadeOutEffect();
                }
                window.location.hash = hash;
            }
        }
    });

})();

//  ============= ABOUT SECTION TABS =============
(() => {
    const aboutSection = document.querySelector(".about-section");
    const tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-item') && !e.target.classList.contains('active')) {
            const target = e.target.getAttribute('data-target');
            // nonaktif tab active sebelumnya 
            tabsContainer.querySelector('.active').classList.remove('outer-shadow', 'active');
            // mengaktifkan tab target
            e.target.classList.add('active', 'outer-shadow');

            // menonaktifkan tab content sebelumnya
            aboutSection.querySelector('.tab-content.active').classList.remove('active');
            // mengaktifkan tab content yang dipilih
            aboutSection.querySelector(target).classList.add('active');
        }
    });
})();


function bodyScrollingToggle() {
    document.body.classList.toggle('stop-scrolling');
}


// =============== POSRTFOLIO FILTER AND POPUP =============
(() => {

    const filterContainer = document.querySelector('.portfolio-filter');
    const portfolioItemsContainer = document.querySelector('.portfolio-items');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    const popup = document.querySelector('.portfolio-popup');
    const prevBtn = popup.querySelector('.pp-prev')
    const nextBtn = popup.querySelector('.pp-next');
    const closeBtn = popup.querySelector('.pp-close');
    const projectDetailsContainer = popup.querySelector('.pp-details');
    const projectDetailsBtn = popup.querySelector('.pp-project-details-btn');

    let itemIndex, slideIndex, screenshots;

    // filter portfolio items
    filterContainer.addEventListener('click', (e) => {
        if (e.target.classList.contains('filter-item') && !e.target.classList.contains('active')) {
            // nonaktif tab active sebelumnya 
            filterContainer.querySelector('.active').classList.remove('outer-shadow', 'active');
            // mengaktifkan tab target
            e.target.classList.add('active', 'outer-shadow');

            const target = e.target.getAttribute('data-target');

            portfolioItems.forEach((item) => {
                const category = item.getAttribute('data-category');
                if (category === target || target === 'all') {
                    item.classList.remove('hide');
                    item.classList.add('show');
                } else {
                    item.classList.remove('show');
                    item.classList.add('hide');
                }
            })
        }
    })

    // item container
    portfolioItemsContainer.addEventListener('click', (e) => {
        const itemClosest = e.target.closest('.portfolio-item-inner');
        if (itemClosest) {
            // mendapatkan index portfolioItem
            const portfolioItem = itemClosest.parentElement;

            itemIndex = Array.from(portfolioItem.parentElement.children).indexOf(portfolioItem);
            screenshots = portfolioItems[itemIndex].querySelector('.portfolio-item-img img').getAttribute('data-screenshots');

            // konversi data-screenshots ke array
            screenshots = screenshots.split(',');
            if (screenshots.length === 1) {
                nextBtn.style.display = "none";
                prevBtn.style.display = "none";
            } else {
                nextBtn.style.display = "block";
                prevBtn.style.display = "block";

            }

            slideIndex = 0;
            popupTogle();
            popupSlideShow();
            popupDetails();
        }
    });

    function close() {
        exitTogle();

        projectDetailsContainer.classList.remove('active');
        projectDetailsContainer.style.maxHeight = 0 + 'px';

        projectDetailsBtn.querySelector('i').classList.remove('fa-minus');
        projectDetailsBtn.querySelector('i').classList.add('fa-plus');
    }

    closeBtn.addEventListener('click', () => {
        close()
    });

    function exitTogle() {
        popup.classList.toggle('open');
        bodyScrollingToggle();

        document.onkeydown = (e) => {
            if (e.keyCode == 27) {
                null;
            }
            return;
        }
    }

    function popupTogle() {
        popup.classList.toggle('open');
        bodyScrollingToggle();

        document.onkeydown = (e) => {
            if (e.keyCode == 27) {
                close();
            }
            if (e.keyCode == 39) {
                nextSlide();
            }
            if (e.keyCode == 37) {
                prevSlide();
            }
            return;
        }
    }

    function popupSlideShow() {
        const imgSrc = screenshots[slideIndex];
        const popupImg = popup.querySelector('.pp-img');

        // preloader
        const preloader = popup.querySelector('.pp-loader')
        preloader.classList.add('active');

        popupImg.src = imgSrc;

        // hilangkan preloader
        popupImg.onload = () => {
            preloader.classList.remove('active');
        }

        popup.querySelector('.pp-counter').innerHTML = (slideIndex + 1) + ' of ' + screenshots.length;
    }


    // next slide
    function nextSlide() {
        if (slideIndex == screenshots.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        popupSlideShow()
    }
    nextBtn.addEventListener('click', () => {
        nextSlide();
    });

    // prev slide
    function prevSlide() {
        if (slideIndex == 0) {
            slideIndex = screenshots.length - 1;
        } else {
            slideIndex--;
        }
        popupSlideShow()
    }
    prevBtn.addEventListener('click', () => {
        prevSlide();
    });

    function popupDetails() {
        const details = portfolioItems[itemIndex].querySelector('.portfolio-item-details').innerHTML;
        popup.querySelector('.pp-project-details').innerHTML = details;

        const title = portfolioItems[itemIndex].querySelector('.portfolio-item-title').innerHTML;
        popup.querySelector('.pp-title h2').innerHTML = title;

        const category = portfolioItems[itemIndex].getAttribute('data-category');
        popup.querySelector('.pp-project-category').innerHTML = category.split('-').join(' ');

    }

    projectDetailsBtn.addEventListener('click', () => {
        popupDetailsToggle();
    });

    function popupDetailsToggle() {
        if (projectDetailsContainer.classList.contains('active')) {
            projectDetailsBtn.querySelector('i').classList.remove('fa-minus');
            projectDetailsBtn.querySelector('i').classList.add('fa-plus');

            projectDetailsContainer.classList.remove('active');
            projectDetailsContainer.style.maxHeight = 0 + 'px';
        } else {
            projectDetailsBtn.querySelector('i').classList.remove('fa-plus');
            projectDetailsBtn.querySelector('i').classList.add('fa-minus');

            projectDetailsContainer.classList.add('active');
            projectDetailsContainer.style.maxHeight = projectDetailsContainer.scrollHeight + 'px';
        }
    }

})();


//  ====================  TESTIMONIAL SLIDER =================

(() => {

    const sliderContainer = document.querySelector('.testi-slider-container');
    const slides = sliderContainer.querySelectorAll('.testi-item');
    const slideWidth = sliderContainer.offsetWidth;
    const prevBtn = document.querySelector('.testi-slider-nav .prev');
    const nextBtn = document.querySelector('.testi-slider-nav .next');
    const activeSlide = sliderContainer.querySelector('.testi-item.active');
    let slideIndex = Array.from(activeSlide.parentElement.children).indexOf(activeSlide);
    console.log(slideIndex);

    // set width dari semua slide
    slides.forEach((slide) => {
        slide.style.width = slideWidth + 'px';
    });
    // set width sliderContainer
    sliderContainer.style.width = `${slideWidth * slides.length}px`;

    // pindah2 item
    function slider() {
        // nonaktif class active
        sliderContainer.querySelector('.testi-item.active').classList.remove('active');

        // menambahkan class active yang baru
        slides[slideIndex].classList.add('active');

        sliderContainer.style.marginLeft = `-${slideWidth * slideIndex}px`;
    }

    nextBtn.addEventListener('click', () => {
        if (slideIndex === slides.length - 1) {
            slideIndex = 0;
        } else {
            slideIndex++;
        }
        slider();
    });
    prevBtn.addEventListener('click', () => {
        if (slideIndex === 0) {
            slideIndex = slides.length - 1;
        } else {
            slideIndex--;
        }
        slider();
    });

    slider();


})();


// =============== MENYEMBUNYIKAN SEMUA SECTION KECUALI ACTIVE ==========
(() => {

    const sections = document.querySelectorAll('.section');
    sections.forEach((section) => {
        if (!section.classList.contains('active')) {
            section.classList.add('hide');
        }
    })

})()


window.addEventListener('load', () => {
    document.querySelector('.preloader').classList.add('fade-out');
    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none';
    }, 600);
})