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
    document.getElementById("trashCan").innerHTML = " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

}
//end trashCan to text

// change my homepage
function boxTops(a, b) {
    document.getElementById("boxtop").innerHTML = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
}
//end my homepage 




