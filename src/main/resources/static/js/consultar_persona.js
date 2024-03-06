document.addEventListener("DOMContentLoaded", function() {
    const tablaPersonas = document.getElementById("tablaPersonas");

    tablaPersonas.addEventListener("click", function(event) {
        const fila = event.target.closest("tr"); // Obtener la fila más cercana al elemento clickeado

        if (fila) {

            tablaPersonas.querySelectorAll("tr").forEach(fila => {
                fila.classList.remove("seleccionada");
            });


            fila.classList.add("seleccionada");
        }
    });

    // Obtener referencia a los elementos del DOM
    const mostrarTodasPersonasBtn = document.getElementById("mostrarTodasPersonasBtn");
    const buscarPersonaForm = document.getElementById("buscarPersonaForm");


    mostrarTodasPersonasBtn.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del botón

        // Realizar una solicitud HTTP GET para obtener todas las personas
        fetch("/personas")
            .then(response => response.json())
            .then(data => {
                // Procesar la respuesta y muestra el resultado en la página
                const tableBody = document.querySelector("#tablaPersonas tbody");
                tableBody.innerHTML = ""; // Limpiar contenido

                // Agregar filas a la tabla con los datos de cada persona
                data.forEach(persona => {
                    const row = tableBody.insertRow();
                    row.innerHTML = `
                        <td>${persona.id_persona}</td>
                        <td>${persona.nombre}</td>
                        <td>${persona.apellido_paterno}</td>
                        <td>${persona.apellido_materno}</td>
                        <td>${persona.anio_nacimiento}</td>
                        <td>${persona.direccion}</td>
                        <td>${persona.telefono}</td>
                        <td>${persona.correo}</td>
                        <td>${persona.edad}</td>
                        <td><button class="eliminar-btn" data-id="${persona.id_persona}">Eliminar</button></td>
                    `;
                });

                // Evento clic a todos los botones de eliminar
                document.querySelectorAll('.eliminar-btn').forEach(button => {
                 button.classList.add('btn', 'btn-danger');
                    button.addEventListener('click', function() {
                        const personaId = this.getAttribute('data-id'); // Obtener el ID de la persona desde el atributo data-id
                        if (confirm(`¿Estás seguro que deseas eliminar la persona con ID ${personaId}?`)) {
                            eliminarPersona(personaId); // Llamar a la función para eliminar la persona
                        }
                    });
                });
            })
            .catch(error => {
                console.error("Error al consultar las personas:", error);
                alert("Error al consultar las personas. Por favor, inténtalo de nuevo más tarde.");
            });
    });

    // Maneja el envío del formulario para buscar por ID
    buscarPersonaForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar el comportamiento por defecto del formulario

        // Obtener el valor del campo de entrada (ID de la persona)
        const idPersona = document.getElementById("idPersonaInput").value;

        // Realiza una solicitud HTTP GET para buscar la persona por su ID
        fetch("/personas/" + idPersona)
            .then(response => response.json())
            .then(persona => {

                const tableBody = document.querySelector("#tablaPersonas tbody");
                tableBody.innerHTML = ""; // Limpiar contenido anterior
                if (persona) {
                    // Agregar fila a la tabla con los datos de la persona encontrada
                    const row = tableBody.insertRow();
                    row.innerHTML = `
                        <td>${persona.id_persona}</td>
                        <td>${persona.nombre}</td>
                        <td>${persona.apellido_paterno}</td>
                        <td>${persona.apellido_materno}</td>
                        <td>${persona.anio_nacimiento}</td>
                        <td>${persona.direccion}</td>
                        <td>${persona.telefono}</td>
                        <td>${persona.correo}</td>
                        <td>${persona.edad}</td>
                        <td><button class="eliminar-btn" data-id="${persona.id_persona}">Eliminar</button></td>
                    `;
                } else {
                    tableBody.innerHTML = "<tr><td colspan='9'>No se encontró ninguna persona con el ID especificado.</td></tr>";
                }

                // Agregar un evento clic al botón de eliminar
                document.querySelectorAll('.eliminar-btn').forEach(button => {
                    button.addEventListener('click', function() {
                        const personaId = this.getAttribute('data-id'); // Obtener el ID de la persona desde el atributo data-id
                        if (confirm(`¿Estás seguro que deseas eliminar la persona con ID ${personaId}?`)) {
                            eliminarPersona(personaId); // Llamar a la función para eliminar la persona
                        }
                    });
                });
            })
            .catch(error => {
                console.error("Error al buscar la persona:", error);
                alert("Error al buscar la persona. Por favor, inténtalo de nuevo más tarde.");
            });
    });
});
