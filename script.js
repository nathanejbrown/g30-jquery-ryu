$(document).ready(function() {
    $('#ryu').append("<img src='http://i.imgur.com/90Mmdcm.png'>");

$('#ryu > img').hover(function(){
  this.src = 'http://i.imgur.com/nTj3Fxx.gif';
}, function(){
  this.src = 'http://i.imgur.com/90Mmdcm.png';
})

$('#ryu > img').mousedown(function() {
  this.src = 'http://i.imgur.com/Rfj0a80.png';
}),
$('#ryu > img').mouseup(function(){
  this.src = 'http://i.imgur.com/90Mmdcm.png';
})

$('#ryu').click(function(){
  $('#ryu').append("<img class='demo-hadouken' src='http://i.imgur.com/oTyQRvX.gif'>");
  $('.demo-hadouken').css('position', 'absolute');
  $('.demo-hadouken').animate({
    left: '100vw'
  }, 1000, function() {
    this.remove("<img class='demo-hadouken'>");
  })

})


});
