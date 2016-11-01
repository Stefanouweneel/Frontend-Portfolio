var thumbs1 = document.getElementById("thumbnail-slider");
var thumbs2 = document.getElementById("thumbs2");
var closeBtn = document.getElementById("closeBtn");
var slides = thumbs1.getElementsByTagName("li");
for (var i = 0; i < slides.length; i++) {
  slides[i].index = i;
  slides[i].onclick = function (e) {
    var li = this;
    var clickedEnlargeBtn = false;
    if (e.offsetX > 220 && e.offsetY < 25) clickedEnlargeBtn = true;
    if (li.className.indexOf("active") != -1 || clickedEnlargeBtn) {
      thumbs2.style.display = "block";
      mcThumbs2.init(li.index);
    }
  };
}
thumbs2.onclick = closeBtn.onclick = function (e) {
  thumbs2.style.display = "none";
};
