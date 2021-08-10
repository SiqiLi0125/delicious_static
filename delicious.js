
/* popup window */
// Get the modal
var modals = document.getElementsByClassName('modal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName('myImg');
var modalImgs = document.getElementsByClassName("modal-content");
var captionTexts = document.getElementsByClassName("caption");
var spans = document.getElementsByClassName("close");

for (var i = 0; i < imgs.length; i++) {
  var index = i;
  imgs[i].onclick = function() {
      $('nav').removeClass('sticky');
      modals[index].style.display = "block";
      modalImgs[index].src = this.src;
      captionTexts[index].innerHTML = this.alt;
  };

  // When the user clicks on <span> (x), close the modal
  spans[index].onclick = function() {
    modals[index].style.display = "none";
    $('nav').addClass('sticky');
  }
}
/* ------------ */
