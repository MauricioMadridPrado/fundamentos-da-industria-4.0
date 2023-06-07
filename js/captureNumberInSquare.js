import makeIntro from "./makeIntro.js";

export default function captureNumberInSquare() {

    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
      square.addEventListener("click", (event) => {
        makeIntro(event.target.dataset.square);
      });
    });
  }