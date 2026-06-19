        document.addEventListener('DOMContentLoaded', function() {
            console.log('✅ Página de Métodos de Pago cargada correctamente');

            // Botones de pago
            document.querySelectorAll('.btn-payment').forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const metodo = this.closest('.payment-card').querySelector('h3').textContent;
                    alert(`✅ Has seleccionado: ${metodo}\n\nRedirigiendo al proceso de pago...`);
                });
            });
        });