let emptyElement = document.querySelector(`.about .empty`);

let titleElement = document.querySelector(`.about .title`);

let figureElement = document.querySelectorAll(`.service figure`);

window.addEventListener("mousemove", handleMouseMove);

function handleMouseMove(event) {
  console.log(event.clientX);
  emptyElement.style.flexBasis = `${event.clientX}px`;
  titleElement.style.flexBasis = `${event.clientY / 2}px`;

  figureElement.forEach(function (element) {
    element.style.flexBasis = window.innerWidth - event.clientX + `px`;
  });
}

let dropdownbutton = document.querySelector(`nav .dropdown button`);
console.log(dropdownbutton);

let aboutSection = document.querySelector(`section .about`);
console.log(aboutSection);

dropdownbutton.addEventListener("click", dropdownAbout);

function dropdownAbout(event) {
  aboutSection.style.marginTop = `400 px`;
}
