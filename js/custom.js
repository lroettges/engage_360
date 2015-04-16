// custom

// Navbar Smooth Scroll
  $("#navbar a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 950, function(){

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });
  });
// End Navbar Smooth Scroll

// buttons Smooth Scroll
  $(".transitionbutton a[href^='#']").on('click', function(e) {

    // prevent default anchor click behavior
    e.preventDefault();

    // store hash
    var hash = this.hash;

    // animate
    $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 950, function(){

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });
  });
// End Navbar Smooth Scroll

// change my homepage
function whoIsEngage(a, b) {
    document.getElementById("our_description").innerHTML = "a long winded description";
    document.getElementById("our_title").innerHTML = "";
}
//end my homepage 

//alternating images
   // Initialization
$('#vennD li:first').addClass('show');
$('#vennD li:gt(0)').hide();

function loopImages() {
    // Retrieve the currently shown <li>, try to find the next <li>
    var next = $("#vennD li.show").next('li');
    // If not foudn, then retrieve the first one in the list
    if (!next.length) next = $("#vennD li:first");
    // Remove ".show", and hide the current <li>
    $("#vennD li.show").removeClass('show').fadeOut(500);
    // Add ".show" and show next <li>
    next.addClass('show').fadeIn(500);
}

intervalId = setInterval(loopImages, 1000);

$('.targ').hover(function () {
    clearInterval(intervalId);
    var tabIndex = $(this).index();
    // Hide & remove ".show"
    $('#vennD li').hide().removeClass('show');
    // Add ".show" & display targeted <li>
    $('#vennD li').eq(tabIndex).addClass("show").show();
}, function () {
    intervalId = setInterval(loopImages, 1000);
});

//end alternating images