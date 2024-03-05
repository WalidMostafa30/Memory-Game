const gameImgs = [
  "../Imgs/apple.jpg",
  "../Imgs/apple.jpg",
  "../Imgs/awooo.jpg",
  "../Imgs/awooo.jpg",
  "../Imgs/ball.jpg",
  "../Imgs/ball.jpg",
  "../Imgs/banana.jpg",
  "../Imgs/banana.jpg",
  "../Imgs/bike.jpg",
  "../Imgs/bike.jpg",
  "../Imgs/bird.jpg",
  "../Imgs/bird.jpg",
  "../Imgs/butterfly.jpg",
  "../Imgs/butterfly.jpg",
  "../Imgs/camera.jpg",
  "../Imgs/camera.jpg",
  "../Imgs/car.jpg",
  "../Imgs/car.jpg",
  "../Imgs/cat.jpg",
  "../Imgs/cat.jpg",
  "../Imgs/facebook.jpg",
  "../Imgs/facebook.jpg",
  "../Imgs/fanoos.jpg",
  "../Imgs/fanoos.jpg",
  "../Imgs/fish.jpg",
  "../Imgs/fish.jpg",
  "../Imgs/grape.jpg",
  "../Imgs/grape.jpg",
  "../Imgs/instagram.jpg",
  "../Imgs/instagram.jpg",
  "../Imgs/lamp.jpg",
  "../Imgs/lamp.jpg",
  "../Imgs/watermelon.jpg",
  "../Imgs/watermelon.jpg",
  "../Imgs/whatsapp.jpg",
  "../Imgs/whatsapp.jpg",
  "../Imgs/youtube.jpg",
  "../Imgs/youtube.jpg",
];

const shufImg = gameImgs.sort(() => (Math.random() > 0.5 ? 2 : -1));
const gameContainer = document.querySelector(".Game__container");
shufImg.map((e) => {
  gameContainer.innerHTML += `
      <div class="Game__card" data-name=${e}>
        <img src=${e} alt="img" />
      </div>
      `;
});
