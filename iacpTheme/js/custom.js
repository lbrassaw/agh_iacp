/**
* @file
* custom.js
*
* Provides general enhancements and fixes to iacpTheme.
*/

(function($){

     $(document).ready(function() {

          // Add classes to login dropdown buttons
          $(".drop-down-login-container .login").addClass("btn custom-btn btn-not-filled");
          $(".drop-down-login-container .login").removeClass("button");

          // Hide Join button if logged in
          if ($('body').hasClass('logged-in')) {
               $('#join-donate').hide();
          }


          // Remove download functionality from audio player
          $(".library-item audio").attr("controlslist", "nodownload");

          // Get value form search label and hide
          var $titleValue = $('#edit-field-title-value-wrapper label').text();
          $('#edit-field-title-value-wrapper label').hide();
          // Set value of label to input text
          $('#edit-field-title-value').attr('placeholder', $.trim($titleValue));

          // Edit resource page apply and submit buttons
          $('.page-resources #edit-submit-clone-of-library').removeClass('btn btn-info');
          $('.page-resources #edit-submit-clone-of-library').addClass('custom-btn');
          $('.page-resources #edit-reset').removeClass('btn btn-default');
          $('.page-resources #edit-reset').addClass('custom-btn btn-not-filled');

          // Hide default breadcrumb on members pages where Easy Breadcrumb is used
          $('.page-members- ol.breadcrumb').hide();
          $('.page-resources ol.breadcrumb').hide();

          // Clone view header title to breadcrumb
          $('.page-members- span.easy-breadcrumb_segment-title').text('');
          var $pageMemberTitle = $('.page-members- .page-header p').text();
          $('.page-members- span.easy-breadcrumb_segment-title').text($pageMemberTitle);

          // Set meta title for member name page
          if ($('body').hasClass('page-members-')) {
               $('title').text($pageMemberTitle + ' | IACP');    
          }
          // Set meta title for resources page
          var $pageResourcesTitle = $('.page-resources #block-views-exp-clone-of-library-page .block-title').text();
          if ($('body').hasClass('page-resources')) {
               $('title').text($pageResourcesTitle + ' | IACP');     
          }

     });

     // Hide download link from audio files in resources
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
