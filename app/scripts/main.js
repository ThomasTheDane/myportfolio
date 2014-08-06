var doLayouts = function(){
  if($(window).width() > 992){
    var cw = $('.project').width();
    $('.project').css({'height':cw-100+'px'});
  }else if($(window).width() > 992){
    var cw = $('.project').width();
    $('.project').css({'height':cw-(cw / 2)+'px'});
  }
};


$(function() {

  doLayouts();
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname) {

      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });

  $("#menu-close").click(function(e) {
    e.preventDefault();
    $("#sidebar-wrapper").toggleClass("active");
  });


  $(".project .text").hide();

  $(".project").mouseenter(function(e){
    $(this).find(".text").slideDown({
      queue: false
    });
  });
  $(".project").mouseleave(function(e){
    $(this).find(".text").slideUp();
  });


  $( window ).resize(doLayouts);
});