//Script del slider
new Swiper('.card-wrapper', {
    loop: true,
    spaceBetween: 30,
    //Pagination bullets
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets:true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        //Celulares
        0:{
            slidesPerView:1
        },
        //Tablets
        768:{
            slidesPerView:2
        },
        //Pc
        1024:{
            slidesPerView:3
        },
    }
  });