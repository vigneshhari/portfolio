new TypeIt('#hithere', {
  strings: 'Hi There   </pre> <i class="em marbt em-wave emojitype animated wobble infinite" ></i>     ',
  speed: 100,
  autoStart: false,
  lifeLike: false,
  blink:false,
  cursor:false
});

$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    $("#heroimage").css('right', scroll);
    $("#text1").css('left', scroll);

});
