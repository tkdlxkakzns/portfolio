$(document).ready(function () {

  let gnb = $('.gnb > li > a');
  let n = 0;
  
  $('.slide-wrapper > article').eq(n).show();

  function act01_h2() {
    $('.container-01 > h2').eq(0).animate({'opacity': 1, 'top': '120px'}, 500);
    $('.container-01 > h2').eq(1).delay(100).animate({'opacity': 1, 'top': '288px'}, 500);
    $('.container-01 > h2').eq(2).delay(250).animate({'opacity': 1, 'top': '456px'}, 500);
  };
  act01_h2();

  gnb.click(function () {
    n = $(this).parent().index();

    if (n == 0) {
      $('.slide-wrapper > article').eq(n).css('display', 'grid').siblings().hide();
      act01_h2();
    } else {
      $('.slide-wrapper > article').eq(n).css('display', 'grid').siblings().hide();
      $('.container-01 > h2').eq(0).css({'opacity': 0, 'top': '220px'});
      $('.container-01 > h2').eq(1).css({'opacity': 0, 'top': '388px'});
      $('.container-01 > h2').eq(2).css({'opacity': 0, 'top': '556px'});
    };
    
  });
  
});