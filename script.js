// PENTING BUAT VIEWPORT EVENT
function inViewport(element) {
  var posisi = element.getBoundingClientRect();
  // cek posisi pas element udah 20% atau 0.2 keliatan
  return !(posisi.top > innerHeight * 0.8 || posisi.bottom < 0);
}

var myElement = document.querySelectorAll(".hidden");

// EKSEKUSI VIEWPORT EVENT
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

window.onload = () => {
  setTimeout(() => {
    document.querySelector('.logo img').style.width = '70%';
    document.querySelector('nav').style.padding= '0.6rem 4rem';
    document.querySelector("nav").style.backgroundColor ="rgba(255, 255, 255, 0.528)";
    document.querySelector(".logo p").style.color = "rgb(62, 34, 34)";
  }, 1000)
};
