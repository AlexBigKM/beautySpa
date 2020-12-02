$(function(){
    $('.gallery__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt=""></button>'
    });
    $('.header__btn').click( function(event){
        event.preventDefault();
        $('#myOverlay').fadeIn(297,	function(){
          $('#myModal') 
          .css('display', 'block')
          .animate({opacity: 1}, 198);
        });
      });
    
         $('#myModal__close, #myOverlay').click( function(){
        $('#myModal').animate({opacity: 0}, 198, function(){
          $(this).css('display', 'none');
          $('#myOverlay').fadeOut(297);
        });
      });
});