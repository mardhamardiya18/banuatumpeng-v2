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
    const sliderProduk = new Splide("#sliderProduk", {
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

    const sliderTesti = new Splide( '#sliderTesti', {
        perPage: 4,
        perMove: 1,
        gap: '2rem',
       
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
        
      } );

      const sliderBlog = new Splide("#sliderBlog", {
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
  
    sliderTesti.mount();
    sliderProduk.mount();
    sliderBlog.mount();
  } );


  