const imgBox = document.querySelector(".img-box");
const imgWrap = document.querySelector(".img-wrap");
const originalImg = document.querySelector("#original-img");

originalImg.style.width = imgBox.offsetWidth + "px";

let leftSpace = imgBox.offsetLeft;

imgBox.onmousemove = function(e) {
  let boxWidth = (e.pageX - leftSpace) + "px";
  imgWrap.style.width = boxWidth;
}