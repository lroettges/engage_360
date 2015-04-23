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
      }, 1300, function(){

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
      }, 1300, function(){

        // when done, add hash to url
        // (default click behaviour)
        window.location.hash = hash;
      });
  });
// End Navbar Smooth Scroll

// change my homepage
function whoIsEngage(a, b) {
    document.getElementById("our_description").innerHTML = 
    "Engage 360 is Student Union’s commitment to connecting WashU students to St. Louis by developing service opportunities through partnerships with community leaders and organizations. We organize service trips, engage in community projects, and support local organizations. Thanks for checking out our website, have fun exploring and learning more about us! Also feel free to check us out on Facebook or Portfolio.";
    $('#our_title').hide();
    $('#weAre').hide();
     $('.fpgLink').hide();
    
}
//end my homepage 

//alternating images
   // Initialization
$('#trashCan li:first').addClass('show');
$('#trashCan li:gt(0)').hide();

function loopImages() {
    // Retrieve the currently shown <li>, try to find the next <li>
    var next = $("#trashCan li.show").next('li');
    // If not foudn, then retrieve the first one in the list
    if (!next.length) next = $("#trashCan li:first");
    // Remove ".show", and hide the current <li>
    $("#trashCan li.show").removeClass('show').fadeOut(500);
    // Add ".show" and show next <li>
    next.addClass('show').fadeIn(500);
}

intervalId = setInterval(loopImages, 1000);

$('.targ').hover(function () {
    clearInterval(intervalId);
    var tabIndex = $(this).index();
    // Hide & remove ".show"
    $('#trashCan li').hide().removeClass('show');
    // Add ".show" & display targeted <li>
    $('#trashCan li').eq(tabIndex).addClass("show").show();
}, function () {
    intervalId = setInterval(loopImages, 1000);
});

//end alternating images

// change trashCan to text
function throwTrash(a, b) {
    document.getElementById("trashCan").innerHTML = "WILD is a large scale concert put on by SPB. In order to make sure we remain respectful to our WashU neighbors we organize a group of students who are willing to get up early despite a late night of partying at WILD and clean up trash in the neerby neighborhoods that students may have left behind. We feel that it is important to show respect to our neighbors, and that our efforts are necessary in order to improve the reputation of WILD and our WashU students.";

}
//end trashCan to text

// change my homepage
function boxTops(a, b) {
    document.getElementById("boxtop").innerHTML = "We collect and donate box tops on a rolling basis. If you have extra box tops, please deliver them to the VP of Programming's desk on the bottom floor of the SU office.";
}
//end my homepage 




