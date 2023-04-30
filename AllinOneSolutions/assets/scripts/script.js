popUpWindow = () => {
  targetDiv.style.display = "flex";

  clickBtn.setAttribute("disabled", "");
};

clickBtn.addEventListener("click", popUpWindow);

let slideIndex = 1;

inputField.onchange = showPhoto = () => {
  carouselContainer.style.display = "flex";

  const obj = addedImages.files;
  for (let idx = obj.length - 1; idx >= 0; idx--) {
    const fileObjName = obj[idx].name;

    const imageTag = document.createElement("img");
    const imageSrc = "/assets/images/" + fileObjName;

    imageTag.src = imageSrc;

    imageTag.classList.add("carouselImage");

    addImageToCarousel(imageTag);
  }

  inputFormContainer.style.display = "none";

  // const dotParentDiv = document.querySelector('.dotsClass');

  // for (let idx = 0; idx < obj.length; idx++) {
  //   const dotDiv = document.createElement("div");
  //   dotDiv.classList.add("dot");
  //   dotParentDiv.appendChild(dotDiv);
  // }

  showSlides(slideIndex);
};

function addImageToCarousel(imageTag) {
  const tempDiv = document.createElement("div");
  tempDiv.classList.add("mySlides");
  tempDiv.classList.add("fade");

  tempDiv.appendChild(imageTag);

  carouselContainer.prepend(tempDiv);
}

// nextBtn.addEventListener("click", (resizeDiv = () => {
//   cardClass.style.width = '700px';
// }));

let state = 0;

nextBtn.addEventListener('click', showRight = () => {
  hiddenRight.style.display = 'flex'; 
  cardClass.classList.add('card2');
  nextBtn.classList.add('nextBtn2');
  hiddenRight.classList.add('hiddenRight2');
})
