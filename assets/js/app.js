$(function() {

    // Nav Toggle on mobile
    // =====================================
    let navToggle = $('#navToggle');
    let nav = $('#nav');

    navToggle.on('click', function(event) {
        event.preventDefault();

        $(this).toggleClass('burger--active');
        nav.toggleClass('show');
    });

    $(window).on('resize', function() {
        navToggle.removeClass('burger--active');
        nav.removeClass('show');
    });




    let intro = $('#intro');
    let header = $('#header');
    let introH = intro.innerHeight();
    let headerH = header.innerHeight();
    let scrollTop = $(window).scrollTop();


    // Header class on scroll
    // =====================================
    headerScroll();

    $(window).on('scroll resize', function() {
        headerScroll()
    });

    function headerScroll() {
        introH = intro.innerHeight();
        headerH = header.innerHeight();

        let scrollTop = $(this).scrollTop();

        if( scrollTop >= (introH - headerH) ) {
            header.addClass("header--dark");
        } else {
            header.removeClass("header--dark");
        }
    }


    // Smooth Scroll to sections
    // =====================================
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let scrollEl = $(this).data("scroll");
        let scrollElPos = $(scrollEl).offset().top;

        navToggle.removeClass('burger--active');
        nav.removeClass('show');

        $("html, body").animate({
            scrollTop: scrollElPos
        }, 1000)

        console.log(scrollElPos);
    });


    // ScrollSpy
    // =====================================
    let windowH = $(window).height();

    scrollSpy(scrollTop);

    $(window).on("scroll", function() {
        scrollTop = $(this).scrollTop();

        scrollSpy(scrollTop);
    });

    function scrollSpy(scrollTop) {
        $("[data-scrollspy]").each(function() {

            let $this = $(this);
            let sectionId = $this.data('scrollspy');
            let sectionOffset = $this.offset().top;
            sectionOffset = sectionOffset - (windowH * 0.33333);

            if(scrollTop >= sectionOffset) {
                $('#nav [data-scroll]').removeClass('nav__link--active');
                $('#nav [data-scroll="' + sectionId + '"]').addClass('nav__link--active');
            }

            if(scrollTop == 0) {
                $('#nav [data-scroll]').removeClass('nav__link--active');
            }
        });
    }


    //Slick slider https://kenwheeler.github.io/slick/
    // =====================================

    //Entertainment Slider
    $("[data-slider]").slick ({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 800,
        adaptiveHeight: true,
        touchThreshold: 8
    });



    // Collapse
    // =====================================
    $(".faq__header").click(function(event) {
        if($('.faq').hasClass('reversal')){
            $('.faq__header').not($(this)).removeClass('faq__header--active');
            $('.faq__content').not($(this).next()).slideUp(300);
        }

        $(this).toggleClass('faq__header--active').next().slideToggle(300);

    });


    // Button scroll up
    // ****************
    window.addEventListener('scroll', function () {
        let scroll = document.querySelector('.scroll-up-link');
        scroll.classList.toggle('scroll-up-link--showed', window.scrollY > 650)
    });
});








