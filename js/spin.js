function spin() {
  var wheel = document.querySelector(".wheel-img");
  if (!wheel.classList.contains("rotated")) {
    wheel.classList.add("super-rotation");
    setTimeout(function () {
      $(".wheel").slideUp();
      $(".order_block").slideDown();
      $('.spin-result-wrapper').fadeIn();
      $('.popup--congrats').fadeIn();
    }, 7000), wheel.classList.add("rotated");
  } else {
    $('.modal').fadeIn();
    $('.spin-result-wrapper').fadeIn();
  }
}

var wheelCursor = document.querySelector('.wheel-cursor');
wheelCursor.addEventListener('click', spin, {once: true});
$('.modal__overlay, .pop-up-button, .close-popup').click(function (e) {
  e.preventDefault();
  $('.spin-result-wrapper').fadeOut();
  $('.modal').fadeOut();
  start_timer()
})
$(".pop-up-button").click(function (a) {
  a.preventDefault();
  var b = $("#form").offset().top;
  $("body,html").animate({scrollTop: b}, 400);
});
var time = 600;
var intr;

function start_timer() {
  intr = setInterval(tick, 1000);
}

function tick() {
  time = time - 1;
  var mins = Math.floor(time / 60);
  var secs = time - mins * 60;
  if (mins == 0 && secs == 0) {
    clearInterval(intr);
  }
  secs = secs >= 10 ? secs : "0" + secs;
  mins = mins >= 10 ? mins : "0" + mins;
  $("#min").html(mins);
  $("#sec").html(secs);
}