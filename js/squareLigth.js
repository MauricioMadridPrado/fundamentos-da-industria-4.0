export default function squareLigth(revNumber) {
  const squares = document.querySelectorAll("[data-square]");
  squares.forEach((square) => {
    const requiredSquare = square.dataset.square;
    revNumber == requiredSquare
      ? square.classList.add("light")
      : square.classList.remove("light");
  });
}
