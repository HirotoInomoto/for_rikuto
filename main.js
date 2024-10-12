let modal = document.getElementById("school_info__modal");
let frameName = document.getElementById("school_name");
let frameExplanation = document.getElementById("school_explanation");
let frameTeacher = document.getElementById("school_teacher");
let frameAddress = document.getElementById("school_address");
let frameMaplink = document.getElementById("school_maplink");
let frameMap = document.getElementById("school_map");
let frameImage = document.getElementById("school_image");
let imageList = document.querySelectorAll(".school_info__modal__image__list img");
let schoolList = document.querySelectorAll(".school_info__content");

schoolList.forEach((element) => {
  element.addEventListener("click", () => {
    // modal.style.display = "flex";
    modal.classList.add("modal-active");

    setTimeout(function () {
      let schoolNum = parseInt(element.getAttribute("id").split("-")[1]);
      frameName.innerText = dataList[schoolNum][0];
      frameExplanation.innerText = dataList[schoolNum][1];
      frameTeacher.setAttribute("href", dataList[schoolNum][5]);
      frameAddress.innerText = dataList[schoolNum][2];
      frameMaplink.setAttribute("href", dataList[schoolNum][3]);
      frameMap.setAttribute("src", dataList[schoolNum][4]);
      frameImage.setAttribute("src", dataList[schoolNum][6]);
      for (let i = 6; i < 13; i++) {
        if (dataList[schoolNum][i]) {
          imageList[i - 6].setAttribute("src", dataList[schoolNum][i]);
          imageList[i - 6].style.display = "block";
        } else {
          imageList[i - 6].style.display = "none";
        }
      }
      modal.style.opacity = 1;
    }, 10);
  });
});

document.getElementById("school_info__modal__close").addEventListener("click", () => {
  modal.style.opacity = 0;
  setTimeout(function () {
    // modal.style.display = "none";
    modal.classList.remove("modal-active");
  }, 500);
});

imageList.forEach((element) => {
  element.addEventListener("click", () => {
    frameImage.style.opacity = 0;
    setTimeout(function () {
      frameImage.setAttribute("src", element.getAttribute("src"));
    }, 200);
    setTimeout(function () {
      frameImage.style.opacity = 1;
    }, 200);
  });
});
