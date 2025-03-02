
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
