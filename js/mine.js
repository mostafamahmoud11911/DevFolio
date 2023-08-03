$(document).ready(function () {
  let scrolloffset = $("#about").offset().top;

  $(window).scroll(function () {
    let wScroll = $(window).scrollTop();

    if (wScroll > scrolloffset - 100) {
      $(".navbar").css("backgroundColor", "rgba(0,0,0,.99)");
    } else {
      $(".navbar").css("backgroundColor", "transparent");
    }
  });
});
