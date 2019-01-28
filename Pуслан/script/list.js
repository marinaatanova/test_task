$(document).ready(function(){

$('.accordeon>a').not(':first-of-type').hide();

$('.accordeon>img').click(function(){
    var findA = $(this).next();
    var findAccordeon = $(this).closest('.accordeon');

    if (findA.is(':visible')) {
        findA.slideUp('fast');
      }
      else {
        findAccordeon.find('>a').slideUp('fast');
        findA.slideDown('fast');
      }

});
});