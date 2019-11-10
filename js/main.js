const loaderLayer = document.getElementById("js-loadingLayer");
const loadedTransiton = () => {
  loaderLayer.classList.remove("active");
}
window.addEventListener("load", loadedTransiton);
