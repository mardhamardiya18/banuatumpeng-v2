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

var swiper = new Swiper(".productLanding", {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    freeMode: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        
      },
    breakpoints: {
        1024 : {
            slidesPerView: 4,
            spaceBetween: 30,
            autoplay: false,
            loop: false
        },
        500: {
            slidesPerView: 3,
            spaceBetween: 20,
        }

    }
  });

  var swiper = new Swiper(".myTesti", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
        
      },
    breakpoints: {
        1024 : {
            slidesPerView: 4,
            spaceBetween: 30,
    
        },
        500: {
            slidesPerView: 2,
            spaceBetween: 20,
        }

    }
  });