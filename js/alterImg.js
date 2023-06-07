import { addImage } from "./addImage.js";
let n = 0;
let l;

export function alterImg() {
    if (n == 3) {
      l = "Y";
      n = 1;
    } else {
      l = "X";
      +n++;
    }
  
    addImage(n, l);
  }