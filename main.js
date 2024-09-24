let image = document.getElementById("image");

let images = document.getElementsByClassName("preview");
for (let img of images) {
  img.setAttribute("tabindex", "0");
}

function upDate(previewPic) {
  let activeSrc = previewPic.getAttribute("src");
  let activeText = previewPic.getAttribute("alt");
  image.style["background-image"] = `url('${activeSrc}')`;
  image.textContent = activeText;
}

function unDo() {
  image.style["background-image"] = "url('')";
  image.style.backgroundColor = "#8e68ff";
  image.textContent = "Hover over an image below to display here.";
}