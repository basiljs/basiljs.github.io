$(document).ready(function() {
  specialChars();
  createGuideLines();
  // MOBILE NAVIGATION
  $('.nav-o-meter').on('click', function() {
    $(this).toggleClass('opened');
    $('.main-menu').toggle();
    $('.main-menu').find('li a').bind('click', function() {
      if ($('.nav-o-meter').hasClass('opened')) {
        $('.nav-o-meter').toggleClass('opened');
        $('.main_menu').toggle();
      }
    });
  });
});

function specialChars() {
  $('a.textgrow').each(function() {
    const chars = $(this).text().split('');
    const that = $(this);
    that.empty();
    $.each(chars, function(i, char) {
      const fontSize = 30 - (2 * i);
      const style = `border-bottom-width: ${ (i+1) }px; font-size: ${fontSize }px; top: -${(i+(2*i))}px;`;
      that.append('<span style="' + style + '">' + char + '</span>');
    });
  });
}

function createGuideLines() {
  $('.guidelines').append('<div class="bottom_lines">');
  for (var b = 0; b < 5; b++) {
    $('.bottom_lines').append('<div class="bottomLine line_' + (b + 1) + '">');
  }
  $('.guidelines').append('<div class="right_lines">');
  for (var r = 0; r < 3; r++) {
    $('.right_lines').append('<div class="right_line line_' + (r + 1) + '">');
  }
  $('.guidelines').append('<div class="page_lines">');
  for (var i = 0; i < 4; i++) {
    $('.page_lines').append('<div class="line line_' + (i + 1) + '">');
  }
}