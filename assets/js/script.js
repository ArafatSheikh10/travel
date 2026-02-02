$(document).ready(function() {

    // 1. AOS Animation
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }










    // 2. Sticky Menu-Bar
    const navbar = document.querySelector(".nav-area");
    const stickyPoint = 100;

    $(window).on('scroll', function() {
        if (window.pageYOffset >= stickyPoint) {
            navbar.classList.add("sticky");
        } else {
            navbar.classList.remove("sticky");
        }
    });








    // 3. Nav Menu Sidebar (Mobile)
    $('.nav_trigger').on('click', function() {
        $('.sidebar, .overlay').addClass('slide_sidebar');
    });

    $('.nav_dismess, .overlay').on('click', function() {
        $('.sidebar, .overlay').removeClass('slide_sidebar');
    });










    // 4. Nice Select
    if ($.fn.niceSelect) {
        $('select').niceSelect();
    }










    // 5. Smooth Scroll
    $('.nav-menu a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var target = $(this.hash);
        if (target.length) {
            var offset = $(window).width() < 768 ? 50 : 0;
            $('html, body').animate({
                scrollTop: target.offset().top - offset
            }, 1000);
        }
    });








    // 6. Main Nav Dropdown
    $(".nav-menu > li.expanded > a").on('click', function(e) {
        e.preventDefault();
        var $this = $(this);
        var $dropdown = $this.siblings(".dropdown-content");
        
        $(".dropdown-content").not($dropdown).slideUp();
        $dropdown.stop(true, true).slideToggle(400);
        $this.find(".fa-angle-down").toggleClass("rotate-arrow");
    });










    // 7. Filter Dropdowns
    $(".filter-menu > li > a, .filtering-box h4").on('click', function(e) {
        e.preventDefault();
        $(this).siblings(".dropdown-content, .filtering-box__dropdown").slideToggle();
        $(this).find('.dropdown-angel').toggleClass('active');
    });










    // 8. Owl Carousels 
    const commonOptions = {
        loop: true,
        nav: true,
        dots: true,
        dotsEach: true,
        autoplay: true,
        autoplayTimeout: 3000,
        smartSpeed: 1000
    };







    //  Adventure Travel Slider
    $('.adventure_travel-image__carousel').owlCarousel({
        ...commonOptions,
        margin: 20,
        items: 1
    });










    //  Client Reviews Slider
    $('.client_reviews-wraper').owlCarousel({
        ...commonOptions,
        margin: 40,
        nav: false,
        dots: false,
        responsive: { 0: { items: 1, margin: 20, }, 600: { items: 2, margin: 20, }, 1000: { items: 2 } }
    });




    //  Client Reviews Slider
    $('.client-reviews_wraper ').owlCarousel({
        ...commonOptions,
        margin: 40,
        nav: false,
        dots: false,
        responsive: { 0: { items: 1,} }
    });









    //  Single Package Slider
    $('.single-image__carousel').owlCarousel({
        ...commonOptions,
        margin: 20,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } }
    });









    //  Preview Package Slider
    $('.preview-package__wraper').owlCarousel({
        ...commonOptions,
        margin: 20,
        nav: false,
        dots: false,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 2 } }
    });







    //  Preview Package Slider
    $('.fetured-card__wraper-full-wide').owlCarousel({
        ...commonOptions,
        margin: 20,
        nav: false,
        dots: false,
        responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } }
    });






    
    //  Client Reviews Slider
    $('.client-reviews_wraper').owlCarousel({
        ...commonOptions,
        margin: 40,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } }
    });
    





    //  Carousel Area Slider
    $('.fetured-card__wraper-carousel').owlCarousel({
        ...commonOptions,
        margin: 40,
        responsive: { 0: { items: 1 }, 600: { items: 1 }, 1000: { items: 1 } }
    });






    // 9. Filter Range Slider
    const sliderInput = document.querySelector("#input-slider");
    const numberLabel = document.querySelector(".number--label");

    if (sliderInput) {
        sliderInput.addEventListener("input", () => {
            const value = sliderInput.value;
            if (numberLabel) numberLabel.textContent = `$ ${value}`;
            const percent = ((value - sliderInput.min) / (sliderInput.max - sliderInput.min)) * 100;
            sliderInput.style.backgroundSize = percent + '% 100%';
        });
    }







});