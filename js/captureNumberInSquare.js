import makeIntro from "./makeIntro.js";
import changeInfo from "./changeInfo.js";
import squareLigth from "./squareLigth.js";

export default function captureNumberInSquare() {
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    square.addEventListener("click", (event) => {
      const revNumber = event.target.dataset.square;
      if (localStorage.getItem("rev") !== revNumber) {
        localStorage.setItem("rev", revNumber);
        changeInfo(revNumber);
        squareLigth(revNumber);
        makeIntro(revNumber);
      }
    });
  });
}
