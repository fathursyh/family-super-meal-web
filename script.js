
function inViewport(element) {
  var posisi = element.getBoundingClientRect();
  // cek posisi pas element udah 30% atau 0.3 keliatan
  return !(posisi.top > innerHeight * 0.7 || posisi.bottom < 0);
}

var myElement = document.querySelectorAll(".hidden");

document.addEventListener("scroll", () => {
  myElement.forEach((item) => {
    if (inViewport(item)) {
      item.classList.remove("hidden");
      item
    } else {
      item.classList.add("hidden");
    }
  });
});
