import { content } from "./intro.js";

export function addImage(n, l) {
    
  let rev;
    content.forEach(item =>{
      (item.rev == localStorage.getItem("rev")) ?rev = item.rev: "";
    })
    localStorage.getItem("rev");

    const containerImg = document.querySelector(".intro__img__container");
    const imgSlide = [
      { transform: `translate${l}(50px)`, opacity:0 },
      { transform: `translate${l}(0px)`, opacity:1  },
    ];
  
    const imgTime = {
      duration: 1000,
      iterations: 1,
    };
    containerImg.innerHTML = `          
        <img
        class="intro__img"
        src="./assets/img/${rev}/img${n}.jpg"
        alt="imagem da revolução selecionada"
        />
      `;
    containerImg.animate(imgSlide, imgTime);
  }