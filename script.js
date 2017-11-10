function insertImage() {
  var number = (Math.floor((Math.random() * 42) + 1));
  if (number<100) {
    console.log('it worked')
    $( ".all" ).append( '<img class = "photo" id = "1" src = "good.jpg"></img>' );
    $( ".all" ).append( '<img class = "photo" id = "2" src = "breakingbad.jpg"></img>' );
  } else {
    console.log('dont know')
  }
  }


$(function newGame() {
  $('.play').on('click', function() {
    insertImage();
    // var counter = 0
    // for (i=0; i < 42; i++) {
    // }
  })
})
