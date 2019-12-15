$(document).ready(function () {
    $('.main_btna').on('click', function () {
       $('.overlay').animate({
            opacity: 'show'
        }, 3000);
        $('.modal').animate({
            top: '+=55px',
           opacity: 'show'
           
        },2000);


    });
    $('.main_btn').on('click', function () {
        $('.overlay').animate({
             opacity: 'show'
         }, 3000);
         $('.modal').animate({
             top: '+=55px',
            opacity: 'show'
            
         },2000);
 
 
     });
     $('li:nth-child(2)').on('click', function () {
        $('.overlay').animate({
             opacity: 'show'
         }, 3000);
         $('.modal').animate({
             top: '+=55px',
            opacity: 'show'
            
         },2000);
 
 
     });
    $('.close').on('click', function() {
        $('.overlay').animate({
            opacity: 'hide'
        }, 3000);
        $('.modal').animate({
           opacity: 'hide',
           top: '-=55px'
        },2000);
        
    });
});