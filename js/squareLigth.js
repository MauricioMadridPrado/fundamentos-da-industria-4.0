export default function squareLigth(revNumber){

    const squares = document.querySelectorAll('[data-square]')
    squares.forEach(square =>{
        const requiredSquare = square.dataset.square;
        if(revNumber == requiredSquare) {
            square.classList.add('light')
        } else{
            square.classList.remove('light')
        }
    })
}