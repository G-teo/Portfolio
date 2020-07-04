$(window).on('load', function() {
  // $('#welcome-image').fadeIn(2000);  
  // $('#welcome-image').fadeOut(1000);  
  // $('#header').show();
  $('#welcome-img').fadeIn(1000);
  $('#welcome-word').fadeIn(1500);
  $('#welcome-link').slideDown(2000);
  $('#welcome-link').click(function(){
    $('#welcome').fadeOut();
    $('#contents').fadeIn(300);
  });
  // $(window).on('scroll',function(){
  //   // $('#welcome-message').hide(5000);
  // });
  var pos = 0;
  $(window).on('scroll', function(){
    var space1_top = $('#space1').offset().top;
    if(pos + 300 > space1_top){
      // $('#side1').animate({opacity:0},1000);
      $('#side1').addClass('hide');
      $('#side2').removeClass('hide');
      // $('#side1').fadeOut('slow');
      // $('#side2').fadeIn('slow');
    }else{
      // $('#side1').animate({opacity:1},1000);
      $('#side1').removeClass('hide');
      $('#side2').addClass('hide');
      // $('#side1').fadeIn('slow');
      // $('#side2').fadeOut('slow');
    }
    // var works_top =$('#works-title').offset().top;
    // if(pos + 100 > works_top){
    //   $('#footer').addClass('fix');
    // }else{
    //   $('#footer').removeClass('fix');
    // }
    //スクロールが停止した位置を保持
    pos = $(this).scrollTop();
    console.log(pos);
    console.log(space1_top);
  }); 

  $("#hidden-header-menu").on("click", function(){
    // $(".header-logo-img").hide();
    if($("#hidden-header-nav").hasClass("open")) {
        // メニューを開いたら次回クリック時は閉じた状態になるよう設定
        $("#hidden-header-nav").removeClass("open");
        $("#hidden-header-menu").html('<span class="fas fa-bars"></span>');
    } else {
        // メニューを開いたら次回クリック時は閉じた状態になるよう設定
        $("#hidden-header-nav").addClass("open");
        $("#hidden-header-menu").html('<span class="fas fa-times"></span>');
    }
});
});