// Función para eliminar una persona
function eliminarPersona(id) {
    fetch(`/personas/${id}`, {
        method: 'DELETE'
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al eliminar la persona.');
        }
        // Verificar si hay contenido en la respuesta antes de intentar analizarla
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
            return response.json();
        } else {
            return {};
        }
    })
    .then(data => {
        alert('Persona eliminada exitosamente.');

    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error al eliminar la persona. Por favor, inténtalo de nuevo más tarde.');
    });
}
