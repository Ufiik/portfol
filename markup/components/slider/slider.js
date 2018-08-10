$(function (jQuery) {
      let slides = $('.slides');

      $(slides).slick({
        autoplay: true,
        dots: true,
        arrows: false,
        customPaging: function (slider, i) {
          console.log(slider);
          console.log(i);
          return "<button class='button-dot'>"
        }
      });
}(jQuery));
