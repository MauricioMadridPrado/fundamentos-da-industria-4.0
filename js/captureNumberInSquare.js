import makeIntro from "./makeIntro.js";

export default function captureNumberInSquare() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", (event) => {
      const revNumber = event.target.dataset.square;
      if (localStorage.getItem("rev") !== revNumber) {
        localStorage.setItem("rev", revNumber);
        makeIntro(revNumber);
      }
    });
  });
}
