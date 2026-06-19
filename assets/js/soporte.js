document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Página de Soporte cargada correctamente');

    // ============================================ */
    // FAQ - EXPANDIR AL HACER CLIC                */
    // ============================================ */
    
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', function() {
            const text = this.querySelector('.faq-text').textContent;
            const icon = this.querySelector('.faq-icon');
            
            if (icon.textContent === '+') {
                icon.textContent = '−';
                alert(`📝 Respuesta a: "${text}"\n\nEsta es una respuesta de ejemplo. En la versión final, aquí se mostrará el contenido completo de la respuesta.`);
            } else {
                icon.textContent = '+';
            }
        });
    });

    // ============================================ */
    // BOTONES DE CONTACTO                         */
    // ============================================ */
    
    document.querySelectorAll('.btn-contact').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.classList.contains('whatsapp')) {
                alert('📱 Abriendo WhatsApp...\n\nNúmero: +51 999 888 777');
            } else if (this.classList.contains('email')) {
                alert('📧 Abriendo correo...\n\nDestinatario: soporte@cercati.pe');
            } else if (this.classList.contains('phone')) {
                alert('📞 Llamando...\n\nNúmero: +51 999 888 777');
            }
        });
    });

    // ============================================ */
    // BOTONES DE CTA FINAL - CORREGIDO            */
    // ============================================ */
    
    document.querySelectorAll('.btn-cta').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Si es un enlace real (no #), navegar normalmente
            if (href && href !== '#') {
                // No hacer preventDefault, dejar que navegue
                return;
            }
            
            // Solo prevenir si es un placeholder (#)
            e.preventDefault();
            const text = this.textContent.trim();
            alert(`🔗 Redirigiendo a: ${text}`);
        });
    });
});