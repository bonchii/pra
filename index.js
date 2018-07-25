// レスポンシブ　ヘッダーメニュー
$(function() {
    $('.navToggle').click(function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});


// レスポンシブ　おすすめ商品スライダー
jQuery(function($){
  $('#main-image-gallery').flickity({
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    autoplay: true

  });
});



// フッタープルダウンメニュー
(function($) {
$(function() {
$(".footer-accordion").each(function() {
var accordion = $(this);
$(this).find(".footer-switch").click(function() {
var targetContentWrap = $(this).next(".footer-contentWrap");
if ( targetContentWrap.css("display") === "none" ) {
accordion.find(".footer-contentWrap").slideUp();
accordion.find(".footer-switch.open").removeClass("open");
}
targetContentWrap.slideToggle();
$(this).toggleClass("open");
});
});

});
})(jQuery);





