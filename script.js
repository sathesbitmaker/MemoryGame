var matchs = []
var imagesShown = 0
var destroy = 0
var playerOneScore = 0
var playerTwoScore = 0
var playerOneFirstPicture
var playerOneSecondPicture
var playerTwoFirstPicture
var playerTwoFirstPic

window.onload = function() {
  $(".playerone").append(playerOneScore)
}

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
    $( ".all" ).append('<img class = "invisible" id = ' + matchs[i] + ' src = ' + matchs[i] + '></img>')
    }
    $(".invisible").css("opacity", "0")
    $(".invisible").css("padding", "5px")
    document.getElementById('title').innerHTML = "Player One";
    // $(".photo").css("padding", "5px")
    displayPictures();
  })
})

function players() {
  console.log(imagesShown)
  if(document.getElementById("1").style.color === "blue" && document.getElementById("2").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("2").style.color = "red"
    document.getElementById("1").style.color = "red"
    document.getElementById("2").className = "visible"
    document.getElementById("1").className = "visible"
  }
  if(document.getElementById("3").style.color === "blue" && document.getElementById("4").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("3").style.color = "red"
    document.getElementById("4").style.color = "red"
    document.getElementById("3").className = "visible"
    document.getElementById("4").className = "visible"
  }
  if(document.getElementById("5").style.color === "blue" && document.getElementById("6").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("5").style.color = "red"
    document.getElementById("6").style.color = "red"
  }
  if(document.getElementById("7").style.color === "blue" && document.getElementById("8").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("7").style.color = "red"
    document.getElementById("8").style.color === "red"
  }
  if(document.getElementById("9").style.color === "blue" && document.getElementById("10").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("9").style.color = "red"
    document.getElementById("10").style.color === "red"
  }
  if(document.getElementById("11").style.color === "blue" && document.getElementById("12").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("11").style.color = "red"
    document.getElementById("12").style.color === "red"
  }
  if(document.getElementById("13").style.color === "blue" && document.getElementById("14").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("13").style.color = "red"
    document.getElementById("14").style.color === "red"
  }
  if(document.getElementById("15").style.color === "blue" && document.getElementById("16").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("15").style.color = "red"
    document.getElementById("16").style.color === "red"
  }
  if(document.getElementById("17").style.color === "blue" && document.getElementById("18").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("17").style.color = "red"
    document.getElementById("18").style.color === "red"
  }
  if(document.getElementById("19").style.color === "blue" && document.getElementById("20").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("19").style.color = "red"
    document.getElementById("20").style.color === "red"
  }
  if(document.getElementById("21").style.color === "blue" && document.getElementById("22").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("21").style.color = "red"
    document.getElementById("22").style.color === "red"
  }
  if(document.getElementById("23").style.color === "blue" && document.getElementById("24").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("23").style.color = "red"
    document.getElementById("24").style.color === "red"
  }
  if(document.getElementById("25").style.color === "blue" && document.getElementById("26").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("25").style.color = "red"
    document.getElementById("26").style.color === "red"
  }
  if(document.getElementById("27").style.color === "blue" && document.getElementById("28").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("27").style.color = "red"
    document.getElementById("28").style.color === "red"
  }
  if(document.getElementById("29").style.color === "blue" && document.getElementById("30").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("29").style.color = "red"
    document.getElementById("30").style.color === "red"
  }
  if(document.getElementById("31").style.color === "blue" && document.getElementById("32").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("31").style.color = "red"
    document.getElementById("32").style.color === "red"
  }
  if(document.getElementById("33").style.color === "blue" && document.getElementById("34").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("33").style.color = "red"
    document.getElementById("34").style.color === "red"
  }
  if(document.getElementById("35").style.color === "blue" && document.getElementById("36").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("35").style.color = "red"
    document.getElementById("36").style.color === "red"
  }
  if(document.getElementById("37").style.color === "blue" && document.getElementById("38").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("37").style.color = "red"
    document.getElementById("38").style.color === "red"
  }
  if(document.getElementById("39").style.color === "blue" && document.getElementById("40").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("39").style.color = "red"
    document.getElementById("40").style.color === "red"
  }
  if(document.getElementById("41").style.color === "blue" && document.getElementById("42").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("41").style.color = "red"
    document.getElementById("42").style.color === "red"
  }
  if(document.getElementById("43").style.color === "blue" && document.getElementById("44").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("43").style.color = "red"
    document.getElementById("44").style.color === "red"
  }
  if(document.getElementById("45").style.color === "blue" && document.getElementById("46").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("45").style.color = "red"
    document.getElementById("46").style.color === "red"
  }
  if(document.getElementById("47").style.color === "blue" && document.getElementById("48").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("47").style.color = "red"
    document.getElementById("48").style.color === "red"
  }
  if(document.getElementById("49").style.color === "blue" && document.getElementById("50").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("49").style.color = "red"
    document.getElementById("50").style.color === "red"
  }
  if(document.getElementById("51").style.color === "blue" && document.getElementById("52").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("51").style.color = "red"
    document.getElementById("52").style.color === "red"
  }
  if(document.getElementById("53").style.color === "blue" && document.getElementById("54").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("53").style.color = "red"
    document.getElementById("54").style.color === "red"
  }
  if(document.getElementById("55").style.color === "blue" && document.getElementById("56").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("55").style.color = "red"
    document.getElementById("56").style.color === "red"
  }
  if(document.getElementById("57").style.color === "blue" && document.getElementById("58").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("57").style.color = "red"
    document.getElementById("58").style.color === "red"
  }
  if(document.getElementById("59").style.color === "blue" && document.getElementById("60").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("59").style.color = "red"
    document.getElementById("60").style.color === "red"
  }
  if(document.getElementById("61").style.color === "blue" && document.getElementById("62").style.color === "blue" && document.getElementById('title').innerHTML === "Player Two") {
    playerTwoScore +=2
    document.getElementById("61").style.color = "red"
    document.getElementById("62").style.color === "red"
  }
  if(document.getElementById("1").style.color === "blue" && document.getElementById("2").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("2").style.color = "red"
    document.getElementById("1").style.color = "red"
    document.getElementById("2").className = "visible"
    document.getElementById("1").className = "visible"
  }
  if(document.getElementById("3").style.color === "blue" && document.getElementById("4").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("2").style.color = "red"
    document.getElementById("1").style.color = "red"
    document.getElementById("2").className = "visible"
    document.getElementById("1").className = "visible"
  }
  if(document.getElementById("5").style.color === "blue" && document.getElementById("6").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("5").style.color = "red"
    document.getElementById("6").style.color === "red"
  }
  if(document.getElementById("7").style.color === "blue" && document.getElementById("8").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("7").style.color = "red"
    document.getElementById("8").style.color === "red"
  }
  if(document.getElementById("9").style.color === "blue" && document.getElementById("10").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("9").style.color = "red"
    document.getElementById("10").style.color === "red"
  }
  if(document.getElementById("11").style.color === "blue" && document.getElementById("12").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("11").style.color = "red"
    document.getElementById("12").style.color === "red"
  }
  if(document.getElementById("13").style.color === "blue" && document.getElementById("14").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("13").style.color = "red"
    document.getElementById("14").style.color === "red"
  }
  if(document.getElementById("15").style.color === "blue" && document.getElementById("16").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("15").style.color = "red"
    document.getElementById("16").style.color === "red"
  }
  if(document.getElementById("17").style.color === "blue" && document.getElementById("18").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("17").style.color = "red"
    document.getElementById("18").style.color === "red"
  }
  if(document.getElementById("19").style.color === "blue" && document.getElementById("20").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("19").style.color = "red"
    document.getElementById("20").style.color === "red"
  }
  if(document.getElementById("21").style.color === "blue" && document.getElementById("22").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("21").style.color = "red"
    document.getElementById("22").style.color === "red"
  }
  if(document.getElementById("23").style.color === "blue" && document.getElementById("24").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("23").style.color = "red"
    document.getElementById("24").style.color === "red"
  }
  if(document.getElementById("25").style.color === "blue" && document.getElementById("26").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("25").style.color = "red"
    document.getElementById("26").style.color === "red"
  }
  if(document.getElementById("27").style.color === "blue" && document.getElementById("28").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("27").style.color = "red"
    document.getElementById("28").style.color === "red"
  }
  if(document.getElementById("29").style.color === "blue" && document.getElementById("30").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("29").style.color = "red"
    document.getElementById("30").style.color === "red"
  }
  if(document.getElementById("31").style.color === "blue" && document.getElementById("32").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("31").style.color = "red"
    document.getElementById("32").style.color === "red"
  }
  if(document.getElementById("33").style.color === "blue" && document.getElementById("34").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("33").style.color = "red"
    document.getElementById("34").style.color === "red"
  }
  if(document.getElementById("35").style.color === "blue" && document.getElementById("36").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("35").style.color = "red"
    document.getElementById("36").style.color === "red"
  }
  if(document.getElementById("37").style.color === "blue" && document.getElementById("38").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("37").style.color = "red"
    document.getElementById("38").style.color === "red"
  }
  if(document.getElementById("39").style.color === "blue" && document.getElementById("40").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("39").style.color = "red"
    document.getElementById("40").style.color === "red"
  }
  if(document.getElementById("41").style.color === "blue" && document.getElementById("42").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("41").style.color = "red"
    document.getElementById("42").style.color === "red"
  }
  if(document.getElementById("43").style.color === "blue" && document.getElementById("44").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("43").style.color = "red"
    document.getElementById("44").style.color === "red"
  }
  if(document.getElementById("45").style.color === "blue" && document.getElementById("46").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("45").style.color = "red"
    document.getElementById("46").style.color === "red"
  }
  if(document.getElementById("47").style.color === "blue" && document.getElementById("48").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("47").style.color = "red"
    document.getElementById("48").style.color === "red"
  }
  if(document.getElementById("49").style.color === "blue" && document.getElementById("50").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("49").style.color = "red"
    document.getElementById("50").style.color === "red"
  }
  if(document.getElementById("51").style.color === "blue" && document.getElementById("52").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("51").style.color = "red"
    document.getElementById("52").style.color === "red"
  }
  if(document.getElementById("53").style.color === "blue" && document.getElementById("54").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("53").style.color = "red"
    document.getElementById("54").style.color === "red"
  }
  if(document.getElementById("55").style.color === "blue" && document.getElementById("56").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("55").style.color = "red"
    document.getElementById("56").style.color === "red"
  }
  if(document.getElementById("57").style.color === "blue" && document.getElementById("58").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("57").style.color = "red"
    document.getElementById("58").style.color === "red"
  }
  if(document.getElementById("59").style.color === "blue" && document.getElementById("60").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("59").style.color = "red"
    document.getElementById("60").style.color === "red"
  }
  if(document.getElementById("61").style.color === "blue" && document.getElementById("62").style.color === "blue" && document.getElementById('title').innerHTML === "Player One") {
    playerOneScore +=2
    document.getElementById("61").style.color = "red"
    document.getElementById("62").style.color === "red"
  }
  if (imagesShown === 2 && document.getElementById('title').innerHTML === "Player One") {
    imagesShown = 0
    document.getElementById('title').innerHTML = "Player Two"
    document.getElementById('playerone').innerHTML = "Player One: " + playerOneScore
    document.getElementById('playertwo').innerHTML = "Player Two: " + playerTwoScore
    for(i=0; i<matchs.length; i++) {
      if (document.getElementById(matchs[i]).className === "invisible") {
        $(".invisible").css("opacity", "0")
      }
    }
  }

  if (document.getElementById('title').innerHTML === "Player Two" && imagesShown === 2) {
    imagesShown = 0
    document.getElementById('title').innerHTML = "Player One"
    document.getElementById('playerone').innerHTML = "Player One: " + playerOneScore
    document.getElementById('playertwo').innerHTML = "Player Two: " + playerTwoScore
    for(i=0; i<matchs.length; i++) {
      if (document.getElementById(matchs[i]).className === "invisible") {
        $(".invisible").css("opacity", "0")
      }
    }
  }
  if (document.getElementById('title').innerHTML === "Player One" && imagesShown === 1) {
    $( ".invisible" ).click(function() {
      playerOneFirstPicture = this.id
      console.log(playerOneFirstPicture)
    })
  }
  if (document.getElementById('title').innerHTML === "Player Two" && imagesShown === 1) {
    $( ".invisible" ).click(function() {
      playerTwoFirstPicture = this.id
      console.log(playerTwoFirstPicture)
    })
  }
}

function displayPictures() {
  $('#1').on('click', function() {
    $("#1").css("opacity", "100")
    $("#1").css("color", "blue")
    imagesShown +=1
    destroy += 1
    players();
  })
  $('#2').on('click', function() {
    $("#2").css("opacity", "100")
    $("#2").css("color", "blue")
    imagesShown += 1
    destroy += 1
    players();
  })
  $('#3').on('click', function() {
    $("#3").css("opacity", "100")
    $("#3").css("color", "blue")
    imagesShown += 1
    destroy += 1
    players();
  })
  $('#4').on('click', function() {
    $("#4").css("opacity", "100")
    $("#4").css("color", "blue")
    imagesShown += 1
    destroy += 1
    players();
  })
  $('#5').on('click', function() {
    $("#5").css("opacity", "100")
    $("#5").css("color", "blue")
    imagesShown += 1
    destroy += 1
    players();
  })
  $('#6').on('click', function() {
    $("#6").css("opacity", "100")
    $("#6").css("color", "blue")
    imagesShown += 1
    destroy += 1
    players();
  })
  $('#7').on('click', function() {
    $("#7").css("opacity", "100")
    $("#7").css("color", "blue")
    imagesShown += 1
    destroy += 1
    players();
  })
  $('#8').on('click', function() {
    $("#8").css("opacity", "100")
    $("#8").css("color", "blue")
    imagesShown += 1
    destroy += 1
    players();
  })
  $('#9').on('click', function() {
    $("#9").css("opacity", "100")
    $("#9").css("color", "blue")
    imagesShown += 1
    destroy += 1
    players();
  })
  $('#10').on('click', function() {
    $("#10").css("opacity", "100")
    $("#10").css("color", "blue")
    imagesShown += 1
    destroy += 1
    players();
  })
  $('#11').on('click', function() {
    $("#11").css("opacity", "100")
    $("#11").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#12').on('click', function() {
    $("#12").css("opacity", "100")
    $("#12").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#13').on('click', function() {
    $("#13").css("opacity", "100")
    $("#13").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#14').on('click', function() {
    $("#14").css("opacity", "100")
    $("#14").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#15').on('click', function() {
    $("#15").css("opacity", "100")
    $("#15").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#16').on('click', function() {
    $("#16").css("opacity", "100")
    $("#16").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#17').on('click', function() {
    $("#17").css("opacity", "100")
    $("#17").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#18').on('click', function() {
    $("#18").css("opacity", "100")
    $("#18").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#19').on('click', function() {
    $("#19").css("opacity", "100")
    $("#19").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#20').on('click', function() {
    $("#20").css("opacity", "100")
    $("#20").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#21').on('click', function() {
    $("#21").css("opacity", "100")
    $("#21").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#22').on('click', function() {
    $("#22").css("opacity", "100")
    $("#22").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#23').on('click', function() {
    $("#23").css("opacity", "100")
    $("#23").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#24').on('click', function() {
    $("#24").css("opacity", "100")
    $("#24").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#25').on('click', function() {
    $("#25").css("opacity", "100")
    $("#25").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#26').on('click', function() {
    $("#26").css("opacity", "100")
    $("#26").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#27').on('click', function() {
    $("#27").css("opacity", "100")
    $("#27").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#28').on('click', function() {
    $("#28").css("opacity", "100")
    $("#28").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#29').on('click', function() {
    $("#29").css("opacity", "100")
    $("#29").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#30').on('click', function() {
    $("#30").css("opacity", "100")
    $("#30").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#31').on('click', function() {
    $("#31").css("opacity", "100")
    $("#31").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#32').on('click', function() {
    $("#32").css("opacity", "100")
    $("#32").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#33').on('click', function() {
    $("#33").css("opacity", "100")
    $("#33").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#34').on('click', function() {
    $("#34").css("opacity", "100")
    $("#34").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#35').on('click', function() {
    $("#35").css("opacity", "100")
    $("#35").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#36').on('click', function() {
    $("#36").css("opacity", "100")
    $("#36").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#37').on('click', function() {
    $("#37").css("opacity", "100")
    $("#37").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#38').on('click', function() {
    $("#38").css("opacity", "100")
    $("#38").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#39').on('click', function() {
    $("#39").css("opacity", "100")
    $("#39").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#40').on('click', function() {
    $("#40").css("opacity", "100")
    $("#40").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#41').on('click', function() {
    $("#41").css("opacity", "100")
    $("#41").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#42').on('click', function() {
    $("#42").css("opacity", "100")
    $("#42").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#43').on('click', function() {
    $("#43").css("opacity", "100")
    $("#43").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#44').on('click', function() {
    $("#44").css("opacity", "100")
    $("#44").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#45').on('click', function() {
    $("#45").css("opacity", "100")
    $("#45").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#46').on('click', function() {
    $("#46").css("opacity", "100")
    $("#46").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#47').on('click', function() {
    $("#47").css("opacity", "100")
    $("#47").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#48').on('click', function() {
    $("#48").css("opacity", "100")
    $("#48").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#49').on('click', function() {
    $("#49").css("opacity", "100")
    $("#49").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#50').on('click', function() {
    $("#50").css("opacity", "100")
    $("#50").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#51').on('click', function() {
    $("#51").css("opacity", "100")
    $("#51").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#52').on('click', function() {
    $("#52").css("opacity", "100")
    $("#52").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#53').on('click', function() {
    $("#53").css("opacity", "100")
    $("#53").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#54').on('click', function() {
    $("#54").css("opacity", "100")
    $("#54").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#55').on('click', function() {
    $("#55").css("opacity", "100")
    $("#55").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#56').on('click', function() {
    $("#56").css("opacity", "100")
    $("#56").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#57').on('click', function() {
    $("#57").css("opacity", "100")
    $("#57").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#58').on('click', function() {
    $("#58").css("opacity", "100")
    $("#58").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#59').on('click', function() {
    $("#59").css("opacity", "100")
    $("#59").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#60').on('click', function() {
    $("#60").css("opacity", "100")
    $("#60").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#61').on('click', function() {
    $("#61").css("opacity", "100")
    $("#61").css("color", "blue")
    imagesShown += 1
    players();
  })
  $('#62').on('click', function() {
    $("#62").css("opacity", "100")
    $("#62").css("color", "blue")
    imagesShown += 1
    players();
  })
}
