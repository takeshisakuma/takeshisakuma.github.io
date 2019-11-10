const loaderLayer = document.getElementById("js-loadingLayer");
const loadedTransiton = () => {
  loaderLayer.classList.remove("active");
}
window.addEventListener("load", loadedTransiton);




/*
const aaa = document.getElementsByClassName("favorite__item");
console.log(aaa);
for (let i = 0; i < aaa.length; i++) {
  aaa[i].style.opacity = 0;
}
const jk = () => {
  for (let i = 0; i < aaa.length; i++) {
    aaa[i].style.opacity += 0.1;
  }
}
*/
