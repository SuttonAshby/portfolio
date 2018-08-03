$( document ).ready(function() {
    
});

// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

$(".worksCode").hover(function(){
  $(this).removeClass("triBL");
  let work = $(this).attr("id").split("-")[0]
  work = `#${work}-Site`
  $(work).css("opacity", 0)
}, function(){
  $(".worksCode").addClass("triBL");
  let work = $(this).attr("id").split("-")[0]
  work = `#${work}-Site`
  $(work).css("opacity", 1)
})

$(".worksSite").hover(function(){
  $(this).removeClass("triTR");
  let work = $(this).attr("id").split("-")[0]
  work = `#${work}-Code`
  $(work).css("opacity", 0)
  $(work).css("z-index", 1)
}, function(){
  $(".worksSite").addClass("triTR");
  let work = $(this).attr("id").split("-")[0]
  work = `#${work}-Code`
  $(work).css("opacity", 1)
  $(work).css("z-index", "auto")
})

var nav = $(".nav");

$(window).scroll(function(){
  if($(this).scrollTop() > $(window).height()){
    nav.addClass("navScrolled")
  } else {
    nav.removeClass("navScrolled")
  }
});