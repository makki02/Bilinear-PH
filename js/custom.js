// Navigation Shrink
function init() {
  window.addEventListener('scroll', function(e){
    var distanceY = window.pageYOffset || document.documentElement.scrollTop,
      shrinkOn = 100,
      header = document.querySelector("header");
    if (distanceY > shrinkOn) {
      classie.add(header,"smaller");
    } else {
      if (classie.has(header,"smaller")) {
         classie.remove(header,"smaller");
      }
    }
  });
}

window.onload = init();

// Scroll down arrow
$('a.arrow-slide').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 800);
  return false;
});

// Scroll down logo
$('a.logo-a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 800);
  return false;
});

// Scroll down mob menu
$('.overlay nav ul li a').click(function(){
  $('html, body').animate({
    scrollTop: $( $(this).attr('href') ).offset().top
  }, 800);
  return false;
});

$(document).ready(function () {
  $(document).on("scroll", onScroll);
  
  //smoothscroll
  $('header nav ul li a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");
      
      $('header nav ul li a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');
    
      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 800, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('header nav ul li a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('header nav ul li a').removeClass("active");
        currLink.addClass("active");
    }
    else{
        currLink.removeClass("active");
    }
  });
}


//carousel logo
(function(){
  $('#carousel_logo').carousel({ interval: 3600 });
}());

(function(){
  $('.carousel-logo .item').each(function(){
    var itemToClone = $(this);

    for (var i=1;i<4;i++) {
      itemToClone = itemToClone.next();

      // wrap around if at end of item collection
      if (!itemToClone.length) {
        itemToClone = $(this).siblings(':first');
      }

      // grab item, clone, add marker class, add to collection
      itemToClone.children(':first-child').clone()
        .addClass("cloneditem-"+(i))
        .appendTo($(this));
    }
  });
}());