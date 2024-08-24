// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!nombre || !email || !mensaje) {
                alert('Por favor, complete todos los campos antes de enviar.');
                return;
            }

            if (!emailRegex.test(email)) {
                alert('Por favor, ingrese un correo electrónico válido.');
                return;
            }

            alert(`Gracias por tu mensaje, ${nombre}. Nos pondremos en contacto contigo a través de ${email}.`);
        });
    }
});