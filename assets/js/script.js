//Smooth scroll en navegador
$(document).ready(function(){
  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 10, function(){

        window.location.hash = hash;
      });
    } // End if
  });
});