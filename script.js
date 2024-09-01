let navbar = document.querySelector('.header .navbar');
let searchform = document.querySelector('.header .search-form');
let loginform = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');



document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchform.classList.remove('active');
    loginform.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () => {
    searchform.classList.toggle('active');
    loginform.classList.remove('active');
    navbar.classList.remove('active');
    contactInfo.classList.remove('active');


};

document.querySelector('#login-btn').onclick = () => {
    loginform.classList.toggle('active');
    searchform.classList.remove('active');
    navbar.classList.remove('active');

};

document.querySelector('#info-btn').onclick = () => {
    contactInfo.classList.add('active');
};

document.querySelector('#close-contact-info').onclick = () => {
    contactInfo.classList.remove('active');
};

window.onscroll = () => {
    // navbar.classList.remove('active');

    contactInfo.classList.remove('active');

};
// Initialize Swiper 
    var swiper = new Swiper(".home-slider", {
      pagination: {
        // el: ".swiper-pagination",
        // type: "progressbar",
        loop:true,
        grabcursor:true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
    var swiper = new Swiper(".reviews-slider", {
        pagination: {
          // el: ".swiper-pagination",
          // type: "progressbar",
          loop:true,
          grabcursor:true,
        breakpoints:{
            640:{
                slidesPerView:1,
            },
            768:{
                slidesPerView:2,
            },
            991:{
              slidesPerView:3,
            },
        },
        }
      });
  
