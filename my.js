ScrollReveal().reveal('.navbar', {
    delay: 500,
    duration: 500,
    reset: true
});
ScrollReveal().reveal('.list', {
    delay: 1000,
    duration: 500,
    reset: true
});

// ScrollReveal().reveal('.types',{delay: 400});
// const hey = document.getElementById('cars');
// hey.addEventListener('click',function(e){
//     ScrollReveal().reveal('.types',{delay: 400});
// });
// ScrollReveal().reveal('.content2',{delay: 900});
// ScrollReveal().reveal('.content3',{delay: 1800});
// ScrollReveal().reveal('.headline');
// ScrollReveal().reveal('.first',{ delay: 900});
// ScrollReveal().reveal('.sec',{ delay: 2000});
// var audio = document.getElementsByTagName("audio")[0];
// audio.play();

// // or with an ID

// var audio = document.getElementById("mySoundClip");
// audio.play();

// jquery
// var audio = $("Clip")[0];
// audio.play();


// var audio = $("#Clip")[0];
// $(".left-icon").mouseenter(function() {
//   audio.play();
// });
// (function(){
//   var rotate , timline;

//   rotate = function(){
//     return $('.card:first-child').fadeOut(100,'swing',function(){
//       return $('.card:first-child').appendTo('.container').hide();
//     }).fadeIn(100,'swing');
//   };

//   timline = setInterval(rotate, 1000);

//   $('.card').click(function(){
//     return rotate();
//   });
// }).call(this);