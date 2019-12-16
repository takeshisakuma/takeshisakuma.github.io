//loader
const loaderLayer = document.getElementById("js-loadingLayer");
const loadedTransiton = () => {
  loaderLayer.classList.remove("active");
}
window.addEventListener("load", loadedTransiton);




// intersection observer
const startIntersectionObserver = () => {

  const callback = (entries, observer) => {
    entries.forEach(entry => {

      if (entry.intersectionRatio >= 0.2) {
        entry.target.classList.add('active')
      } else if (!entry.isIntersecting) {
        entry.target.classList.remove('active')
      }
    })
  }

  const option = {
    threshold: [0.2, 1]
  }

  const observer = new IntersectionObserver(callback, option);

  const targetList = document.querySelectorAll('.js-interSectionTarget');
  const targetArray = [...targetList];


  targetArray.forEach((target) => {
    observer.observe(target);
  })

}

startIntersectionObserver()
