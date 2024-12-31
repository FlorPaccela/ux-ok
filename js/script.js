
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

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Evita el envío del formulario

  // Obtener los campos del formulario
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  // Variables para rastrear errores
  let isValid = true;

  // Validar Nombre y Apellido
  if (nameInput.value.trim() === "") {
    showError(nameInput, "El nombre y apellido es obligatorio.");
    isValid = false;
  } else {
    clearError(nameInput);
  }

  // Validar Email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Patrón simple para email
  if (emailInput.value.trim() === "") {
    showError(emailInput, "El correo electrónico es obligatorio.");
    isValid = false;
  } else if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, "Por favor, ingrese un correo electrónico válido.");
    isValid = false;
  } else {
    clearError(emailInput);
  }

  // Validar Mensaje
  if (messageInput.value.trim() === "") {
    showError(messageInput, "El mensaje no puede estar vacío.");
    isValid = false;
  } else {
    clearError(messageInput);
  }

  // Si todo es válido, enviar el formulario
  if (isValid) {
    alert("Formulario enviado con éxito.");
    this.reset(); // Reinicia el formulario
  }
});

// Función para mostrar el mensaje de error
function showError(input, message) {
  const errorMessage = input.nextElementSibling; // Selecciona el <p> debajo del input
  errorMessage.textContent = message; // Muestra el mensaje
  errorMessage.style.display = "block"; // Hace visible el mensaje
  input.classList.add("error"); // Resalta el borde del input
}

// Función para limpiar el mensaje de error
function clearError(input) {
  const errorMessage = input.nextElementSibling; // Selecciona el <p> debajo del input
  errorMessage.textContent = ""; // Limpia el mensaje
  errorMessage.style.display = "none"; // Oculta el mensaje
  input.classList.remove("error"); // Quita el borde rojo del input
}

