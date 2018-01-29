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
          // if ($('body').hasClass('logged-in')) {
          //      $('#join-donate').hide();
          // }

          // Hide 'Resource' links depending on logged in/out
          if ($('body').hasClass('logged-in')) {
               $('#menu-805-1').show();
          };
          if ($('body').hasClass('not-logged-in')) {
               $('#menu-805-1').hide();
          };
          if ($('body').hasClass('not-logged-in')) {
               $('#menu-727-1').show();
          };
          if ($('body').hasClass('logged-in')) {
               $('#menu-727-1').hide();
          };

          // Remove member only content for non-member resource page
          $('.page-resources .drilldown-1 option:last-child').remove();

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
          var $pageResourcesTitle = $('.page-resources h1.page-header').text();
          if ($('body').hasClass('page-resources')) {
               $('title').text($pageResourcesTitle + ' | IACP');     
          }

          // Events page sidebar sticky on scroll down
          var topPosition = $('#block-block-8').offset().top + 180;
          var floatingDivHeight = $('#block-block-8').outerHeight();
          var footerFromTop = $('footer').offset().top;
          var absPosition = footerFromTop - floatingDivHeight - 20;
          var win = $(window);
          var floatingDiv = $('#block-block-8');

          win.scroll(function() {
               if (window.matchMedia('(min-width: 768px)').matches) {
                    if ((win.scrollTop() > topPosition) && (win.scrollTop() < absPosition)) {
                         floatingDiv.addClass('sticky');
                         floatingDiv.removeClass('abs');
                    } else if ((win.scrollTop() > topPosition) && (win.scrollTop() > absPosition)) {
                         floatingDiv.removeClass('sticky');
                         floatingDiv.addClass('abs');
                    } else {
                         floatingDiv.removeClass('sticky');
                         floatingDiv.removeClass('abs');
                    }
               }
          });

     });

     // Hide download link from audio files in resources
     $(document).ajaxComplete(function(event, req, settings) {
          $(".library-item audio").attr("controlslist", "nodownload");
     });

     var delay = 0;
     var offset = 150;

     document.addEventListener('invalid', function(e){
        $(e.target).addClass("invalid");
        $('html, body').animate({scrollTop: $($(".invalid")[0]).offset().top - offset }, delay);
     }, true);
     document.addEventListener('change', function(e){
        $(e.target).removeClass("invalid")
     }, true);

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
