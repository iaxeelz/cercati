        document.addEventListener('DOMContentLoaded', function() {
            console.log('✅ Página de Comunidad cargada correctamente');

            // ============================================ */
            // FILTROS DE CATEGORÍAS                       */
            // ============================================ */
            
            const filterBtns = document.querySelectorAll('.filter-btn');
            const storyCards = document.querySelectorAll('.story-card');

            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    // Remover active de todos los botones
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');

                    const category = this.dataset.category;

                    storyCards.forEach(card => {
                        if (category === 'all' || card.dataset.category === category) {
                            card.style.display = 'block';
                            setTimeout(() => {
                                card.style.opacity = '1';
                                card.style.transform = 'translateY(0)';
                            }, 100);
                        } else {
                            card.style.opacity = '0';
                            card.style.transform = 'translateY(20px)';
                            setTimeout(() => {
                                card.style.display = 'none';
                            }, 300);
                        }
                    });
                });
            });

            // ============================================ */
            // ANIMACIÓN DE ENTRADA                        */
            // ============================================ */
            
            const cards = document.querySelectorAll('.story-card, .testimonial-card');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 120);
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