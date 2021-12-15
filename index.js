function rollDice() {
  let randomNumber1 = Math.floor(Math.random() * 5) + 1;
  let randomNumber2 = Math.floor(Math.random() * 5) + 1;

  document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
  document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

  let title = document.querySelector("h1");

  if (randomNumber1 > randomNumber2) {
    title.innerHTML = "🚩 Player 1 wins!";
  } else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "Player 2 wins! 🚩";
  } else {
    title.innerHTML = "Draw";
  }
}

if (window.performance.navigation.type == 1) {
  rollDice();
}
