import { addImage } from "./addImage.js";
let n = 0;
let l;
export function alterImg() {
     (n == 4) ? n = 1: +n++;
     (n == 2 || n == 4) ? l = 'X' : l = 'Y' ;
    addImage(n, l);
  }