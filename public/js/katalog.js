$(document).ready(() => {
    $(document).scroll(() => {
        $('.navbar').toggleClass('active', $(this).scrollTop() > $('.navbar').height())
        if($(this).scrollTop() > $('.navbar').height()){
            $('.logoNav').css('width', '60px')
        $('.logoNav').css('height', '60px')
        }else{
            $('.logoNav').css('width', '70px')
            $('.logoNav').css('height', '70px')
        }
        
    })
})

  var swiper = new Swiper(".myBanner", {
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
        
      },
      pagination: {
        el: ".swiper-pagination",
      },
  });

  var swiper = new Swiper(".sliderPilihan", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        
      },
      pagination: {
        el: ".swiper-pagination",
      },
    breakpoints: {
        1500: {
            slidesPerView: 4,
            spaceBetween: 30,
            autoplay: false,
            loop: false,
        },
        1024 : {
            slidesPerView: 4,
            spaceBetween: 10,
            autoplay: false,
            loop: false,
        },
        500: {
            slidesPerView: 3,
            spaceBetween: 10,
        }

    }
  });

  var swiper = new Swiper(".sliderTop", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        
      },
      pagination: {
        el: ".swiper-pagination",
      },
    breakpoints: {
        1500: {
            slidesPerView: 4,
            spaceBetween: 30,
            autoplay: false,
            loop: false,
        },
        1024 : {
            slidesPerView: 4,
            spaceBetween: 10,
            autoplay: false,
            loop: false
        },
        500: {
            slidesPerView: 3,
            spaceBetween: 10,
        }

    }
  });

  var swiper = new Swiper(".sliderPopuler", {
    slidesPerView: 1,
    spaceBetween: 0,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        
      },
      pagination: {
        el: ".swiper-pagination",
      },
    breakpoints: {
        1500: {
            slidesPerView: 4,
            spaceBetween: 30,
            autoplay: false,
            loop: false,
        },
        1024 : {
            slidesPerView: 4,
            spaceBetween: 10,
            autoplay: false,
            loop: false
        },
        500: {
            slidesPerView: 3,
            spaceBetween: 10,
        }

    }
  });

  