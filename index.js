

// scrolling effect: https://forum.squarespace.com/topic/62680-how-can-i-create-a-bouncing-down-arrow/
// scrolling effect animation
$(document).ready(function(){
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {
  
        // Make sure this.hash has a value before overriding default behavior
        if (this.attributes.href.value.substr(0, 1) === '#') {
            // Prevent default anchor click behavior
            event.preventDefault();
    
            // Store hash
            var hash = this.hash;
    
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
        
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
            });
        } // End if
    });
});

$(window).scroll(function() {
    progressBar();

    if ($(this).scrollTop()>300)
    {
        $('.bounce').hide(1000);
    }
    else
    {
      $('.bounce').show(1000);
    }

    // fade in effect
});

$(window).on("load",function() {
    function fade(pageLoad) {
      var windowTop=$(window).scrollTop(), windowBottom=windowTop+$(window).innerHeight();
      var min=0.3, max=1, threshold=0.01;
      
      $(".project").each(function() {
        /* Check the location of each desired element */
        var objectHeight=$(this).outerHeight(), objectTop=$(this).offset().top, objectBottom=$(this).offset().top+objectHeight;
        
        /* Fade element in/out based on its visible percentage */
        if (objectTop < windowTop) {
          if (objectBottom > windowTop) {$(this).fadeTo(0,min+((max-min)*((objectBottom-windowTop)/objectHeight)));}
          else if ($(this).css("opacity")>=min+threshold || pageLoad) {$(this).fadeTo(0,min);}
        } else if (objectBottom > windowBottom) {
          if (objectTop < windowBottom) {$(this).fadeTo(0,min+((max-min)*((windowBottom-objectTop)/objectHeight)));}
          else if ($(this).css("opacity")>=min+threshold || pageLoad) {$(this).fadeTo(0,min);}
        } else if ($(this).css("opacity")<=max-threshold || pageLoad) {$(this).fadeTo(0,max);}
      });
    } 
    fade(true); //fade elements on page-load
    $(window).scroll(function(){fade(false);}); //fade elements on scroll
});

// progress bar
// When the user scrolls the page, execute myFunction
//window.onscroll = function() {myFunction()};

function progressBar() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}