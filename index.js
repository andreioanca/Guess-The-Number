let randomNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//reset button
document.querySelector(".head-btn").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "rgb(75, 71, 71)";
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".type").textContent = "Type the number...";
  document.querySelector(".input-no").value = "";
  document.querySelector(".secret-number").textContent = "❓";
  document.querySelector(".secret-number").style.backgroundColor = "white";
});

//game logic
document.querySelector(".button-check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".input-no").value);

  //No input inserted
  if (!guess) {
    document.querySelector(".type").textContent =
      " 🔢 Please insert a number! 🔢";

    //Input is higher than the range 1-20
  } else if (guess > 20) {
    document.querySelector(".type").textContent = "⛔ Not in range! ⛔";
    score--;
    document.querySelector(".score").textContent = score;

    //Input is equal with the random number generated
  } else if (guess === randomNumber) {
    document.querySelector(".type").textContent =
      "🎉Congrats, the number is CORRECT!🎉";
    document.querySelector("body").style.backgroundColor = "red";
    document.querySelector(".secret-number").textContent = randomNumber;
    document.querySelector(".secret-number").style.borderRadius = "40px";
    document.querySelector(".secret-number").style.backgroundColor = "yellow";

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    //Input is higher than the random number generated
  } else if (guess > randomNumber) {
    document.querySelector(".type").textContent = "Too High...";
    score--;
    document.querySelector(".score").textContent = score;

    //Input is lower than the random number generated
  } else if (guess < randomNumber) {
    document.querySelector(".type").textContent = "Too Low...";
    score--;
    document.querySelector(".score").textContent = score;
  }
});
