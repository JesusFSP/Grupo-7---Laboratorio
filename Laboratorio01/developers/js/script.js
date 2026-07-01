document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault(); // Evita que la página se recargue
            
            const nombre = document.getElementById('nombre').value;
            
            // Dispara la alerta que solicitaste
            alert(`SISTEMA: Ticket generado con éxito para ${nombre}. El equipo de Ingeniería de Sistemas procesará su solicitud.`);
            
            // Limpia los campos
            contactForm.reset();
        });
    }
});