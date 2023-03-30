$(function(){
    AOS.init();
    /**
     * @스크롤하면보이는메뉴
     */

    let lastScroll = 0;

    $(window).scroll(function(){
      curr = $(this).scrollTop();
      if(curr > 0){
          $('.header').addClass('fix')
      }else{
          $('.header').removeClass('fix')}
      })
      $(window).trigger('scroll');

    /**
     * @gnb메뉴
     * 
     */

    $('.nav-item').hover(function(){
      $(this).children('.sub-list').addClass('show');
    }, function(){
      $(this).children('.sub-list').removeClass('show');
    })

    /**
     * @태블릿부터나오는서브메뉴누를때
     */
    $('.btn-menu').click(function(){
      $('.side-nav, .bg').addClass('on')
      $('body').css('overflow', 'hidden')
    })
    $('.btn-close, .bg').click(function(){
      $('.side-nav, .bg').removeClass('on')
      $('body').css('overflow', 'auto')
    })
    

    /**
     * @news스와이퍼
     */

    var swiper = new Swiper(".newsswiper", {
      slidesPerView:1, //모바일
      spaceBetween: 10, //모바일
      
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints:{
        768:{ //768 이상
          slidesPerView:2,
          spaceBetween: 20,
        },
         1025:{ //1025 이상
          slidesPerView:2.2,
          spaceBetween: 20,
        },
        1400:{ //1400-이상
         slidesPerView: 3.3,
          spaceBetween: 40,
        }
      }
    });








    /**
     * @스크롤이벤트
     */
    const options = {
      root: null, // viewport
      rootMargin: "0px",
      threshold: .02,
    }
    
    const observer = new IntersectionObserver(entries => {
      curr = $(this).scrollTop();
      entries.forEach(entry => {
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        } else {
          
          if (curr > lastScroll) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        }
        lastScroll = curr;
        });
    }, options);
    
    const scrollList = document.querySelectorAll('.sc-intro .txt-box, .img-box, .sc-product .group-title, .sc-product .img-wrap, .sc-banner, .sc-tech .txt-area, .sc-tech .headline, .sc-partner .headline, .sc-partner .partner-list, .sc-tech .img-wrap, .sc-news .headline, .sc-news .group-btn, .sc-news .swiper.newsswiper .swiper-slide.news-item');
    // const scrollList = document.querySelectorAll('[data-scroll]');
    
    scrollList.forEach(el => observer.observe(el));

})