/**
* @file
* custom.js
*
* Provides general enhancements and fixes to iacpTheme.
*/

(function($){

     $(document).ready(function() {

          $(".drop-down-login-container .login").addClass("btn custom-btn btn-not-filled");
          $(".drop-down-login-container .login").removeClass("button");

          // Remove download functionality from audio player
          $(".library-item audio").attr("controlslist", "nodownload");

          var $titleValue = $('#edit-field-title-value-wrapper label')
               .html();
               console.log($titleValue);
          $('#edit-field-title-value-wrapper input')
               .text($titleValue);



          // Line element on slider
          // var elementOffsetOnStart = $('.flex-active-slide #slider-btn').offset().top;
          //      $('.slider-line').css('height', elementOffsetOnStart - 142);
          //      $('.slider-line').css('width', '100');

          // Set Interval to check change of line element on slider
          // var slideLine = setInterval(slideLineTimer, 7000);

          // function slideLineTimer() {
          //      var elementOffset = $('.flex-active-slide #slider-btn').offset().top;
          //      $('.slider-line').css('height', elementOffset - 142);
          //      $('.slider-line').css('width', '100');
          // }
     });

     $(document).ajaxComplete(function(event, req, settings) {
          $(".library-item audio").attr("controlslist", "nodownload");
     })


     // Drupal.behaviors.custom_flexslider_behavior = {
     //      attach: function (context, settings) {   
     //           $('.flexslider').bind('start', function(e, slider) {
     //                var elementOffset = $('.flex-active-slide #slider-btn').offset().top;
     //                console.log(elementOffset);
     //                $('.slider-line').css('height', elementOffset);
     //                $('.slider-line').css('width', '100');
     //           });
     //           $('.flexslider').bind('before', function(e, slider) {
     //                $('.slider-line').css('height', '0');
     //                $('.slider-line').css('width', '0');
     //           });
     //           $('.flexslider').bind('end', function(e, slider) {
     //                var elementOffset = $('.flex-active-slide #slider-btn').offset().top;
     //                console.log(elementOffset);
     //                $('.slider-line').css('height', elementOffset);
     //                $('.slider-line').css('width', '100');
     //           });
     //      }
     // };

})(jQuery);
