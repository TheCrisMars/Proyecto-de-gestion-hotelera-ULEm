// Función para subir un proyecto
function subirProyecto() {
    const apellidos = document.getElementById('apellidos').value.trim();
    const tituloProyecto = document.getElementById('tituloProyecto').value.trim();
    const nombreEstudiante = document.getElementById('nombreEstudiante').value.trim();
    const asesor = document.getElementById('asesor').value;
    const fechaExpiracion = document.getElementById('fechaExpiracion').value.trim();
    const codigoSeguridad = document.getElementById('codigoSeguridad').value.trim();
  
    // Validar que todos los campos estén completos
    if (tituloProyecto === '' || apellidos === '' || nombreEstudiante === '' || asesor === 'Acompaniantes:' || fechaExpiracion === '' || codigoSeguridad === '') {
      alert('Por favor, complete todos los campos.');
      return;
    }
  
    // Crear un nuevo elemento en la lista de trabajos
    const trabajosList = document.querySelector('#trabajosList');
    const listItem = document.createElement('div');
    listItem.className = 'list-group-item';

    // Función para validar el número de tarjeta (debe contener 16 dígitos)
function validarTarjeta(input) {
    const valor = input.value.trim();
    if (!/^\d{16}$/.test(valor)) {
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
    }
  }
  
  // Función para validar la fecha de expiración (debe tener el formato MM/YY)
  function validarFechaExpiracion(input) {
    const valor = input.value.trim();
    if (!/^(0[1-9]|1[0-2])\/\d{2}$/.test(valor)) {
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
    }
  }
  
  // Función para validar el código de seguridad (debe contener 3 o 4 dígitos)
  function validarCodigoSeguridad(input) {
    const valor = input.value.trim();
    if (!/^\d{3,4}$/.test(valor)) {
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
    }
  }
  
    // Obtener el nombre del asesor seleccionado
    const asesorText = document.getElementById('asesor').options[document.getElementById('asesor').selectedIndex].text;
  
    listItem.innerHTML = `
      <h6 class="mb-2">Nombres: ${tituloProyecto} ${apellidos}</h6>
      <p class="mb-2">Correo Electrónico: ${nombreEstudiante}</p>
      <p>Acompañantes: ${asesorText}</p>
      <button class="btn btn-danger btn-sm" onclick="eliminarTrabajo(this)">Eliminar</button>
    `;
    trabajosList.appendChild(listItem);
  
    // Limpiar los campos después de agregar el trabajo
    document.getElementById('tituloProyecto').value = '';
    document.getElementById('apellidos').value = '';
    document.getElementById('Numero').value = '';
    document.getElementById('nombreEstudiante').value = '';
    document.getElementById('asesor').value = 'Acompaniantes:';
    document.getElementById('fechaExpiracion').value = '';
    document.getElementById('codigoSeguridad').value = '';
  }
  
  // Función para eliminar un trabajo de la lista
  function eliminarTrabajo(button) {
    const listItem = button.parentElement;
    listItem.remove();
  }
  
  // Función para validar campos de entrada
  function validarCampo(input) {
    const valor = input.value.trim();
    if (valor === '') {
      input.classList.add('is-invalid');
    } else {
      input.classList.remove('is-invalid');
    }
  }
