// Funcionalidad del Botón CTA en el Banner
document.addEventListener('DOMContentLoaded', function() {
    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            const gamesSection = document.querySelector('.games-section');
            if (gamesSection) {
                gamesSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Funcionalidad de Juegos Destacados
    const gameItems = document.querySelectorAll('.game-item');
    gameItems.forEach(item => {
        item.addEventListener('click', function() {
            const gameName = this.querySelector('.game-name').textContent.toLowerCase();
            let targetGame = '';

            // Mapear nombres de juegos destacados a IDs de paneles
            if (gameName.includes('age of empires') && !gameName.includes('ii') && !gameName.includes('iii')) {
                targetGame = 'aoe';
            } else if (gameName.includes('age of empires ii')) {
                targetGame = 'aoe'; // Usar el mismo panel para todas las versiones de AoE
            } else if (gameName.includes('age of empires iii')) {
                targetGame = 'aoe'; // Usar el mismo panel para todas las versiones de AoE
            } else if (gameName.includes('league of legends')) {
                targetGame = 'starcraft'; // No tenemos LOL, redirigir a StarCraft como RTS moderno
            } else if (gameName.includes('starcraft')) {
                targetGame = 'starcraft';
            } else if (gameName.includes('command & conquer')) {
                targetGame = 'cnc';
            } else if (gameName.includes('warcraft iii')) {
                targetGame = 'warcraft2'; // Usar Warcraft II para Warcraft III
            } else if (gameName.includes('warcraft ii')) {
                targetGame = 'warcraft2';
            } else if (gameName.includes('total annihilation')) {
                targetGame = 'ta';
            } else if (gameName.includes('commandos')) {
                targetGame = 'commandos';
            } else if (gameName.includes('red alert')) {
                targetGame = 'cnc'; // Red Alert pertenece a la serie C&C
            } else if (gameName.includes('dune ii')) {
                targetGame = 'cnc'; // Dune II es precursor de C&C
            }

            if (targetGame) {
                // Scroll a la sección de juegos
                const gamesSection = document.querySelector('.games-section');
                if (gamesSection) {
                    gamesSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }

                // Abrir el panel correspondiente después de un pequeño delay
                setTimeout(() => {
                    const targetHeader = document.querySelector(`[data-game="${targetGame}"]`);
                    if (targetHeader) {
                        const accordionItem = targetHeader.parentElement;
                        accordionItem.classList.add('active');
                        
                        // Cerrar otros paneles
                        const allItems = document.querySelectorAll('.accordion-item');
                        allItems.forEach(item => {
                            if (item !== accordionItem) {
                                item.classList.remove('active');
                            }
                        });
                    }
                }, 800);
            }
        });
    });
});
    // Seleccionar todos los headers del acordeón
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            // Obtener el elemento padre (accordion-item)
            const accordionItem = this.parentElement;

            // Toggle la clase 'active' para mostrar/ocultar el contenido
            accordionItem.classList.toggle('active');

            // Cerrar otros paneles abiertos (opcional - comportamiento de acordeón estándar)
            // Descomenta las siguientes líneas si quieres que solo un panel esté abierto a la vez
            /*
            const allItems = document.querySelectorAll('.accordion-item');
            allItems.forEach(item => {
                if (item !== accordionItem) {
                    item.classList.remove('active');
                }
            });
            */
        });
    });

    // Funcionalidad adicional: Cerrar panel al hacer clic fuera (opcional)
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.accordion-item')) {
            // Cerrar todos los paneles si se hace clic fuera
            const allItems = document.querySelectorAll('.accordion-item');
            allItems.forEach(item => {
                item.classList.remove('active');
            });
        }
    });

    // Animación de entrada para los elementos del acordeón
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Aplicar animación a los items del acordeón
    document.querySelectorAll('.accordion-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(item);
    });

    // Efecto de parallax en el banner (opcional)
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const banner = document.querySelector('.hero-banner');

        if (banner) {
            banner.style.backgroundPositionY = -(scrolled * 0.5) + 'px';
        }
    });

    // Funcionalidad de rating interactivo (opcional)
    const ratingElements = document.querySelectorAll('.rating-stars');
    ratingElements.forEach(rating => {
        rating.addEventListener('click', function() {
            // Aquí podrías agregar funcionalidad para votar
            alert('¡Gracias por tu voto! ⭐');
        });
    });

    // Smooth scroll para navegación interna (si se agrega navegación)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Detectar si el usuario prefiere movimiento reducido
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
        // Desactivar animaciones para usuarios que prefieren movimiento reducido
        document.documentElement.style.setProperty('--transition', 'none');
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.style.animation = 'none';
        });
    }

    // Función para expandir/colapsar todos los paneles (útil para debugging o funcionalidades adicionales)
    window.toggleAllAccordions = function() {
        const allItems = document.querySelectorAll('.accordion-item');
        const allActive = document.querySelectorAll('.accordion-item.active').length === allItems.length;

        allItems.forEach(item => {
            if (allActive) {
                item.classList.remove('active');
            } else {
                item.classList.add('active');
            }
        });
    };

    // Keyboard navigation para accesibilidad
    document.addEventListener('keydown', function(e) {
        const activeElement = document.activeElement;

        if (activeElement.classList.contains('accordion-header')) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                activeElement.click();
            }
        }
    });

    // Lazy loading para imágenes (mejora performance)
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => {
        imageObserver.observe(img);
    });

    console.log('🎮 Página de Juegos RTS cargada correctamente');
    console.log('📊', accordionHeaders.length, 'juegos disponibles en los paneles plegables');
});