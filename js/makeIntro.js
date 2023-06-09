import { content } from "./intro.js";
import { alterImg } from "./alterImg.js";
export let n;



setInterval(alterImg, 3000);

const introContent = document.querySelector('[data-intro="content"]');

const introSlide = [
  { transform: "translateX(50px)" , opacity :0 },
  { transform: "translateX(0px)" , opacity :1 },
];

const introTime = {
  duration: 500,
  iterations: 1,
};

export default function makeIntro(rev) {
  content.forEach((item) => {
    (item.rev == rev) ? introContent.innerHTML = item.html : '';
  });

  introContent.animate(introSlide, introTime);
}
