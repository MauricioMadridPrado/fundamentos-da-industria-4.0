import { content } from "./intro.js";
const introContent = document.querySelector('[data-intro="content"]')

const introSpin = [
    { transform: "translateX(300px)" },
    { transform: "translateX(0px)" },
  ];
  
  const introTime = {
    duration: 400,
    iterations: 1,
  };
  

export default function makeIntro(rev){
    if(rev == 'primeiraRev')  introContent.innerHTML = content.primeiraRev;
    if(rev == 'segundaRev')  introContent.innerHTML = content.segundaRev;
    if(rev == 'terceiraRev')  introContent.innerHTML = content.terceiraRev;
    if(rev == 'quartaRev')  introContent.innerHTML = content.quartaRev;
    introContent.animate(introSpin, introTime)
}