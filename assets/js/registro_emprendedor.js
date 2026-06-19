        document.addEventListener('DOMContentLoaded', function() {
            
            const registerForm = document.getElementById('registerFormEmprendedor');
            const profilePhotoInput = document.getElementById('profilePhotoInput');
            const profilePhotoPreview = document.getElementById('profilePhotoImg');
            const photoContainer = document.getElementById('profilePhotoPreview');
            const togglePassword1 = document.getElementById('togglePassword1');
            const togglePassword2 = document.getElementById('togglePassword2');
            const passwordInput = document.getElementById('emprendedorPassword');
            const confirmPasswordInput = document.getElementById('emprendedorConfirmPassword');
            const passwordStrength = document.getElementById('passwordStrength');
            
            photoContainer.addEventListener('click', function() {
                profilePhotoInput.click();
            });
            
            profilePhotoInput.addEventListener('change', function(e) {
                const file = e.target.files[0];
                if (file) {
                    const reader = new FileReader();
                    reader.onload = function(event) {
                        profilePhotoPreview.src = event.target.result;
                        photoContainer.classList.add('has-photo');
                    };
                    reader.readAsDataURL(file);
                }
            });
            
            function togglePasswordVisibility(input, toggleIcon) {
                if (input.type === 'password') {
                    input.type = 'text';
                    toggleIcon.classList.remove('fa-eye');
                    toggleIcon.classList.add('fa-eye-slash');
                } else {
                    input.type = 'password';
                    toggleIcon.classList.remove('fa-eye-slash');
                    toggleIcon.classList.add('fa-eye');
                }
            }
            
            togglePassword1.addEventListener('click', function() {
                togglePasswordVisibility(passwordInput, this);
            });
            
            togglePassword2.addEventListener('click', function() {
                togglePasswordVisibility(confirmPasswordInput, this);
            });
            
            passwordInput.addEventListener('input', function() {
                const password = this.value;
                const bars = passwordStrength.querySelectorAll('.strength-bar');
                const text = passwordStrength.querySelector('.strength-text');
                
                let strength = 0;
                
                if (password.length >= 8) strength++;
                if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
                if (/[0-9]/.test(password)) strength++;
                if (/[^a-zA-Z0-9]/.test(password)) strength++;
                
                bars.forEach(bar => {
                    bar.classList.remove('active', 'weak', 'medium', 'strong');
                });
                
                if (password.length === 0) {
                    text.textContent = '';
                    return;
                }
                
                if (strength <= 1) {
                    text.textContent = 'Débil';
                    text.style.color = '#ef4444';
                    bars[0].classList.add('active', 'weak');
                } else if (strength === 2) {
                    text.textContent = 'Regular';
                    text.style.color = '#f59e0b';
                    bars[0].classList.add('active', 'medium');
                    bars[1].classList.add('active', 'medium');
                } else if (strength === 3) {
                    text.textContent = 'Fuerte';
                    text.style.color = '#22c55e';
                    bars[0].classList.add('active', 'strong');
                    bars[1].classList.add('active', 'strong');
                    bars[2].classList.add('active', 'strong');
                } else {
                    text.textContent = 'Muy fuerte';
                    text.style.color = '#16a34a';
                    bars[0].classList.add('active', 'strong');
                    bars[1].classList.add('active', 'strong');
                    bars[2].classList.add('active', 'strong');
                    bars[3].classList.add('active', 'strong');
                }
            });
            
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const nombre = document.getElementById('emprendedorNombre').value.trim();
                const email = document.getElementById('emprendedorEmail').value.trim();
                const telefono = document.getElementById('emprendedorTelefono').value.trim();
                const password = passwordInput.value;
                const confirmPassword = confirmPasswordInput.value;
                const terminos = document.getElementById('terminosEmprendedor').checked;
                
                let isValid = true;
                let errors = [];
                
                document.querySelectorAll('.error-message').forEach(el => {
                    el.classList.remove('show');
                    el.textContent = '';
                });
                document.querySelectorAll('.form-input').forEach(el => {
                    el.classList.remove('error', 'success');
                });
                
                if (nombre.length < 3) {
                    errors.push('El nombre debe tener al menos 3 caracteres');
                    const errorEl = document.getElementById('errorNombre');
                    errorEl.textContent = 'El nombre debe tener al menos 3 caracteres';
                    errorEl.classList.add('show');
                    document.getElementById('emprendedorNombre').classList.add('error');
                    isValid = false;
                } else {
                    document.getElementById('emprendedorNombre').classList.add('success');
                }
                
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email)) {
                    errors.push('Ingresa un correo electrónico válido');
                    const errorEl = document.getElementById('errorEmail');
                    errorEl.textContent = 'Ingresa un correo electrónico válido';
                    errorEl.classList.add('show');
                    document.getElementById('emprendedorEmail').classList.add('error');
                    isValid = false;
                } else {
                    document.getElementById('emprendedorEmail').classList.add('success');
                }
                
                const phoneRegex = /^[\+\d\s\-\(\)]{9,15}$/;
                if (!phoneRegex.test(telefono)) {
                    errors.push('Ingresa un número de teléfono válido');
                    const errorEl = document.getElementById('errorTelefono');
                    errorEl.textContent = 'Ingresa un número de teléfono válido';
                    errorEl.classList.add('show');
                    document.getElementById('emprendedorTelefono').classList.add('error');
                    isValid = false;
                } else {
                    document.getElementById('emprendedorTelefono').classList.add('success');
                }
                
                if (password.length < 8) {
                    errors.push('La contraseña debe tener al menos 8 caracteres');
                    const errorEl = document.getElementById('errorPassword');
                    errorEl.textContent = 'La contraseña debe tener al menos 8 caracteres';
                    errorEl.classList.add('show');
                    document.getElementById('emprendedorPassword').classList.add('error');
                    isValid = false;
                } else {
                    document.getElementById('emprendedorPassword').classList.add('success');
                }
                
                if (password !== confirmPassword) {
                    errors.push('Las contraseñas no coinciden');
                    const errorEl = document.getElementById('errorConfirmPassword');
                    errorEl.textContent = 'Las contraseñas no coinciden';
                    errorEl.classList.add('show');
                    document.getElementById('emprendedorConfirmPassword').classList.add('error');
                    isValid = false;
                } else if (confirmPassword.length > 0) {
                    document.getElementById('emprendedorConfirmPassword').classList.add('success');
                }
                
                if (!terminos) {
                    errors.push('Debes aceptar los términos y condiciones');
                    document.getElementById('terminosContainer').style.border = '2px solid #ef4444';
                    document.getElementById('terminosContainer').style.borderRadius = '8px';
                    document.getElementById('terminosContainer').style.padding = '10px';
                    isValid = false;
                } else {
                    document.getElementById('terminosContainer').style.border = 'none';
                    document.getElementById('terminosContainer').style.padding = '10px 0';
                }
                
                if (isValid) {
                    const emprendedorData = {
                        nombre: nombre,
                        email: email,
                        telefono: telefono,
                        password: password,
                        tipo: 'emprendedor',
                        fechaRegistro: new Date().toISOString(),
                        negocio: null
                    };
                    
                    guardarUsuario(emprendedorData);
                    
                    mostrarExito('¡Cuenta de emprendedor creada exitosamente!');
                    
                    registerForm.reset();
                    document.querySelectorAll('.form-input').forEach(el => {
                        el.classList.remove('success', 'error');
                    });
                    document.querySelectorAll('.strength-bar').forEach(el => {
                        el.classList.remove('active', 'weak', 'medium', 'strong');
                    });
                    document.querySelector('.strength-text').textContent = '';
                    
                } else {
                    mostrarErrores(errors);
                }
            });
            
            function guardarUsuario(data) {
                let usuarios = JSON.parse(localStorage.getItem('cercati_usuarios')) || [];
                
                const existe = usuarios.find(u => u.email === data.email);
                if (existe) {
                    mostrarErrores(['Este correo electrónico ya está registrado']);
                    return false;
                }
                
                usuarios.push(data);
                localStorage.setItem('cercati_usuarios', JSON.stringify(usuarios));
                localStorage.setItem('cercati_sesion', JSON.stringify(data));
                
                console.log('✅ Emprendedor registrado:', data);
                return true;
            }
            
            function mostrarExito(mensaje) {
                document.querySelectorAll('.toast-success, .toast-error').forEach(el => el.remove());
                
                const toast = document.createElement('div');
                toast.className = 'toast-success';
                toast.innerHTML = `
                    <i class="fas fa-check-circle"></i>
                    <span>${mensaje}</span>
                `;
                document.body.appendChild(toast);
                
                setTimeout(() => toast.classList.add('show'), 100);
                setTimeout(() => {
                    toast.classList.remove('show');
                    setTimeout(() => toast.remove(), 300);
                }, 4000);
            }
            
            function mostrarErrores(errors) {
                document.querySelectorAll('.toast-success, .toast-error').forEach(el => el.remove());
                
                const toast = document.createElement('div');
                toast.className = 'toast-error';
                toast.innerHTML = `
                    <i class="fas fa-exclamation-circle"></i>
                    <div>
                        <strong style="display:block;margin-bottom:4px;">Errores en el formulario:</strong>
                        <ul>
                            ${errors.map(e => `<li>${e}</li>`).join('')}
                        </ul>
                    </div>
                `;
                document.body.appendChild(toast);
                
                setTimeout(() => toast.classList.add('show'), 100);
                setTimeout(() => {
                    toast.classList.remove('show');
                    setTimeout(() => toast.remove(), 300);
                }, 5000);
            }
            
            document.getElementById('switchToLogin').addEventListener('click', function(e) {
                e.preventDefault();
                alert('Redirigiendo a Iniciar Sesión...');
                console.log('🔑 Cambiar a Iniciar Sesión');
            });
            
            document.getElementById('googleRegister').addEventListener('click', function() {
                alert('Registro con Google (próximamente disponible)');
                console.log('🔵 Registro con Google');
            });
            
            console.log('✅ Módulo de registro de emprendedor cargado correctamente');
        });