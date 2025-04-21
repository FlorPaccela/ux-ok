
//CARROUSEL
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack');
  let speed = 0.5; // píxeles por frame
  let position = 0;

  // Clonamos el contenido 2 veces para tener 3 copias
  const originalContent = track.innerHTML;
  track.innerHTML += originalContent  + originalContent + originalContent;

  function animate() {
    position -= speed;
    track.style.transform = `translateX(${position}px)`;

    // Cuando pasó un tercio, agregamos más contenido
    if (Math.abs(position) >= track.scrollWidth / 3) {
      track.innerHTML += originalContent;
    }

    requestAnimationFrame(animate);
  }

  animate();
});

//FORMULARIO 

document.addEventListener("DOMContentLoaded", () => {  
    const accordionHeaders = document.querySelectorAll(".accordion-header");
 

    accordionHeaders.forEach((header) => {
      header.addEventListener("click", () => {
        // Cierra todos los contenidos abiertos (si quieres un solo item abierto a la vez)
        accordionHeaders.forEach((item) => {
          if (item !== header) {
            item.classList.remove("active");
            item.nextElementSibling.classList.remove("active");  
          }
        });
  
        // Alterna el contenido actual
        header.classList.toggle("active");
        header.nextElementSibling.classList.toggle("active");
        
      });
    });
});
