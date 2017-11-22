var matchs = []

function shuffle(array) {
  var currentIndex = matchs.length, temporaryValue, randomIndex;
  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = matchs[currentIndex];
    matchs[currentIndex] = matchs[randomIndex];
    matchs[randomIndex] = temporaryValue;
  }

  return array;
}


function createNumbers() {
  for (var i=1; i <= 62; i++) {
    matchs.push(i)
    shuffle();
  }
}

$(function newGame() {
  $('.play').on('click', function() {
    createNumbers();
    for(i=0; i<matchs.length; i++) {
    $( ".all" ).append('<img class = "photo" id = ' + matchs[i] + ' src = ' + matchs[i] + '></img>')
    }
    $(".photo").css("opacity", "0")
    $(".photo").css("padding", "5px")
    // $(".photo").css("padding", "5px")
    displayPictures();
  })
})

function displayPictures() {
  $('#1').on('click', function() {
    $("#1").css("opacity", "100")
  })
  $('#2').on('click', function() {
    $("#2").css("opacity", "100")
  })
  $('#3').on('click', function() {
    $("#3").css("opacity", "100")
  })
  $('#4').on('click', function() {
    $("#4").css("opacity", "100")
  })
  $('#5').on('click', function() {
    $("#5").css("opacity", "100")
  })
  $('#6').on('click', function() {
    $("#6").css("opacity", "100")
  })
  $('#7').on('click', function() {
    $("#7").css("opacity", "100")
  })
  $('#8').on('click', function() {
    $("#8").css("opacity", "100")
  })
  $('#9').on('click', function() {
    $("#9").css("opacity", "100")
  })
  $('#10').on('click', function() {
    $("#10").css("opacity", "100")
  })
  $('#11').on('click', function() {
    $("#11").css("opacity", "100")
  })
  $('#12').on('click', function() {
    $("#12").css("opacity", "100")
  })
  $('#13').on('click', function() {
    $("#13").css("opacity", "100")
  })
  $('#14').on('click', function() {
    $("#14").css("opacity", "100")
  })
  $('#15').on('click', function() {
    $("#15").css("opacity", "100")
  })
  $('#16').on('click', function() {
    $("#16").css("opacity", "100")
  })
  $('#17').on('click', function() {
    $("#17").css("opacity", "100")
  })
  $('#18').on('click', function() {
    $("#18").css("opacity", "100")
  })
  $('#19').on('click', function() {
    $("#19").css("opacity", "100")
  })
  $('#20').on('click', function() {
    $("#20").css("opacity", "100")
  })
  $('#21').on('click', function() {
    $("#21").css("opacity", "100")
  })
  $('#22').on('click', function() {
    $("#22").css("opacity", "100")
  })
  $('#23').on('click', function() {
    $("#23").css("opacity", "100")
  })
  $('#24').on('click', function() {
    $("#24").css("opacity", "100")
  })
  $('#25').on('click', function() {
    $("#25").css("opacity", "100")
  })
  $('#26').on('click', function() {
    $("#26").css("opacity", "100")
  })
  $('#26').on('click', function() {
    $("#26").css("opacity", "100")
  })
  $('#27').on('click', function() {
    $("#27").css("opacity", "100")
  })
  $('#28').on('click', function() {
    $("#28").css("opacity", "100")
  })
  $('#29').on('click', function() {
    $("#29").css("opacity", "100")
  })
  $('#30').on('click', function() {
    $("#30").css("opacity", "100")
  })
  $('#31').on('click', function() {
    $("#31").css("opacity", "100")
  })
  $('#32').on('click', function() {
    $("#32").css("opacity", "100")
  })
  $('#33').on('click', function() {
    $("#33").css("opacity", "100")
  })
  $('#34').on('click', function() {
    $("#34").css("opacity", "100")
  })
  $('#35').on('click', function() {
    $("#35").css("opacity", "100")
  })
  $('#36').on('click', function() {
    $("#36").css("opacity", "100")
  })
  $('#37').on('click', function() {
    $("#37").css("opacity", "100")
  })
  $('#38').on('click', function() {
    $("#38").css("opacity", "100")
  })
  $('#39').on('click', function() {
    $("#39").css("opacity", "100")
  })
  $('#40').on('click', function() {
    $("#40").css("opacity", "100")
  })
  $('#41').on('click', function() {
    $("#41").css("opacity", "100")
  })
  $('#42').on('click', function() {
    $("#42").css("opacity", "100")
  })
  $('#43').on('click', function() {
    $("#43").css("opacity", "100")
  })
  $('#44').on('click', function() {
    $("#44").css("opacity", "100")
  })
  $('#45').on('click', function() {
    $("#45").css("opacity", "100")
  })
  $('#46').on('click', function() {
    $("#46").css("opacity", "100")
  })
  $('#47').on('click', function() {
    $("#47").css("opacity", "100")
  })
  $('#48').on('click', function() {
    $("#48").css("opacity", "100")
  })
  $('#49').on('click', function() {
    $("#49").css("opacity", "100")
  })
  $('#50').on('click', function() {
    $("#50").css("opacity", "100")
  })
  $('#51').on('click', function() {
    $("#51").css("opacity", "100")
  })
  $('#52').on('click', function() {
    $("#52").css("opacity", "100")
  })
  $('#53').on('click', function() {
    $("#53").css("opacity", "100")
  })
  $('#54').on('click', function() {
    $("#54").css("opacity", "100")
  })
  $('#55').on('click', function() {
    $("#55").css("opacity", "100")
  })
  $('#56').on('click', function() {
    $("#56").css("opacity", "100")
  })
  $('#57').on('click', function() {
    $("#57").css("opacity", "100")
  })
  $('#58').on('click', function() {
    $("#58").css("opacity", "100")
  })
  $('#59').on('click', function() {
    $("#59").css("opacity", "100")
  })
  $('#60').on('click', function() {
    $("#60").css("opacity", "100")
  })
  $('#61').on('click', function() {
    $("#61").css("opacity", "100")
  })
  $('#62').on('click', function() {
    $("#62").css("opacity", "100")
  })
}
