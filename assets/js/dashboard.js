        document.addEventListener('DOMContentLoaded', function() {
            console.log('✅ CercaTi - Página principal cargada correctamente');
            
            // ============================================ */
            // DATOS DE NEGOCIOS                           */
            // ============================================ */
            
            const zonas = {
                chimbote: { 
                    lat: -9.0745, 
                    lng: -78.5936, 
                    nombre: 'Chimbote', 
                    negocios: 5,
                    descripcion: 'Centro de Plazas de Armas'
                },
                'nuevo-chimbote': { 
                    lat: -9.1208, 
                    lng: -78.5814, 
                    nombre: 'Nuevo Chimbote', 
                    negocios: 4,
                    descripcion: 'Zona comercial - Av. Pacífico'
                },
                coishco: { 
                    lat: -9.0421, 
                    lng: -78.6125, 
                    nombre: 'Coishco', 
                    negocios: 2,
                    descripcion: 'Zona residencial'
                },
                santa: { 
                    lat: -8.9963, 
                    lng: -78.6197, 
                    nombre: 'Santa', 
                    negocios: 1,
                    descripcion: 'Puerto + Coish'
                }
            };

            const negocios = [
                { 
                    id: 1,
                    nombre: 'Sabores del Mar', 
                    lat: -9.0745, 
                    lng: -78.5936, 
                    zona: 'chimbote', 
                    categoria: 'Comida', 
                    rating: 4.8,
                    reviews: 127,
                    icono: '🦐',
                    direccion: 'Av. José Pardo 123',
                    horario: 'Lun-Dom 11am-10pm',
                    telefono: '+51 987 654 321'
                },
                { 
                    id: 2,
                    nombre: 'Textiles Andinos', 
                    lat: -9.1208, 
                    lng: -78.5814, 
                    zona: 'nuevo-chimbote', 
                    categoria: 'Ropa', 
                    rating: 4.9,
                    reviews: 89,
                    icono: '🧵',
                    direccion: 'Av. Pacífico 456',
                    horario: 'Lun-Sáb 9am-8pm',
                    telefono: '+51 976 543 210'
                },
                { 
                    id: 3,
                    nombre: 'Arte en Madera', 
                    lat: -9.0745, 
                    lng: -78.5936, 
                    zona: 'chimbote', 
                    categoria: 'Artesanía', 
                    rating: 5.0,
                    reviews: 64,
                    icono: '🪵',
                    direccion: 'Jr. Bolognesi 789',
                    horario: 'Lun-Vie 10am-7pm',
                    telefono: '+51 965 432 109'
                },
                { 
                    id: 4,
                    nombre: 'Tech Solutions', 
                    lat: -9.0421, 
                    lng: -78.6125, 
                    zona: 'coishco', 
                    categoria: 'Tecnología', 
                    rating: 4.7,
                    reviews: 43,
                    icono: '💻',
                    direccion: 'Calle Principal 321',
                    horario: 'Lun-Sáb 9am-6pm',
                    telefono: '+51 954 321 098'
                },
                { 
                    id: 5,
                    nombre: 'Belleza Natural', 
                    lat: -9.1208, 
                    lng: -78.5814, 
                    zona: 'nuevo-chimbote', 
                    categoria: 'Belleza', 
                    rating: 4.9,
                    reviews: 56,
                    icono: '💆',
                    direccion: 'Av. Pacífico 789',
                    horario: 'Mar-Dom 9am-8pm',
                    telefono: '+51 943 210 987'
                },
                { 
                    id: 6,
                    nombre: 'Café del Puerto', 
                    lat: -8.9963, 
                    lng: -78.6197, 
                    zona: 'santa', 
                    categoria: 'Comida', 
                    rating: 4.6,
                    reviews: 38,
                    icono: '☕',
                    direccion: 'Malecón 456',
                    horario: 'Lun-Dom 7am-11pm',
                    telefono: '+51 932 109 876'
                },
                { 
                    id: 7,
                    nombre: 'Ferretería Local', 
                    lat: -9.0745, 
                    lng: -78.5936, 
                    zona: 'chimbote', 
                    categoria: 'Servicios', 
                    rating: 4.5,
                    reviews: 29,
                    icono: '🔧',
                    direccion: 'Jr. Puno 456',
                    horario: 'Lun-Sáb 8am-6pm',
                    telefono: '+51 921 098 765'
                },
                { 
                    id: 8,
                    nombre: 'Panadería Artesanal', 
                    lat: -9.0421, 
                    lng: -78.6125, 
                    zona: 'coishco', 
                    categoria: 'Comida', 
                    rating: 4.8,
                    reviews: 52,
                    icono: '🍞',
                    direccion: 'Calle 2 de Mayo 123',
                    horario: 'Lun-Dom 6am-2pm',
                    telefono: '+51 910 987 654'
                },
                { 
                    id: 9,
                    nombre: 'Artesanías Peruanas', 
                    lat: -9.1208, 
                    lng: -78.5814, 
                    zona: 'nuevo-chimbote', 
                    categoria: 'Artesanía', 
                    rating: 4.7,
                    reviews: 41,
                    icono: '🎨',
                    direccion: 'Av. Pacífico 234',
                    horario: 'Lun-Vie 10am-6pm',
                    telefono: '+51 998 765 432'
                },
                { 
                    id: 10,
                    nombre: 'Ropa Casual', 
                    lat: -9.0745, 
                    lng: -78.5936, 
                    zona: 'chimbote', 
                    categoria: 'Ropa', 
                    rating: 4.4,
                    reviews: 33,
                    icono: '👕',
                    direccion: 'Av. José Pardo 567',
                    horario: 'Lun-Sáb 10am-8pm',
                    telefono: '+51 987 654 321'
                },
                { 
                    id: 11,
                    nombre: 'Comida Saludable', 
                    lat: -9.0745, 
                    lng: -78.5936, 
                    zona: 'chimbote', 
                    categoria: 'Comida', 
                    rating: 4.6,
                    reviews: 47,
                    icono: '🥗',
                    direccion: 'Jr. Libertad 890',
                    horario: 'Lun-Vie 8am-5pm',
                    telefono: '+51 976 543 210'
                },
                { 
                    id: 12,
                    nombre: 'Servicio Técnico', 
                    lat: -9.1208, 
                    lng: -78.5814, 
                    zona: 'nuevo-chimbote', 
                    categoria: 'Servicios', 
                    rating: 4.3,
                    reviews: 25,
                    icono: '🛠️',
                    direccion: 'Av. Pacífico 567',
                    horario: 'Lun-Sáb 9am-7pm',
                    telefono: '+51 965 432 109'
                }
            ];

            // ============================================ */
            // INICIALIZAR MAPA CON LEAFLET                */
            // ============================================ */
            
            const map = L.map('map', {
                center: [-9.0745, -78.5936],
                zoom: 13,
                zoomControl: true,
                fadeAnimation: true,
                attributionControl: true
            });

            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
                maxZoom: 19,
                minZoom: 10
            }).addTo(map);

            // ============================================ */
            // ICONOS PERSONALIZADOS                       */
            // ============================================ */
            
            const storeIcon = L.divIcon({
                className: 'store-marker',
                html: `<div style="
                    background: white;
                    border-radius: 50%;
                    width: 36px;
                    height: 36px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
                    border: 2px solid #2563eb;
                    font-size: 18px;
                    transition: all 0.3s ease;
                ">
                    <span style="font-size: 18px;">🏪</span>
                </div>`,
                iconSize: [36, 36],
                iconAnchor: [18, 36],
                popupAnchor: [0, -36]
            });

            const zoneIcon = L.divIcon({
                className: 'zone-marker',
                html: `<div style="
                    background: #1a237e;
                    border-radius: 50%;
                    width: 42px;
                    height: 42px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 16px rgba(26, 35, 126, 0.4);
                    border: 2px solid white;
                    font-size: 18px;
                    color: white;
                    transition: all 0.3s ease;
                ">
                    <i class="fas fa-map-pin"></i>
                </div>`,
                iconSize: [42, 42],
                iconAnchor: [21, 42],
                popupAnchor: [0, -42]
            });

            // ============================================ */
            // ALMACENAR MARCADORES Y REFERENCIAS          */
            // ============================================ */
            
            let allMarkers = [];
            let allMarkerData = [];
            let currentFilter = 'all';
            let searchQuery = '';

            // ============================================ */
            // AGREGAR MARCADORES DE ZONAS                 */
            // ============================================ */
            
            Object.keys(zonas).forEach(key => {
                const zona = zonas[key];
                const marker = L.marker([zona.lat, zona.lng], { 
                    icon: zoneIcon,
                    zIndexOffset: 1000
                })
                .addTo(map)
                .bindPopup(`
                    <div style="padding: 4px 0;">
                        <strong style="font-size: 16px; color: #1a237e;">📍 ${zona.nombre}</strong><br>
                        <span style="color: #6b7280; font-size: 13px;">${zona.descripcion}</span><br>
                        <span style="color: #2563eb; font-weight: 600; font-size: 14px;">${zona.negocios} negocios</span>
                        <br><br>
                        <a href="#" onclick="abrirGoogleMaps('${zona.nombre}')" style="color: #ea4335; text-decoration: none; font-weight: 500;">
                            <i class="fas fa-map-marked-alt"></i> Ver en Google Maps
                        </a>
                    </div>
                `, {
                    className: 'custom-popup',
                    maxWidth: 220
                });
                
                marker.zone = key;
                marker.isZone = true;
                allMarkers.push(marker);
                allMarkerData.push({ marker, zone: key, isZone: true });

                marker.on('click', function() {
                    filterMarkers(key);
                    document.querySelectorAll('.map-controls button:not(.btn-google)').forEach(btn => {
                        btn.classList.remove('active');
                        if (btn.dataset.zone === key) {
                            btn.classList.add('active');
                        }
                    });
                });
            });

            // ============================================ */
            // AGREGAR MARCADORES DE NEGOCIOS              */
            // ============================================ */
            
            negocios.forEach(negocio => {
                const popupHTML = `
                    <div class="popup-business">
                        <span class="popup-icon">${negocio.icono || '🏪'}</span>
                        <h4>${negocio.nombre}</h4>
                        <div class="popup-category">${negocio.categoria}</div>
                        <div class="popup-rating">⭐ ${negocio.rating} (${negocio.reviews} reseñas)</div>
                        <div class="popup-location">
                            <i class="fas fa-map-pin"></i> ${negocio.direccion}
                        </div>
                        <div style="font-size: 11px; color: #6b7280; margin-top: 4px;">
                            <i class="fas fa-clock"></i> ${negocio.horario}
                        </div>
                        <a href="#" class="popup-btn">Ver negocio</a>
                        <br>
                        <a href="#" onclick="abrirGoogleMaps('${negocio.nombre}')" class="popup-google-link">
                            <i class="fas fa-map-marked-alt"></i> Ver en Google Maps
                        </a>
                    </div>
                `;

                const marker = L.marker([negocio.lat, negocio.lng], { 
                    icon: storeIcon,
                    zIndexOffset: 500
                })
                .addTo(map)
                .bindPopup(popupHTML, {
                    className: 'custom-popup',
                    maxWidth: 280,
                    minWidth: 220
                });
                
                marker.zone = negocio.zona;
                marker.isZone = false;
                marker.negocio = negocio;
                allMarkers.push(marker);
                allMarkerData.push({ marker, zone: negocio.zona, isZone: false, negocio });
            });

            // ============================================ */
            // FUNCIÓN PARA FILTRAR POR ZONA               */
            // ============================================ */
            
            function filterMarkers(zone) {
                currentFilter = zone;
                let visibleCount = 0;
                
                allMarkers.forEach(marker => {
                    if (zone === 'all' || marker.zone === zone) {
                        map.addLayer(marker);
                        visibleCount++;
                    } else {
                        map.removeLayer(marker);
                    }
                });
                
                // Si hay búsqueda activa, aplicar filtro adicional
                if (searchQuery) {
                    aplicarBusqueda(searchQuery);
                }
            }

            // ============================================ */
            // FUNCIÓN DE BÚSQUEDA                         */
            // ============================================ */
            
            function aplicarBusqueda(query) {
                searchQuery = query.toLowerCase().trim();
                const resultsInfo = document.getElementById('mapResultsInfo');
                const resultsCount = document.getElementById('resultsCount');
                const clearBtn = document.getElementById('clearSearchBtn');
                
                let resultados = 0;
                
                allMarkers.forEach(marker => {
                    // Solo procesar negocios, no zonas
                    if (marker.isZone) {
                        // Las zonas siempre se muestran si están en el filtro actual
                        if (currentFilter === 'all' || marker.zone === currentFilter) {
                            map.addLayer(marker);
                        }
                        return;
                    }
                    
                    const negocio = marker.negocio;
                    if (!negocio) return;
                    
                    const matchNombre = negocio.nombre.toLowerCase().includes(searchQuery);
                    const matchCategoria = negocio.categoria.toLowerCase().includes(searchQuery);
                    const matchUbicacion = negocio.direccion.toLowerCase().includes(searchQuery) || 
                                           zonas[negocio.zona].nombre.toLowerCase().includes(searchQuery);
                    
                    const coincide = matchNombre || matchCategoria || matchUbicacion;
                    
                    // Verificar si está dentro del filtro de zona
                    const enZona = currentFilter === 'all' || marker.zone === currentFilter;
                    
                    if (coincide && enZona) {
                        map.addLayer(marker);
                        resultados++;
                    } else {
                        map.removeLayer(marker);
                    }
                });
                
                // Mostrar/ocultar información de resultados
                if (searchQuery && resultados > 0) {
                    resultsInfo.classList.add('visible');
                    resultsCount.textContent = resultados;
                } else if (searchQuery && resultados === 0) {
                    resultsInfo.classList.add('visible');
                    resultsCount.textContent = '0 (No se encontraron coincidencias)';
                } else {
                    resultsInfo.classList.remove('visible');
                }
                
                // Mostrar botón de limpiar
                if (searchQuery) {
                    clearBtn.classList.add('visible');
                } else {
                    clearBtn.classList.remove('visible');
                }
            }

            // ============================================ */
            // EVENTOS DEL BUSCADOR                        */
            // ============================================ */
            
            const searchInput = document.getElementById('mapSearchInput');
            const searchBtn = document.getElementById('mapSearchBtn');
            const clearBtn = document.getElementById('clearSearchBtn');

            function realizarBusqueda() {
                const query = searchInput.value.trim();
                if (query === '') {
                    // Limpiar búsqueda
                    searchQuery = '';
                    aplicarBusqueda('');
                    filterMarkers(currentFilter);
                    return;
                }
                aplicarBusqueda(query);
            }

            searchBtn.addEventListener('click', realizarBusqueda);
            
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    realizarBusqueda();
                }
            });

            clearBtn.addEventListener('click', function() {
                searchInput.value = '';
                searchQuery = '';
                aplicarBusqueda('');
                filterMarkers(currentFilter);
                this.classList.remove('visible');
                document.getElementById('mapResultsInfo').classList.remove('visible');
            });

            // ============================================ */
            // CONTROL DE FILTROS DE ZONA                  */
            // ============================================ */
            
            document.querySelectorAll('.map-controls button:not(.btn-google)').forEach(btn => {
                btn.addEventListener('click', function() {
                    document.querySelectorAll('.map-controls button:not(.btn-google)').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    const zone = this.dataset.zone;
                    filterMarkers(zone);
                    
                    // Si hay búsqueda, reaplicar
                    if (searchQuery) {
                        aplicarBusqueda(searchQuery);
                    }
                    
                    if (zone === 'all') {
                        map.setView([-9.0745, -78.5936], 13);
                    } else {
                        const zonaData = zonas[zone];
                        if (zonaData) {
                            map.setView([zonaData.lat, zonaData.lng], 14);
                        }
                    }
                });
            });

            // ============================================ */
            // CLICK EN ZONE STATS                         */
            // ============================================ */
            
            document.querySelectorAll('.zone-stat').forEach(stat => {
                stat.addEventListener('click', function() {
                    const zone = this.dataset.zone;
                    const btn = document.querySelector(`.map-controls button:not(.btn-google)[data-zone="${zone}"]`);
                    if (btn) {
                        btn.click();
                    }
                });
            });

            // ============================================ */
            // FUNCIÓN PARA ABRIR GOOGLE MAPS              */
            // ============================================ */
            
            window.abrirGoogleMaps = function(lugar) {
                const query = lugar ? `${lugar} Chimbote Perú` : 'Chimbote Perú';
                const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
                window.open(url, '_blank');
            };

            // Botón "Ver en Google Maps"
            document.querySelector('.btn-google').addEventListener('click', function(e) {
                e.preventDefault();
                abrirGoogleMaps('');
            });

            // ============================================ */
            // CONTROL DE ZOOM Y ESCALA                    */
            // ============================================ */
            
            L.control.scale({
                position: 'bottomleft',
                metric: true,
                imperial: false
            }).addTo(map);

            console.log('✅ Mapa con buscador cargado correctamente');
            console.log(`📍 Total de negocios: ${negocios.length}`);
            
            // ============================================ */
            // SCROLL SUAVE                                */
            // ============================================ */
            
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    if (href !== '#') {
                        e.preventDefault();
                        const target = document.querySelector(href);
                        if (target) {
                            target.scrollIntoView({ behavior: 'smooth' });
                        }
                    }
                });
            });
            
            // ============================================ */
            // ANIMACIONES DE ENTRADA                      */
            // ============================================ */
            
            const cards = document.querySelectorAll('.business-card, .category-card, .product-card, .story-card, .zone-stat');
            const observer = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 80);
                    }
                });
            }, { threshold: 0.1 });
            
            cards.forEach(card => {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                observer.observe(card);
            });
        });