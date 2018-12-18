$(document).on('click','.nav-link',function(e){
  e.preventDefault()
  let target = $(this).attr('href');
  $('html,body').animate({
    scrollTop: $(target).offset().top
  },500)
});


$(window).scroll(function(e){
  if($(window).scrollTop() > 0){
    $("nav,.name").addClass("nattop");
  }else{
    $("nav,.name").removeClass("nattop");
  }
});