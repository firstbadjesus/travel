(function () {
   const header = document.querySelector('.header');
   window.onscroll = () => {
      if (window.pageYOffset > 50) {
         header.classList.add('header_active');
      } else {
         header.classList.remove('header_active');
      }
   };
}());

// burger 

(function () {
   const burgerItem = document.querySelector('.burger');
   const menu = document.querySelector('.header__nav');
   const muneCloseItem = document.querySelector('.header__nav-close');
   burgerItem.addEventListener('click', () => {
      menu.classList.add('header__nav_active');
   });
   muneCloseItem.addEventListener('click', () => {
      menu.classList.remove('header__nav_active');
   });
}());

