(function($) {
  
  $('.nav-main .sidebar').click(function($event) {
    $event.preventDefault();
    $('.aside').toggleClass('hide');
  });

}(jQuery));