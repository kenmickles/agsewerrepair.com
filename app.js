$(function(){
  // resize sections to fit page
  var resizeContent = function(){
    $('section').css('height', 'auto');
    var height = $(window).height();
    $('section').each(function(i, section){
      var $section = $(section);
      if ( $section.height() < height ) {
        $section.height(height);
      }
    })
  };
  $(window).resize(resizeContent);
  resizeContent();

  // slide to section links
  $('#index a, .navbar-fixed-top a').click(function(e){
    e.preventDefault()
    var id = $(this).attr('href');
    var $target = $(id);
    $('html,body').animate({scrollTop: $target.offset().top}, 'slow', function(){
      location.hash = id;
    });
  });

  // show navbar on sections other than index
  $('body').on('activate.bs.scrollspy', function(e) {
    var hash = $(e.target).find('a').attr('href');
    var $nav = $('.navbar-fixed-top');

    if ( hash == '#index' ) {
      $nav.hide();
    }
    else {
      $nav.show();
    }
  });
});