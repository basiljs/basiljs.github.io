/* global $ */
export default function mobileNav() {

  $('.nav-o-meter').on('click', function() {
    $(this).toggleClass('opened');
    $('.main-menu').toggle();
    $('.main-menu').find('li a').bind('click', function() {
      console.log('bound click');
      console.log(this);
      if ($('.nav-o-meter').hasClass('opened')) {
        $('.nav-o-meter').toggleClass('opened');
        $('.main_menu').toggle();
      }
    });
  });
}
