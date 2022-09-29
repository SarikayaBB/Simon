var muhtemelRenk = ["green", "red", "yellow", "blue"];
var sayilarKumesi = [];
kullaniciKumesi = [];
isTrue = true;
var levelNo = 1;
$(document).keydown(function (event) {
  if (event.key == "a") {
    next();
    $("#level-title").text("Level " + levelNo);
  }
});

$(".btn").click(function (event) {
  /// button tanimlama ve buttonu cagirma
  buttonSes(event.target.id);
  kullaniciKumesi.push(event.target.id);
  console.log(kullaniciKumesi);
  dogruMU();
});

function randomButton(sayi) {
  // sayilarin cagirdigi fonksyion
  setTimeout(() => {
    $("." + sayi)
      .removeClass("pressed")
      .fadeOut(100)
      .fadeIn(100);
  }, 500);

  if (sayi == 0) {
    var sesGreen = new Audio("sounds/green.mp3");
    sesGreen.play();
  } else if (sayi == 1) {
    var sesRed = new Audio("sounds/red.mp3");
    sesRed.play();
  } else if (sayi == 2) {
    var sesYellow = new Audio("sounds/yellow.mp3");
    sesYellow.play();
  } else if (sayi == 3) {
    var sesBlue = new Audio("sounds/yellow.mp3");
    sesBlue.play();
  }
}
function buttonSes(buttonId) {
  // buttonlarin cagirdigi fonksyion
  $("#" + buttonId)
    .removeClass("pressed")
    .fadeOut(100)
    .fadeIn(100);

  if (buttonId == "green") {
    var sesGreen = new Audio("sounds/green.mp3");
    sesGreen.play();
    // dogruMU();
  } else if (buttonId == "blue") {
    var sesBlue = new Audio("sounds/blue.mp3");
    sesBlue.play();
    // dogruMU();
  } else if (buttonId == "red") {
    var sesRed = new Audio("sounds/red.mp3");
    sesRed.play();
    // dogruMU();
  } else if (buttonId == "yellow") {
    var sesYellow = new Audio("sounds/yellow.mp3");
    sesYellow.play();
    // dogruMU();
  }
}
function rastgele(min, max) {
  // random fonksyionu
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function gameOver() {
  return alert("oyun bitti");
}

function next() {
  var randomSayi = rastgele(0, 3);
  console.log(randomSayi);
  sayilarKumesi.push(muhtemelRenk[randomSayi]);
  console.log(sayilarKumesi);
  if (randomSayi == 0) {
    randomButton(randomSayi);
  } else if (randomSayi == 1) {
    randomButton(randomSayi);
  } else if (randomSayi == 2) {
    randomButton(randomSayi);
  } else if (randomSayi == 3) {
    randomButton(randomSayi);
  }
  dogruMU();
}

function dogruMU() {
  if (kullaniciKumesi.length == sayilarKumesi.length) {
    for (let i = 0; i < kullaniciKumesi.length; i++) {
      if (kullaniciKumesi[i] == sayilarKumesi[i]) {
      } else {
        var sesYanlis = new Audio("sounds/wrong.mp3");
        sesYanlis.play();
        isTrue=false;
        $("body").addClass("game-over");
        $("#level-title").text("GAME OVER! PRESS ANY KEY");
      }
    }
    setTimeout(function () {
      next();
    }, 1000);
    levelNo++;
    $("#level-title").text("Level " + levelNo);
    kullaniciKumesi = [];
  }
}
