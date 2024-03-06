document.addEventListener("DOMContentLoaded", function() {
    const crearPersonaForm = document.getElementById("crearPersonaForm");

    crearPersonaForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Obtener los valores de los campos del formulario
        const nombre = document.getElementById("nombreInput").value;
        const apellidoPaterno = document.getElementById("apellidoPaternoInput").value;
        const apellidoMaterno = document.getElementById("apellidoMaternoInput").value;
        const fechaNacimiento = document.getElementById("fechaNacimientoInput").value;
        const direccion = document.getElementById("direccionInput").value;
        const telefono = document.getElementById("telefonoInput").value;
        const correo = document.getElementById("correoInput").value;

        // Calcular la edad
        const anioNacimiento = new Date(fechaNacimiento).getFullYear();
        const anioActual = new Date().getFullYear();
        const edad = anioActual - anioNacimiento;

        // Crear un objeto con los datos de la nueva persona
        const nuevaPersona = {
            nombre: nombre,
            apellido_paterno: apellidoPaterno,
            apellido_materno: apellidoMaterno,
            anio_nacimiento: fechaNacimiento,
            direccion: direccion,
            telefono: telefono,
            correo: correo,
            edad: edad
        };

        // Realizar una solicitud HTTP POST para crear una nueva persona
        fetch("/personas", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(nuevaPersona)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al crear la persona.");
            }
            return response.json();
        })
        .then(data => {
            alert("Persona creada exitosamente.");
            // Limpiar los campos del formulario
            document.getElementById("nombreInput").value = "";
            document.getElementById("apellidoPaternoInput").value = "";
            document.getElementById("apellidoMaternoInput").value = "";
            document.getElementById("fechaNacimientoInput").value = "";
            document.getElementById("direccionInput").value = "";
            document.getElementById("telefonoInput").value = "";
            document.getElementById("correoInput").value = "";
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error al crear la persona. Por favor, inténtalo de nuevo más tarde.");
        });
    });
});
