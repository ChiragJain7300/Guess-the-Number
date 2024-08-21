const submitBtn = document.querySelector("#subBtn");
const result = document.querySelector(".gameResult");
let guessNumArr = [];
let guessRemaining = 10;
const randNum = Math.ceil(Math.random() * 100);
console.log(randNum);
submitBtn.addEventListener("click", (e) => {
  let guessVal = document.querySelector("#guessValue");
  console.log(guessVal);
  if (!guessVal.value || guessVal.value > 100)
    alert("Please Enter a Valid Number to Proceed ");
  else {
    if (guessRemaining == 1) {
      alert(`Your Turns are Over. Restart The Game. The number was ${randNum}`);
      location.reload();
    }
    guessNumArr.push(guessVal.value);
    if (guessVal.value == randNum) {
      alert(
        `Yayyy!!!! You guessed the number correctly in ${
          10 - guessRemaining + 1
        } turns`
      );
      location.reload();
    }
    guessVal.value = null;
    guessRemaining--;
    result.textContent = "Your Guess is incorrect. TRY AGAIN!!!!!";
  }
  document.querySelector(".guessNumArray").textContent = guessNumArr;
  document.querySelector(".RemainingGuess").textContent = guessRemaining;
});

//
