const cards = [...document.querySelectorAll(".Game__card")];
const trySpan = document.querySelector(".Wrong-tries span");
const Modal = document.querySelector(".Modal");
const ModalMessage = document.querySelector(".Modal__message");
const ModalScore = document.querySelector(".Modal__score");
const ModalBtn = document.querySelector(".Modal__btn");
const duration = 1000;
let tries = 0;

cards.forEach((box) => {
  box.addEventListener("click", () => {
    flipCard(box);
  });
});

const flipCard = (item) => {
  item.classList.add("open");

  let AllFilp = cards.filter((e) => e.classList.contains("open"));

  if (AllFilp.length === 2) {
    gameContainer.classList.add("noClick");

    checkWin(AllFilp[0], AllFilp[1]);

    setTimeout(() => {
      gameContainer.classList.remove("noClick");
    }, duration);
  }
};

const checkWin = (item1, item2) => {
  if (item1.dataset.name === item2.dataset.name) {
    setTimeout(() => {
      item1.classList.remove("open");
      item1.classList.add("match");

      item2.classList.remove("open");
      item2.classList.add("match");

      document.getElementById("correct").play();

      // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

      const winn = cards.filter((e) => e.classList.contains("match"));
      if (winn.length === gameImgs.length) {
        setTimeout(() => {
          Modal.classList.add("active");
          ModalMessage.innerHTML = "You Win";
          ModalScore.innerHTML = `Your score is : ${tries}`;
        }, duration);
      }

      // &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
    }, duration);
  } else {
    setTimeout(() => {
      item1.classList.remove("open");
      item2.classList.remove("open");
      tries++;
      trySpan.innerHTML = tries;
      document.getElementById("wrong").play();
    }, duration);
  }
};

const setTime = setInterval(countDown, 1000);

let startMinutes = 2;
let time = startMinutes * 60;
const counter = document.querySelector(".timer");
function countDown() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  counter.innerHTML = `${minutes} : ${seconds}`;

  time--;

  if (minutes == 0 && seconds == 0) {
    Modal.classList.add("active");
    ModalMessage.innerHTML = "You Lose";
    // ModalScore.innerHTML = `Best score is : ${10}`;
    clearInterval(setTime);
  }
}

ModalBtn.addEventListener("click", () => {
  window.location.reload();
});

window.addEventListener("load", () => {
  cards.forEach((box) => {
    setTimeout(() => {
      box.classList.add("open");
    }, duration);
    setTimeout(() => {
      box.classList.remove("open");
    }, 5000);
  });
});
