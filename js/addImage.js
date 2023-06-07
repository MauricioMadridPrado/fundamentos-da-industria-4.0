export function addImage(n, l) {
    localStorage.getItem("rev");
  
    let rev;
  
    if (localStorage.getItem("rev") == "primeiraRev") rev = "primeira_rev_ind";
    if (localStorage.getItem("rev") == "segundaRev") rev = "segunda_rev_ind";
    if (localStorage.getItem("rev") == "terceiraRev") rev = "terceira_rev_ind";
    if (localStorage.getItem("rev") == "quartaRev") rev = "quarta_rev_ind";
  
    const containerImg = document.querySelector(".intro__img__container");
    const imgSlide = [
      { transform: `translate${l}(150px)` },
      { transform: `translate${l}(0px)` },
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