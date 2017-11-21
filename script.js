var match = []

function insertImage() {
  for (i=0; match.length < 62; i++) {
    var number = (Math.floor((Math.random() * 42) + 1));
      if (number === ) {
          match.push(number)
          $( ".all" ).append( '<img class = "photo" id = "1" src = ' + number + '></img>' );
      }
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
