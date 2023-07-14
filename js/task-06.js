const validacion = document.getElementById("validation-input");

validacion.addEventListener("blur", () => {
  const tamañoEsperado = 6;
  const tamañoActual = validacion.value.length;

  if (tamañoActual === tamañoEsperado) {
    validacion.classList.remove("invalid");
    validacion.classList.add("valid");
  } else {
    validacion.classList.remove("valid");
    validacion.classList.add("invalid");
  }
});
