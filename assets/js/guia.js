        document.addEventListener('DOMContentLoaded', function() {
            console.log('✅ Página de Guía cargada correctamente');

            // ============================================ */
            // ANIMACIÓN DE ENTRADA                        */
            // ============================================ */
            
            const cards = document.querySelectorAll('.step-card, .tip-card');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 100);
                    }
                });
            }, { threshold: 0.1 });
            
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(30px)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(card);
            });
        });