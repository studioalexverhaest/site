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

let dropdowninstallations = document.querySelector(
  `nav .dropdownInstallations button`
);

let isOpen = false;

dropdownbutton.addEventListener("click", dropdownAbout);

dropdowninstallations.addEventListener("click", dropdownAbout);

function dropdownAbout(event) {
  event.preventDefault();
  let aboutSection = document.querySelector(`section.about`);
  if (isOpen) {
    aboutSection.style.marginTop = `200px`;
  } else {
    aboutSection.style.marginTop = `200px`;
  }
  // isOpen = !isOpen;
}

let aboutbutton = document.querySelector("nav .aboutbutton");
console.log(aboutbutton);

let commissionsbutton = document.querySelector(`nav .commissionsbutton`);

aboutbutton.addEventListener("click", dropupAbout);

commissionsbutton.addEventListener("click", dropupAbout);

function dropupAbout(event) {
  event.preventDefault();
  let aboutSection = document.querySelector(`section.about`);
  if (isOpen) {
    aboutSection.style.marginTop = `0px`;
  } else {
    aboutSection.style.marginTop = `0px`;
  }
}
