let order = true;
let gameOver = false;
let resetGame = function () {
  order = true;
  gameOver = false;
  document.getElementById("box1").innerText = "";
  document.getElementById("box2").innerText = "";
  document.getElementById("box3").innerText = "";
  document.getElementById("box4").innerText = "";
  document.getElementById("box5").innerText = "";
  document.getElementById("box6").innerText = "";
  document.getElementById("box7").innerText = "";
  document.getElementById("box8").innerText = "";
  document.getElementById("box9").innerText = "";
  document.getElementsByClassName("winner-message-text")[0].innerText = "";
};
let ticTacToeFunction = function (box) {
  if (
    order === true &&
    document.getElementById(box).innerText === "" &&
    gameOver === false
  ) {
    document.getElementById(box).innerText = "X";
    order = false;
  } else if (
    order === false &&
    document.getElementById(box).innerText === "" &&
    gameOver === false
  ) {
    document.getElementById(box).innerText = "0";
    order = true;
  }
  let boxOne = document.getElementById("box1").innerText;
  let boxTwo = document.getElementById("box2").innerText;
  let boxThree = document.getElementById("box3").innerText;
  let boxFour = document.getElementById("box4").innerText;
  let boxFive = document.getElementById("box5").innerText;
  let boxSix = document.getElementById("box6").innerText;
  let boxSeven = document.getElementById("box7").innerText;
  let boxEight = document.getElementById("box8").innerText;
  let boxNine = document.getElementById("box9").innerText;

  if (
    boxOne !== "" &&
    boxTwo !== "" &&
    boxThree !== "" &&
    boxFour !== "" &&
    boxFive !== "" &&
    boxSix !== "" &&
    boxSeven !== "" &&
    boxEight !== "" &&
    boxNine !== ""
  ) {
    document.getElementsByClassName("winner-message-text")[0].innerText =
      "Draw!";
  }

  if (
    (boxOne === "X" && boxTwo === "X" && boxThree === "X") ||
    (boxFour === "X" && boxFive === "X" && boxSix === "X") ||
    (boxSeven === "X" && boxEight === "X" && boxNine === "X") ||
    (boxOne === "X" && boxFour === "X" && boxSeven === "X") ||
    (boxTwo === "X" && boxFive === "X" && boxEight === "X") ||
    (boxThree === "X" && boxSix === "X" && boxNine === "X") ||
    (boxOne === "X" && boxFive === "X" && boxNine === "X") ||
    (boxThree === "X" && boxFive === "X" && boxSeven === "X")
  ) {
    document.getElementsByClassName("winner-message-text")[0].innerText =
      "X wins";
    gameOver = true;
  } else if (
    (boxOne === "0" && boxTwo === "0" && boxThree === "0") ||
    (boxFour === "0" && boxFive === "0" && boxSix === "0") ||
    (boxSeven === "0" && boxEight === "0" && boxNine === "0") ||
    (boxOne === "0" && boxFour === "0" && boxSeven === "0") ||
    (boxTwo === "0" && boxFive === "0" && boxEight === "0") ||
    (boxThree === "0" && boxSix === "0" && boxNine === "0") ||
    (boxOne === "0" && boxFive === "0" && boxNine === "0") ||
    (boxThree === "0" && boxFive === "0" && boxSeven === "0")
  ) {
    document.getElementsByClassName("winner-message-text")[0].innerText =
      "0 wins";
    gameOver = true;
  }
};
