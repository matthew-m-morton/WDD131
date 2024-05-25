// Part 1
const ToggleNav = document.querySelector('#navtoggle');
const navMenu = document.querySelector('nav');
function navhide (){
    navMenu.classList.toggle('hide');
}
ToggleNav.addEventListener("click", navhide);

// Part 2
function handleResize () {
    if (window.innerWidth > 1000) {
        navMenu.classList.remove('hide');
    }
    // else {
    //     navMenu.classList.add('hide');
    // }
}
handleResize();
window.addEventListener('resize', handleResize);
// Part 3

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button class="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
  }

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    const srcParts = clickedElement.src.split('_');
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newSrc = srcParts[0] + '_full.jpeg';
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    const viewerHTML = viewerTemplate(newSrc, clickedElement.alt);
    document.body.insertAdjacentHTML("afterbegin", viewerHTML);
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector('.close-viewer');
    closeButton.addEventListener('click', closeViewer);
  }

function closeViewer() {
  const viewer = document.querySelector('.viewer');
  if (viewer) {
      viewer.remove();
  }
}

const images = document.querySelectorAll('.gallery img');
images.forEach(image => {
  image.addEventListener('click', viewHandler);
});
