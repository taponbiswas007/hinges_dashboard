 $(document).ready(function () {
     $('.menutogglebtn').click(function (e) {
         e.stopPropagation();
         $(this).toggleClass('active');
         $('.user_auth_items .dropdown-menu').addClass('active');
     });


     $('.user_auth_items .dropdown-menu').click(function (e) {
         e.stopPropagation();
     });

     $(document).click(function () {
         $('.menutogglebtn').removeClass('active');
         $('.user_auth_items .dropdown-menu').removeClass('active');
     });
 });
 // header sticky
 $(document).ready(function () {
     $(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
             $('.header_area').addClass('headerSticky')
         } else {
             $('.header_area').removeClass('headerSticky')
         }
     });
 });

 $(document).ready(function () {
     // Show the button when scrolled down 100px
     $(window).scroll(function () {
         if ($(this).scrollTop() > 100) {
             $('.backToTopBtn').fadeIn();
         } else {
             $('.backToTopBtn').fadeOut();
         }
     });

 });
 document.querySelector('.backToTopBtn').addEventListener('click', function (e) {
     e.preventDefault();
     window.scrollTo({
         top: 0,
         behavior: 'smooth' // same-speed smooth scroll
     });
 });

 $(document).ready(function () {
     // Hide preloader after 2 seconds
     setTimeout(function () {
         $('.preloader').fadeOut('slow');
     }, 2000);
 });

 // dashboard menu
 $(document).ready(function () {
     const $trigger = $('.dashboard_menu_trigger');
     const $sidebar = $('.dashboard_menu_list');

     // When mouse enters trigger, open sidebar
     $trigger.on('mouseenter', function () {
         $sidebar.addClass('open');
     });

     // When mouse leaves sidebar, remove class
     $sidebar.on('mouseleave', function () {
         $sidebar.removeClass('open');
     });

     // When clicking anywhere outside sidebar and trigger, close sidebar
     $(document).on('click', function (e) {
         if (
             !$sidebar.is(e.target) &&
             $sidebar.has(e.target).length === 0 &&
             !$trigger.is(e.target) &&
             $trigger.has(e.target).length === 0
         ) {
             $sidebar.removeClass('open');
         }
     });
 });

 //   profile password set
 // jQuery code (include after jQuery is loaded)
 $(document).ready(function () {
     // Show password button clicked
     $(document).on('click', '.p_look', function () {
         var $container = $(this).closest('.set_passwordFeild');
         var $input = $container.find('input').first();
         // change type to text
         $input.attr('type', 'text');
         // toggle buttons
         $container.find('.p_look').addClass('d-none');
         $container.find('.p_hide').removeClass('d-none');
         // optional: move focus back to input
         $input.focus();
     });

     // Hide password button clicked
     $(document).on('click', '.p_hide', function () {
         var $container = $(this).closest('.set_passwordFeild');
         var $input = $container.find('input').first();
         // change type to password
         $input.attr('type', 'password');
         // toggle buttons
         $container.find('.p_hide').addClass('d-none');
         $container.find('.p_look').removeClass('d-none');
         $input.focus();
     });
 });