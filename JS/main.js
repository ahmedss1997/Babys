
$(document).ready(function () {
  
  // Loading Screen

  

  setTimeout(function () {
    $('.loading .fix').fadeOut(2000, function () {
      $(this).parent().fadeOut(2000, function () {
        // $("body").css({
        //   overflow: "auto",
        //   overflowX: "hidden",
        // });
          // body NiceScroll 
          
          // $("html").niceScroll({
          //   cursorcolor:"#3EB2CF",
          //   horizrailenabled: false
          // });
        $(this).remove();
      });
    });
  }, 1000);
  
  
  
  
  // Show / Hidden Slide Navbar
  
  $(window).scroll(function () {
    var navbar = $('.navbar-header'),
        brand = $('.navbar-header a.navbar-brand'),
        myUl  = $(".navbar-header ul.navbar-nav");
    if ($(window).scrollTop() >= navbar.height()) {
      brand.hide();
      myUl.css({marginTop: "0px", marginRight: "250px"});
      navbar.addClass('scrolled');
    } else {
      brand.show();
      myUl.css({marginTop: "30px", marginRight: "0px"});
      navbar.removeClass('scrolled');
    }
  });
  
  
  // Show / Hidden Menue Navbar
  
  $(".navbar-header i.fa-times").fadeOut(10);
  $(".navbar-header button.navbar-toggle").on("click", function () {
    $(".menue").toggleClass('hidden');
    $(this).fadeOut(500, function () {
      $(".navbar-header i.fa-times").fadeIn(500);
    });
  });
  $(".navbar-header i.fa-times").on("click", function () {
    $(".menue").toggleClass('hidden');
    $(this).fadeOut(500, function () {
      $(".navbar-header button.navbar-toggle").fadeIn(500);
    });
  });
  

  // header slider
  
  $('.autoplay').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false
  });

  // our clients slider
  
  $('.testi').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
  
  // Resize Responsive Layer
  
  var wid = $(".event img").width();
  var hei = $(".event img").height();
  $(".event .layer").width(wid).height(hei);
  $(window).on("resize", function () {
    var wid = $(".event img").width();
    var hei = $(".event img").height();
    $(".event .layer").width(wid).height(hei);
  });
  
  
  // Slide Gallery
  
  $('.gallery').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  });
  
  
  // Scroll To Button
  
  var scrollButton = $("#scroll-top");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= $('section.our-features').offset().top) {
      scrollButton.fadeIn();
    } else {
      scrollButton.fadeOut();
    }
  });
  scrollButton.click(function () {
    $("html,body").animate({scrollTop: 0}, 2000);
  });
  
});


