// //MENU DESKTOP
const services = document.querySelector('#services');
const menuOptions = document.querySelector('.menu-options');

services.addEventListener('click', togglemenuOptions);
menuOptions.addEventListener('click', (event) => {
  event.stopPropagation(); // Evita que el click adentro del menú cierre inmediatamente
});

document.addEventListener('click', (event) => {
  if (!menuOptions.classList.contains('inactive') && !services.contains(event.target)) {
    menuOptions.classList.add('inactive');
  }
});

window.addEventListener('scroll', () => {
  if (!menuOptions.classList.contains('inactive')) {
    menuOptions.classList.add('inactive');
  }
});

function togglemenuOptions(event) {
  event.stopPropagation(); // También evita que al hacer click en #services se dispare el document click
  menuOptions.classList.toggle('inactive');
}

//MENU MOBILE
const serviceMobile = document.querySelector('#serviceMobile');
const menuMobile = document.querySelector('.menu-options');

serviceMobile.addEventListener('click', togglemenuMobile);

menuMobile.addEventListener('click', (event) => {
  event.stopPropagation();
});

window.addEventListener('scroll', () => {
  menuMobile.classList.add('inactive');
});

function togglemenuMobile(event) {
  event.preventDefault();   // 👈 evita el doble disparo mobile
  event.stopPropagation();
  menuMobile.classList.toggle('inactive');
}


//CARROUSEL
document.addEventListener('DOMContentLoaded', () => {
  const track = document.getElementById('carouselTrack');
  let speed = 0.5; // píxeles por frame
  let position = 0;

  // Clonamos el contenido 2 veces para tener 3 copias
  const originalContent = track.innerHTML;
  track.innerHTML += originalContent + originalContent + originalContent;

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

//CARDS SPECIALIZATIONS

// const wrappers = document.querySelectorAll('.card-wrapper')

// wrappers.forEach(wrapper => {
//   wrapper.addEventListener('mouseenter', () => {
//     wrappers.forEach(w => {
//       const card = w.querySelector('.specialization-card')
//       card.classList.remove('specialization-card-expanded')
//       w.classList.remove('expanded', 'shrunk')
//     })

//     wrapper.classList.add('expanded')
//     wrapper.querySelector('.specialization-card')
//       .classList.add('specialization-card-expanded')

//     wrappers.forEach(w => {
//       if (w !== wrapper) {
//         w.classList.add('shrunk')
//       }
//     })
//   })

//   wrapper.addEventListener('mouseleave', () => {
//     wrappers.forEach(w => {
//       w.classList.remove('expanded', 'shrunk')
//       w.querySelector('.specialization-card')
//         .classList.remove('specialization-card-expanded')
//     })
//   })
// })

const wrappers = document.querySelectorAll('.card-wrapper');

wrappers.forEach(wrapper => {
  wrapper.addEventListener('mouseenter', () => {
    // Solo se ejecuta si la pantalla es mayor a 768px
    if (window.innerWidth < 768) return;

    wrappers.forEach(w => {
      const card = w.querySelector('.specialization-card');
      card.classList.remove('specialization-card-expanded');
      w.classList.remove('expanded', 'shrunk');
    });

    wrapper.classList.add('expanded');
    wrapper.querySelector('.specialization-card').classList.add('specialization-card-expanded');

    wrappers.forEach(w => {
      if (w !== wrapper) w.classList.add('shrunk');
    });
  });

  wrapper.addEventListener('mouseleave', () => {
    if (window.innerWidth < 768) return;

    wrappers.forEach(w => {
      w.classList.remove('expanded', 'shrunk');
      w.querySelector('.specialization-card').classList.remove('specialization-card-expanded');
    });
  });
});

//MENU SCROLL
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("site-header");

  if (!header) return;

  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 20);
  });
});