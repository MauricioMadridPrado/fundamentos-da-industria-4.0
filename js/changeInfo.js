export default function changeInfo(revNumber) {
  const infos = document.querySelectorAll("[data-info]");
  infos.forEach((info) => {
    const requiredRev = info.dataset.info;
    if (revNumber == requiredRev) {
      info.classList.remove("hide");
      const introSlide = [
        { transform: "translateY(-50px)" , opacity :0 },
        { transform: "translateY(0px)" , opacity :1 },
      ];
      
      const introTime = {
        duration: 750,
        iterations: 1,
      };
      info.animate(introSlide, introTime);

    } else{
        info.classList.add("hide"); 
    }
  });
}
