document.addEventListener("DOMContentLoaded", () => {
  const number = document.getElementById("number");
  const submitButton = document.getElementById("submitBtn");
  const resultAlert = document.getElementById("result");
  const loserAudio = document.getElementById("loser");
  const winnerAudio = document.getElementById("correct");

  const randomNumber = Math.floor(Math.random() * 5) + 1;
  console.log(randomNumber);
  submitButton.addEventListener("click", () => {
    const userInput = parseInt(number.value);

    if (userInput > 5 && userInput<1) {
      resultAlert.textContent = "Please, enter a valid number: ";
    } else {
      if (userInput === randomNumber) {
        resultAlert.textContent = "Congratulations. your answer is correc!";
        winnerAudio.play();
        if (
          submitButton.addEventListener("click", () => {
            winnerAudio.pause();
          })
        );
      } else {
        resultAlert.textContent = "Sorry, your answer is incorrect!";
        loserAudio.play();
        if (
          submitButton.addEventListener("click", () => {
            loserAudio.pause();
          })
        );
      }
    }
  });
});
