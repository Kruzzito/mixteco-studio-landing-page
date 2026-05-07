document.addEventListener('DOMContentLoaded', () => {
    const projectData = [
        {
            slug: 'puppytiki',
            title: 'PuppyTiki',
            cardImage: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj8Q28BsZBxK-4m3EKT2rbzaOr1Y97RcXBOTqWIZ5wkeb1xeOm02BGzWbP_oh5zjMnlul7lLDHUKVPYGJ-toJRfNQE6N12wGPNDRnO_zhkoVaSdQLYMAXxB4HCT4Jh8bzQwduZNTj4osi2Kx_y1Y8gtZR9Mfpmqo2CAiZNAsjY86QCY_31HPOBhk8xGNV1c/w640-h640/icono.jpg",
            imageFront: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiNuM92TyGuaQqbaSL7AL2BGLAVdentn_jro4NUlmuDSjG8EssINPIRYBak2Bs-IZ-3dSbTq9xR0v_DDZwLyP0vO7eAB33lARYV9Fj56GKs1WeIP1Dn0bKGTvBNYlR2xo4hJLBORvZphDyhp91IK3S9feuZEb8xFtRbxCRmMydPkr154MW50NqwNdO11sxU/w480-h640/logo03.png",
            imageBack: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUUfk0AyboCp0-JIS6TETFdLmWb8L-F5tzbwLIiFStDtZ0Ab32Jh0q54sKu4KH9pTXKjZ078yxCZIgkcrA1YlXYdgR9iis9-KxOUB48YF99_ozmJx26lfIiypPN2vl67-TX53kI1567miUSQkgPevM56De5wYATv4PXN2nB5xbrhlxSjLi40Rdzz-NaXVL/w480-h640/logo04.png",
            description: "PuppyTiki es una aplicación móvil diseñada para registrar a tus mascotas, también te permite gestionar una agenda para cada mascota, asi como visualizar en una agenda general todas las citas de cada una de tus mascotas, de esa forma nunca volverás a olvidar una cita con el veterinario o alguna actividad con tu mascota, también cuenta con una tienda para que puedas consentir a tus mascotas y una sección de noticias en donde recibirás información útil y tips para el cuidado de tus mascotas",
            platform: "Plataforma: Actualmente se encuentra disponible para android",
            tech: "Tecnologías: Angular, Ionic, Firebase Firestore, Node.js.",
            hasLegal: true,
            privacyContentPath: 'privacy.html', 
            termsContentPath: 'terms.html',  
        }
    ];

    const defaultPrivacyText = `
        <p>Última actualización: 18 de agosto de 2025</p>
        <p>El presente documento describe las políticas de privacidad de la aplicación móvil “Puppytiki” (en adelante, “la Aplicación”), desarrollada por mixteco-studio, disponible para dispositivos Android. Al usar la Aplicación, el usuario acepta los términos aquí establecidos.</p>
        
        <h4 class="font-bold">1. Recolección de datos</h4>
        <p>La Aplicación puede solicitar y almacenar la siguiente información:</p>
        <ul class="list-disc list-inside">
            <li>Nombre del usuario</li>
            <li>Correo electrónico</li>
            <li>Número de teléfono</li>
            <li>Datos de su(s) mascota(s)</li>
        </ul>
        
        <h4 class="font-bold">2. Uso y almacenamiento de datos</h4>
        <p>Toda la información proporcionada por el usuario se guarda únicamente en el dispositivo del usuario.</p>
        <p>La Aplicación no transmite, comparte ni almacena información en servidores externos.</p>
        <p>El usuario es responsable de la seguridad física y digital de su dispositivo.</p>
        
        <h4 class="font-bold">3. Documentos generados por la aplicación</h4>
        <p>La Aplicación puede generar documentos descargables.</p>
        <p>Dichos documentos no son oficiales, carecen de validez legal y son creados únicamente con fines de entretenimiento.</p>
        <p>mixteco-studio no se responsabiliza por el uso que los usuarios den a dichos documentos.</p>
        
        <h4 class="font-bold">4. Catálogo de productos y anuncios</h4>
        <p>La Aplicación puede mostrar un catálogo de productos o anuncios.</p>
        <p>Mixteco-studio no garantiza la calidad, disponibilidad ni veracidad de los productos o servicios ofrecidos en el catálogo o los anuncios.</p>
        <p>Cualquier transacción o interacción realizada con terceros es responsabilidad exclusiva del usuario.</p>
        
        <h4 class="font-bold">5. Apartado de noticias</h4>
        <p>La sección de noticias ofrece información con fines de entretenimiento.</p>
        <p>Mixteco-studio no garantiza la veracidad, actualidad o exactitud de la información publicada.</p>
        <p>Cada usuario es responsable de decidir si sigue o no las recomendaciones expuestas en esta sección.</p>
        
        <h4 class="font-bold">6. Responsabilidad del usuario</h4>
        <p>El usuario acepta que el uso de la Aplicación es bajo su propia responsabilidad. mixteco-studio no será responsable por:</p>
        <ul class="list-disc list-inside">
            <li>Daños directos o indirectos derivados del uso de la Aplicación.</li>
            <li>Pérdida de información por fallos del dispositivo.</li>
            <li>Consecuencias derivadas del uso de la información, productos, noticias o documentos generados en la Aplicación.</li>
        </ul>
        
        <h4 class="font-bold">7. Publicidad y enlaces externos</h4>
        <p>La Aplicación puede contener enlaces o referencias a servicios de terceros.</p>
        <p>mixteco-studio no controla ni respalda dichos servicios.</p>
        <p>El acceso a servicios externos queda bajo responsabilidad exclusiva del usuario.</p>
        
        <h4 class="font-bold">8. Actualizaciones a esta política</h4>
        <p>La presente política puede ser actualizada ocasionalmente. El uso continuo de la Aplicación después de una actualización implica la aceptación de los cambios.</p>
        
        <h4 class="font-bold">9. Contacto</h4>
        <p>Para cualquier duda respecto a estas políticas, el usuario puede ponerse en contacto con mixteco-studio mediante el correo electrónico: mixteco.studio2025@gmail.com</p>
    `;

    const defaultTermsText = `
        <p>Última actualización: 18 de agosto de 2025</p>
        <p>El presente documento establece los términos y condiciones de uso (en adelante, “Condiciones”) de la aplicación móvil “Puppytiki” (en adelante, “la Aplicación”), desarrollada por mixteco-studio, disponible para dispositivos Android. Al utilizar la Aplicación, el usuario acepta cumplir con estas Condiciones.</p>
        
        <h4 class="font-bold">1. Uso permitido</h4>
        <p>El usuario se compromete a utilizar la Aplicación únicamente con fines personales, informativos y de entretenimiento.</p>
        <p>Queda prohibido el uso de la Aplicación para fines ilícitos, comerciales no autorizados o que afecten negativamente la experiencia de otros usuarios.</p>
        
        <h4 class="font-bold">2. Registro y datos del usuario</h4>
        <p>La Aplicación puede solicitar datos como nombre, correo electrónico, teléfono y datos de mascota(s).</p>
        <p>El usuario garantiza que la información ingresada es veraz y actualizada.</p>
        <p>La Aplicación guarda estos datos únicamente en el dispositivo del usuario.</p>
        
        <h4 class="font-bold">3. Generación de documentos</h4>
        <p>La Aplicación puede generar documentos descargables, los cuales no tienen validez legal.</p>
        <p>Dichos documentos se proporcionan exclusivamente con fines de entretenimiento.</p>
        <p>El usuario asume la responsabilidad total por el uso que haga de los documentos generados.</p>
        
        <h4 class="font-bold">4. Catálogo de productos y anuncios</h4>
        <p>La Aplicación puede incluir un catálogo de productos y/o anuncios de terceros.</p>
        <p>mixteco-studio no garantiza la calidad, disponibilidad o veracidad de los productos, servicios o anuncios mostrados.</p>
        <p>Las transacciones y acuerdos con terceros son responsabilidad exclusiva del usuario.</p>
        
        <h4 class="font-bold">5. Noticias y contenidos informativos</h4>
        <p>La sección de noticias de la Aplicación se proporciona únicamente con fines de entretenimiento.</p>
        <p>mixteco-studio no garantiza la exactitud, veracidad ni actualidad de la información publicada.</p>
        <p>Cada usuario es responsable de decidir si sigue o no las recomendaciones que aparezcan en dicha sección.</p>
        
        <h4 class="font-bold">6. Propiedad intelectual</h4>
        <p>Todos los derechos de autor, marcas, logotipos, diseño, código y demás elementos relacionados con la Aplicación pertenecen a mixteco-studio o a sus respectivos titulares. El usuario no adquiere ningún derecho de propiedad intelectual por el uso de la Aplicación.</p>
        
        <h4 class="font-bold">7. Limitación de responsabilidad</h4>
        <p>mixteco-studio no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso de la Aplicación.</p>
        <p>Pérdida de datos ocasionada por fallos en el dispositivo del usuario.</p>
        <p>Consecuencias derivadas del uso de la información, documentos, catálogo de productos o noticias de la Aplicación.</p>
        
        <h4 class="font-bold">8. Publicidad y enlaces externos</h4>
        <p>La Aplicación puede contener enlaces a sitios web o servicios de terceros.</p>
        <p>mixteco-studio no controla ni garantiza dichos servicios.</p>
        <p>El acceso a servicios externos es bajo la responsabilidad exclusiva del usuario.</p>
        
        <h4 class="font-bold">9. Modificaciones de las Condiciones</h4>
        <p>Estas Condiciones pueden ser modificadas en cualquier momento. El uso continuado de la Aplicación después de la actualización implica la aceptación de las nuevas Condiciones.</p>
        
        <h4 class="font-bold">10. Legislación aplicable</h4>
        <p>Estas Condiciones se rigen por las leyes vigentes en el país donde mixteco-studio tiene su residencia. Cualquier controversia será resuelta por los tribunales competentes de dicha jurisdicción.</p>
        
        <h4 class="font-bold">11. Contacto</h4>
        <p>Para consultas sobre estas Condiciones, el usuario puede comunicarse con mixteco-studio al correo electrónico: mixteco.studio2025@gmail.com</p>
    `;


    const NavModule = (() => {
        const sidebar = document.getElementById('sidebar');
        const menuButton = document.getElementById('menu-button');
        const navLinks = document.querySelectorAll('.nav-link-tab');
        const contentSections = document.querySelectorAll('.content-section');
        const projectModal = document.getElementById('project-modal');
        const privacyModal = document.getElementById('privacy-modal');
        const termsModal = document.getElementById('terms-modal');

        const showSection = (targetId) => {
            contentSections.forEach(section => {
                if ('#' + section.id === targetId) {
                    section.classList.remove('hidden');
                } else {
                    section.classList.add('hidden');
                }
            });
        };

        const setActiveLink = (targetLink) => {
            navLinks.forEach(link => {
                link.classList.remove('bg-gray-700', 'border-l-4', 'border-blue-500');
            });
            if (targetLink) {
                targetLink.classList.add('bg-gray-700', 'border-l-4', 'border-blue-500');
            }
        };
        
        const hideAllModals = () => {
            projectModal.classList.add('hidden');
            privacyModal.classList.add('hidden');
            termsModal.classList.add('hidden');
        };

        const closeMenu = () => {
            sidebar.classList.add('-translate-x-full');
        };

        const handleNavigation = () => {
            const hash = window.location.hash || '#inicio';
            const parts = hash.split('/');
            const mainHash = parts[0];
            const slug = parts[1];
            const legalType = parts[2];
            
            hideAllModals();
            const targetLink = document.querySelector(`a[href="${mainHash}"]`);
            showSection(mainHash);
            setActiveLink(targetLink);

            if (mainHash === '#proyectos' && slug) {
                ProjectModule.showProjectModal(slug);

                if (legalType) {
                    if (legalType === 'politica-privacidad') {
                        LegalModalsModule.showPrivacyModal(slug);
                    } else if (legalType === 'terminos-condiciones') {
                        LegalModalsModule.showTermsModal(slug);
                    }
                }
            }
        };

        const setupEventListeners = () => {

            if (window.location.hash === '') {
                window.history.replaceState({}, '', '#inicio');
            }
            
            menuButton.addEventListener('click', () => {
                sidebar.classList.toggle('-translate-x-full');
            });

            navLinks.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const targetId = e.currentTarget.getAttribute('href');
                    window.history.pushState({}, '', targetId);
                    handleNavigation();
                    if (!sidebar.classList.contains('-translate-x-full')) {
                        closeMenu();
                    }
                });
            });

            window.addEventListener('popstate', handleNavigation);
            handleNavigation();
        };

        return { setup: setupEventListeners, handleNavigation };
    })();

    const ProjectRendererModule = (() => {
        const container = document.getElementById('projects-dynamic-container');

        const createProjectCardHtml = (project) => {
            return `
                <div class="project-card col-span-1 bg-white p-6 rounded-2xl shadow-lg border-t-4 border-blue-500 hover:shadow-xl transition-shadow duration-300 cursor-pointer" data-slug="${project.slug}">
                    <img src="${project.cardImage}" alt="${project.title}" class="rounded-lg w-full h-auto mb-4 object-cover aspect-square">
                    <p class="text-center text-lg font-semibold text-gray-800">${project.title}</p>
                </div>
            `;
        };

        const renderProjectCards = () => {
            const html = projectData.map(createProjectCardHtml).join('');
            container.innerHTML = html;
            setupCardEventListeners();
        };

        const setupCardEventListeners = () => {
            document.querySelectorAll('.project-card').forEach(card => {
                card.addEventListener('click', (e) => {
                    const slug = e.currentTarget.getAttribute('data-slug');
                    window.history.pushState({}, '', `#proyectos/${slug}`);
                    NavModule.handleNavigation();
                });
            });
        };
        
        return { render: renderProjectCards };
    })();

    const ProjectModule = (() => {
        const projectModal = document.getElementById('project-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalPrivacy = document.getElementById('modal-privacy');
        const modalTerms = document.getElementById('modal-terms');
        const modalDescription = document.getElementById('modal-description');
        const modalPlatform = document.getElementById('modal-platform');
        const modalTech = document.getElementById('modal-tech');
        const imageFlipContainer = document.getElementById('image-flip-container');

        const initMobileSlider = (imageUrls) => {
            const sliderContainer = document.getElementById('mobile-slider');
            if (!sliderContainer) return;

            let currentIndex = 0;
            const images = imageUrls;

            const renderSlider = () => {
                sliderContainer.innerHTML = `
                    <div class="relative w-full">
                        <div id="slider-image-display" class="slider-image shadow-xl">
                            <img src="${images[currentIndex]}" alt="Vista de la aplicación ${currentIndex + 1}">
                        </div>
                        
                        <button id="prev-btn" class="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full transition-opacity hover:bg-opacity-75">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                        </button>
                        <button id="next-btn" class="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 text-white rounded-full transition-opacity hover:bg-opacity-75">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                        </button>

                        <div class="flex justify-center space-x-2 mt-4">
                            ${images.map((_, index) => `
                                <span id="dot-${index}" class="w-3 h-3 rounded-full cursor-pointer transition-colors ${index === currentIndex ? 'bg-blue-600' : 'bg-gray-400'}"></span>
                            `).join('')}
                        </div>
                    </div>
                `;

                document.getElementById('prev-btn').addEventListener('click', () => navigate(-1));
                document.getElementById('next-btn').addEventListener('click', () => navigate(1));
                
                images.forEach((_, index) => {
                    document.getElementById(`dot-${index}`).addEventListener('click', () => goToSlide(index));
                });
            };

            const updateImage = () => {
                const imgElement = document.querySelector('#slider-image-display img');
                const dots = document.querySelectorAll('#mobile-slider [id^="dot-"]');

                if (imgElement) {
                    imgElement.src = images[currentIndex];
                }
                
                dots.forEach((dot, index) => {
                    dot.classList.remove('bg-blue-600', 'bg-gray-400');
                    dot.classList.add(index === currentIndex ? 'bg-blue-600' : 'bg-gray-400');
                });
            };

            const navigate = (direction) => {
                currentIndex = (currentIndex + direction + images.length) % images.length;
                updateImage();
            };

            const goToSlide = (index) => {
                currentIndex = index;
                updateImage();
            }

            renderSlider();
        };


        const insertFlipCardStructure = (project) => {
            const images = [project.imageFront, project.imageBack];

            imageFlipContainer.innerHTML = `
                <!-- Contenedor para Desktop (Flip Card) -->
                <div class="hidden md:block w-full">
                    <div class="flip-card">
                        <div class="flip-card-inner">
                            <!-- Frente de la carta -->
                            <div class="flip-card-front">
                                <img src="${project.imageFront}" alt="Frente de ${project.title}" class="rounded-lg shadow-md">
                            </div>
                            <!-- Reverso de la carta -->
                            <div class="flip-card-back">
                                <img src="${project.imageBack}" alt="Reverso de ${project.title}" class="rounded-lg shadow-md">
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contenedor para Mobile (Slider) -->
                <div id="mobile-slider" class="md:hidden w-full relative">
                    <!-- El contenido del slider se inyectará aquí por JS -->
                </div>
                
                <p id="modal-caption" class="text-center text-lg font-semibold text-gray-800 mt-2">${project.title}</p>
            `;
            
            initMobileSlider(images);
        };

        const showProjectModal = (slug) => {
            const project = projectData.find(p => p.slug === slug);

            if (!project) {
                console.error(`Proyecto con slug '${slug}' no encontrado.`);
                window.history.pushState({}, '', '#proyectos'); // Volver a la lista
                NavModule.handleNavigation();
                return;
            }

            document.getElementById('close-modal-btn').setAttribute('data-current-slug', slug);

            insertFlipCardStructure(project);

            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modalPlatform.textContent = project.platform;
            modalTech.textContent = project.tech;

            if (project.hasLegal) {
                modalPrivacy.href = `#proyectos/${slug}/politica-privacidad`;
                modalTerms.href = `#proyectos/${slug}/terminos-condiciones`;
                modalPrivacy.classList.remove('hidden');
                modalTerms.classList.remove('hidden');
            } else {
                modalPrivacy.classList.add('hidden');
                modalTerms.classList.add('hidden');
            }

            projectModal.classList.remove('hidden');
        };

        const setupEventListeners = () => {
            const closeModalBtn = document.getElementById('close-modal-btn');
            
            if (closeModalBtn) {
                closeModalBtn.addEventListener('click', () => {
                    window.history.pushState({}, '', '#proyectos');
                    NavModule.handleNavigation();
                });
            }

            if (projectModal) {
                projectModal.addEventListener('click', (e) => {
                    if (e.target === projectModal) {
                        window.history.pushState({}, '', '#proyectos');
                        NavModule.handleNavigation();
                    }
                });
            }
        };

        return { setup: setupEventListeners, showProjectModal };
    })();

    const LegalModalsModule = (() => {

        const showPrivacyModal = (slug) => {

            const project = projectData.find(p => p.slug === slug);
            const text = defaultPrivacyText;
            
            const privacyModal = document.getElementById('privacy-modal');
            const privacyContent = document.getElementById('privacy-content');
            privacyContent.innerHTML = text;
            
            document.getElementById('close-privacy-btn').setAttribute('data-current-slug', slug);
            privacyModal.classList.remove('hidden');
        };

        const showTermsModal = (slug) => {

            const project = projectData.find(p => p.slug === slug);
            const text = defaultTermsText;

            const termsModal = document.getElementById('terms-modal');
            const termsContent = document.getElementById('terms-content');
            termsContent.innerHTML = text;
            
            document.getElementById('close-terms-btn').setAttribute('data-current-slug', slug);
            termsModal.classList.remove('hidden');
        };

        const setupEventListeners = () => {
            const privacyModal = document.getElementById('privacy-modal');
            const closePrivacyBtn = document.getElementById('close-privacy-btn');
            const termsModal = document.getElementById('terms-modal');
            const closeTermsBtn = document.getElementById('close-terms-btn');
            const setupCloseListener = (btn, modal) => {
                btn.addEventListener('click', () => {
                    const slug = btn.getAttribute('data-current-slug');
                    window.history.pushState({}, '', `#proyectos/${slug}`);
                    NavModule.handleNavigation();
                });

                modal.addEventListener('click', (e) => {
                    if (e.target === modal) {
                        const slug = btn.getAttribute('data-current-slug');
                        window.history.pushState({}, '', `#proyectos/${slug}`);
                        NavModule.handleNavigation();
                    }
                });
            };

            setupCloseListener(closePrivacyBtn, privacyModal);
            setupCloseListener(closeTermsBtn, termsModal);
        };

        return { setup: setupEventListeners, showPrivacyModal, showTermsModal };
    })();


    const ContactFormModule = (() => {
        const setupEventListeners = () => {
        };

        return { setup: setupEventListeners };
    })();


    ProjectRendererModule.render(); 
    NavModule.setup();
    ProjectModule.setup();
    LegalModalsModule.setup();
    ContactFormModule.setup();
});
