$(window).on('load', function() {
  var w = $(window).width();
  if(w > 400){
    $('#welcome-img').fadeIn(1000);
    // $('#welcome-word').fadeIn(1500);
    $('#welcome-link').slideDown(2000);
    $('#welcome-link').click(function(){
      $('#welcome').fadeOut();
      $('#contents').fadeIn(300);
    });
  }else{
    $('#contents').fadeIn(300);
  }

  var pos = 0;
  // var first_pos = $('.first').offset().top;
  var service_pos = $('.service').offset().top;
  var skills_pos = $('.skills').offset().top;
  var works_pos = $('.works').offset().top;
  var about_pos = $('.about').offset().top;
  $(window).on('scroll', function(){
    //スクロールが停止した位置を保持
    pos = $(this).scrollTop();
    // if(pos > service_pos){
    //   $('.service').fadeIn(5000);
    // }else if(pos < service_pos){
    //   $('.service').fadeOut();
    // }
    // if(pos > skills_pos){
    //   $('.skills').fadeIn(5000);
    // }else if(pos < skills_pos){
    //   $('.skills').fadeOut();
    // }
  }); 

  $("#hidden-header-menu").on("click", function(){
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