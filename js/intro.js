import { alterImg } from "./alterImg.js";

setInterval(alterImg, 3000);
let n = 1;
export const content = {
  primeiraRev: `
    <div class="intro__text">
          <h2 class="intro__title">Primeira revolução industrial</h2>
          <p>
            A primeira revolução industrial teve início na inglaterra, no século
            XVIII, foi chamada também de Revolução do carvão e do ferro. Essa
            revolução marcou o fim da era artesanal e o início da era industrial
          </p>
        </div>
        <div class="intro__img__container">
          <img
            class="intro__img"
            src="./assets/img/primeira_rev_ind/img${n}.jpg"
            alt="imagem da revolução selecionada"
          />
        </div>
    `,
  segundaRev: `
    <div class="intro__text">
    <h2 class="intro__title">Segunda revolução industrial</h2>
    <p>
      A segunda revolução industrial teve início nos Estados Unidos, no final do século XIX e começo do século XX, foi chamada também de Revolução do aço e da eletricidade. Nesse período houve o aparecimento do processo de fabricação do aço, a invenção da energia elétrica e dos motoroes elétricos além do desenvolvimento de combustóveis derivados do petróleo.
    </p>
  </div>
  <div class="intro__img__container">
    <img
      class="intro__img"
      src="./assets/img/segunda_rev_ind/img${n}.jpg"
      alt="imagem da revolução selecionada"
    />
  </div>
    `,
  terceiraRev: `
    <div class="intro__text">
    <h2 class="intro__title">Terceira revolução industrial</h2>
    <p>
    Iniciou-se no século XX e é chamada também de Revolução técnico-científica-informacional. Essa Revolução teve avanços tecnológicos jamais vistos anteriormente. Tiveram destaque a robótica, genética, informática, telecomunicações e eletrônica.
    As indústrias que desenvolveram alta tecnologia se sobressaíram em relação aquelas que se destacavam nas fases anteriores.
    </p>
  </div>
  <div class="intro__img__container">
    <img
      class="intro__img"
      src="./assets/img/terceira_rev_ind/img${n}.jpg"
      alt="imagem da revolução selecionada"
    />
  </div>
    `,
  quartaRev: `
    <div class="intro__text">
    <h2 class="intro__title">Quarta revolução industrial</h2>
    <p>
    Já a Quarta Revolução Industrial, ou Indústria 4.0, é a que vivemos atualmente. Impulsionada por um conjunto de tecnologias disruptivas e pela convergência e sinergia entre elas, a mesma traz a conexão entre o mundo digita, o mundo físico, sendo as "coisas", e o mundo biológico que somos nós. Atualmente observa-se a cadeia produtiva nas indústrias totalmente conectada, o que chamamos de manufatura avançada
    </p>
  </div>
  <div class="intro__img__container">
    <img
      class="intro__img"
      src="./assets/img/quarta_rev_ind/img1.jpg"
      alt="imagem da revolução selecionada"
    />
  </div>
    `,
};
