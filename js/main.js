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



//セクション出現

const callback = (entries, observer) => {
  Object.keys(entries).forEach(entry => {
    console.log(entries[entry].target);
    entries[entry].target.classList.add("active");
  })
}
/*
const callback = (entries, observer) => {
  //Object.keys(entries).forEach(entry => {
  console.log(entries.target);
  //observer.observe[0].classList.add("active");
  console.log(entries);
  console.log(observer[entries]);
  //}
  //)
}
*/
const options = {
  root: null,
  rootMargin: '0px',
  threshold: [0.25, 0.5]
}

const observer = new IntersectionObserver(callback, options);


const targets = document.querySelectorAll('.js-interSectionTarget');
targets.forEach(target => {
  observer.observe(target);

});
