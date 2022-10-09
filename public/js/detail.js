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

document.addEventListener( 'DOMContentLoaded', function() {
  const mainSlider = new Splide("#main-carousel", {
    type: "fade",
    fixedHeight: 450,
    rewind: true,
    pagination: false,
    arrows: false,
    breakpoints: {
      400: {
        fixedHeight: 220,
      },
    },
  });

  const thumbnailSlider = new Splide("#thumbnail-carousel", {
    perPage: 4,
    gap: 20,
    fixedWidth: 145,
    fixedHeight: 145,
    rewind: true,
    pagination: false,
    isNavigation: true,
    focus: "center",
    arrows: false,
    breakpoints: {
      1500:{
        fixedWidth: 120,
        fixedHeight: 120,
      },
      400: {
        fixedWidth: 70,
        fixedHeight: 70,
        perPage: 4,
        gap: 10,
      },
    },
  });

  const testiSlider = new Splide("#testiSlider", {
    perPage: 2,
    gap: 20,
    rewind: true,
    pagination: false,
    arrows: false,
    autoplay: true,
    type   : 'loop',
    breakpoints: {
      500: {
        perPage: 1
      }
    }
    
  });

  const rekomenSlider = new Splide("#rekomenSlider", {
    perPage: 4,
    gap: 20,
    rewind: true,
    pagination: false,
    arrows: false,
    autoplay: true,
    breakpoints:{
      956: {
        perPage: 3
      },
      500: {
        perPage: 1
      }
    }
    
  });

  mainSlider.sync(thumbnailSlider);
  mainSlider.mount();
  thumbnailSlider.mount();
  testiSlider.mount();
  rekomenSlider.mount();

} );



  