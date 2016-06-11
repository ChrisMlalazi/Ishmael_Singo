$('.navicon').on('click', function (e) {
  e.preventDefault();
  $(this).toggleClass('navicon--active');
  $('.toggle').toggleClass('toggle--active');
});

 //When user clicks on class 'navicon', the class 'sentence' must disappear.
    //click on navicon
$('.navicon').on('click', function (e) {
  e.preventDefault();
  //Sentence disappears
  $('.sentence').hide();  
});


