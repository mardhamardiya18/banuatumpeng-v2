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
  const sliderPilihan = new Splide("#sliderPilihan", {
    perPage: 4,
    perMove: 1,
    gap: '2rem',
    autoWidth : true,
    focus  : 'center',
    pagination: false,
    arrows: false,
    breakpoints:{
      500:{
        perPage: 1,
        pagination: true
      },
      1500:{
        gap: '1rem',
      }
    }
  });

  const sliderTopOrder = new Splide("#sliderTopOrder", {
    perPage: 4,
    perMove: 1,
    gap: '2rem',
    autoWidth : true,
    focus  : 'center',
    pagination: false,
    arrows: false,
    breakpoints:{
      500:{
        perPage: 1,
        pagination: true
      },
      1500:{
        gap: '1rem',
      }
    }
  });

  const sliderTopView = new Splide("#sliderTopView", {
    perPage: 4,
    perMove: 1,
    gap: '2rem',
    autoWidth : true,
    focus  : 'center',
    pagination: false,
    arrows: false,
    breakpoints:{
      500:{
        perPage: 1,
        pagination: true
      },
      1500:{
        gap: '1rem',
      }
    }
  });

  const sliderBanner = new Splide("#sliderBanner", {
    rewind: true,
    gap: 20,
    pagination: true,
    arrows: false,
    autoplay: true
    
  });

 
  sliderPilihan.mount();
  sliderTopOrder.mount();
  sliderTopView.mount();
  sliderBanner.mount();
} );


  