// ************************** Start Header **************************
window.addEventListener('click', function(e){   
    if (document.getElementById('links').contains(e.target)){
      document.getElementById('ul_links').classList.toggle('block');
    } else{
        document.getElementById('ul_links').classList.remove('block');
    }
  });

// ************************** form contact **************************
var $firstButton = $(".first"),
$secondButton = $(".second"),
$input = $("input"),
$name = $(".name"),
$more = $(".more"),
$yourname = $(".yourname"),
$reset = $(".reset"),
$ctr = $(".container");

$firstButton.on("click", function (e) {
$(this).text("Saving...").delay(900).queue(function () {
  $ctr.addClass("center slider-two-active").removeClass("full slider-one-active");
});
e.preventDefault();
});

$secondButton.on("click", function (e) {
$(this).text("Saving...").delay(900).queue(function () {
  $ctr.addClass("full slider-three-active").removeClass("center slider-two-active slider-one-active");
  $name = $name.val();
  if ($name == "") {
    $yourname.html("Anonymous!");
  }
  else { $yourname.html($name + "!"); }
});
e.preventDefault();
});
