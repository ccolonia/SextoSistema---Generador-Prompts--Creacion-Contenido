const marketingModules = [
    { key: 'persona', title: 'CREACIÓN DE PERSONA', description: 'Define tu cliente ideal', icon: 'fas fa-user-circle' },
    { key: 'customer-journey', title: 'RECORRIDO DEL CLIENTE', description: 'Mapea el viaje del cliente', icon: 'fas fa-route' },
    { key: 'product-ladder', title: 'ESCALERA DE PRODUCTOS', description: 'Estructura tu oferta', icon: 'fas fa-layer-group' },
    { key: 'promotions', title: 'DISEÑO DE PROMOCIONES', description: 'Crea ofertas irresistibles', icon: 'fas fa-percentage' },
    { key: 'sales-letter', title: 'CARTA DE VENTAS', description: 'Escribe cartas que conviertan', icon: 'fas fa-file-alt' },
    { key: 'post-ideas', title: 'IDEAS PARA PUBLICACIONES', description: 'Genera contenido viral', icon: 'fas fa-lightbulb' },
    { key: 'editorial-lines', title: 'LÍNEAS EDITORIALES', description: 'Define tu estrategia de contenido', icon: 'fas fa-calendar-alt' },
    { key: 'super-prompts', title: 'GENERADOR DE SÚPER PROMPTS', description: 'Crea prompts avanzados', icon: 'fas fa-cogs' },
    { key: 'quick-posts', title: 'PUBLICACIONES EN MINUTOS', description: 'Contenido rápido y efectivo', icon: 'fas fa-clock' },
    { key: 'hooks', title: 'SÚPER GANCHOS (HOOKS)', description: 'Engancha desde el primer segundo', icon: 'fas fa-fish-hook' },
    { key: 'stories', title: 'IDEAS PARA STORIES', description: 'Contenido para historias', icon: 'fas fa-camera' },
    { key: 'offer-modeling', title: 'MODELAR OFERTAS', description: 'Estructura ofertas ganadoras', icon: 'fas fa-chart-line' }
];

const getFieldsForModule = (moduleKey) => {
    const fieldConfigs = {
        'persona': [
            { key: 'business', label: 'Tipo de Negocio', placeholder: 'Ej: Coaching, E-commerce...', type: 'text' },
            { key: 'target', label: 'Audiencia Objetivo', placeholder: 'Ej: Emprendedores de 25-45 años...', type: 'textarea' }
        ],
        'customer-journey': [
            { key: 'awareness', label: 'Etapa de Conciencia', placeholder: 'Cómo descubren tu marca...', type: 'textarea' },
            { key: 'consideration', label: 'Etapa de Consideración', placeholder: 'Qué evalúan...', type: 'textarea' }
        ],
        'product-ladder': [
            { key: 'entry', label: 'Producto de Entrada', placeholder: 'Ej: Ebook gratuito...', type: 'text' },
            { key: 'core', label: 'Producto Principal', placeholder: 'Ej: Curso online...', type: 'text' }
        ],
        'promotions': [
            { key: 'product', label: 'Producto/Servicio', placeholder: 'Ej: Curso de Marketing...', type: 'text' },
            { key: 'urgency', label: 'Elemento de Urgencia', placeholder: 'Ej: Solo 48 horas...', type: 'text' }
        ],
        'sales-letter': [
            { key: 'headline', label: 'Titular Principal', placeholder: 'Ej: Transforma tu negocio...', type: 'text' },
            { key: 'pain-points', label: 'Puntos de Dolor', placeholder: 'Ej: Ventas estancadas...', type: 'textarea' }
        ],
        'post-ideas': [
            { key: 'niche', label: 'Nicho/Industria', placeholder: 'Ej: Fitness, Finanzas...', type: 'text' },
            { key: 'format', label: 'Formato Preferido', placeholder: 'Ej: Tips, Historias...', type: 'text' }
        ],
        'editorial-lines': [
            { key: 'brand', label: 'Marca/Empresa', placeholder: 'Nombre de tu marca...', type: 'text' },
            { key: 'values', label: 'Valores de Marca', placeholder: 'Ej: Innovación, calidad...', type: 'textarea' }
        ],
        'super-prompts': [
            { key: 'objective', label: 'Objetivo del Prompt', placeholder: 'Ej: Generar contenido educativo...', type: 'text' },
            { key: 'context', label: 'Contexto', placeholder: 'Información relevante...', type: 'textarea' }
        ],
        'quick-posts': [
            { key: 'topic', label: 'Tema Principal', placeholder: 'Ej: Productividad, ventas...', type: 'text' },
            { key: 'audience', label: 'Audiencia', placeholder: 'Ej: Emprendedores, estudiantes...', type: 'text' }
        ],
        'hooks': [
            { key: 'emotion', label: 'Emoción a Despertar', placeholder: 'Ej: Curiosidad, urgencia...', type: 'text' },
            { key: 'benefit', label: 'Beneficio Principal', placeholder: 'Ej: Ahorro de tiempo...', type: 'text' }
        ],
        'stories': [
            { key: 'format', label: 'Formato de Story', placeholder: 'Ej: Pregunta, tip, behind scenes...', type: 'text' },
            { key: 'goal', label: 'Objetivo', placeholder: 'Ej: Engagement, ventas...', type: 'text' }
        ],
        'offer-modeling': [
            { key: 'product', label: 'Producto Base', placeholder: 'Ej: Curso online...', type: 'text' },
            { key: 'price', label: 'Precio Objetivo', placeholder: 'Ej: $297...', type: 'text' }
        ]
    };
    return fieldConfigs[moduleKey] || [];
};
