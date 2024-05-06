const header = document.getElementById("header");
const nextBtn = document.getElementById("right");
const prevBtn = document.getElementById("left");
const sectionNew = document.querySelectorAll(".sectionNew");

// Function to apply classes based on the scroll

document.getElementById('miIframe').addEventListener('load', function() {
  // Obtiene el documento del iframe
  var iframeDoc = document.getElementById('miIframe').contentDocument || document.getElementById('miIframe').contentWindow.document;

  // Encuentra todos los scripts dentro del documento del iframe
  var scripts = iframeDoc.getElementsByTagName('script');
  
  // Itera sobre todos los scripts y agrega el atributo 'async'
  for (var i = 0; i < scripts.length; i++) {
      scripts[i].setAttribute('async', true);
  }
});

function isScrolled(value) {
  if (window.scrollY > value) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", () => {
  isScrolled(0);
});

let currentIndex = 0;

nextBtn.addEventListener('click', () => {
    if (currentIndex < sectionNew.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // Vuelve al primer elemento si llega al final
    }
    updateCarousel();
});

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = sectionNew.length - 1; // Va al último elemento si está en el primero
    }
    updateCarousel();
});

function updateCarousel() {
    const newPosition = -currentIndex * 100;
    sectionNew.forEach((e) => {
        e.style.transform = `translateX(${newPosition}%)`;
    });
}
