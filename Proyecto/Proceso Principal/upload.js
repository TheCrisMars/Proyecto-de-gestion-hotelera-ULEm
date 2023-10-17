// Función para subir un proyecto
function subirProyecto() {
    // Obtener los valores de los campos del formulario
    const nombres = document.getElementById('nombreEstudiante').value.trim();
    const tituloProyecto = document.getElementById('tituloProyecto').value.trim();
    const nombreEstudiante = document.getElementById('nombreEstudiante').value.trim();
    const asesor = document.getElementById('asesor').value;
    const archivoProyecto = document.getElementById('archivoProyecto').files[0];
    const confirmacionAutor = document.getElementById('confirmacionAutor').checked;

    // Validar que todos los campos estén completos y se haya confirmado que es el autor propio
    if (tituloProyecto === '' || tituloProyecto === '' || asesor === '0' || archivoProyecto === '' || !confirmacionAutor || nombreEstudiante === '') {
        alert('Por favor, complete todos los campos y confirme que es el autor propio.');
        return; // Salir de la función si no se cumple la validación
    }

    // Elementos HTML de la lista de trabajos
    const trabajosList = document.querySelector('#trabajosList');
    const listItem = document.createElement('div');
    listItem.className = 'list-group-item';

    // Obtener el nombre del asesor seleccionado
    const asesorText = document.getElementById('asesor').options[document.getElementById('asesor').selectedIndex].text;

    // Verificar si el archivo es un PDF
    if (archivoProyecto.type === 'application/pdf') {
        listItem.innerHTML = `
            <h6 class="mb-2">Títular: ${tituloProyecto}</h6>
            <p class="mb-2">Correo Electronico: ${nombreEstudiante}</p>
            <p>Acompaniantes: ${asesorText}</p>
            <button class="btn btn-danger btn-sm" onclick="eliminarTrabajo(this)">Eliminar</button>
        `;
        trabajosList.appendChild(listItem);

        // Limpiar los campos después de agregar el trabajo
        document.getElementById('nombres').value = '';
        document.getElementById('tituloProyecto').value = '';
        document.getElementById('asesor').value = '0';
        document.getElementById('archivoProyecto').value = '';
        document.getElementById('confirmacionAutor').checked = false;
    } else {
        alert('El archivo debe ser un PDF.');
    }
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
