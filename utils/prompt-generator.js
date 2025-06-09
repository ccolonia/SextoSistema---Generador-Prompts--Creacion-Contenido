const promptTemplates = {
    'persona': (data) => `# CREACIÓN DE BUYER PERSONA DETALLADA

## 📊 INFORMACIÓN BASE
**Negocio:** ${data.business || 'No especificado'}
**Audiencia Objetivo:** ${data.target || 'No especificado'}

## 🎯 PERFIL DEL CLIENTE IDEAL
### Datos Demográficos
- Edad: ${data.target?.includes('25') ? '25-35 años' : '30-45 años'}
- Género: Mixto (con ligera tendencia femenina en coaching)
- Ubicación: Ciudades principales, clase media-alta
- Ingresos: $30,000 - $80,000 anuales

### Psicográficos
- **Personalidad:** Ambiciosos, orientados al crecimiento personal
- **Valores:** Desarrollo personal, equilibrio vida-trabajo, éxito
- **Intereses:** Libros de autoayuda, podcasts, cursos online
- **Estilo de vida:** Profesionales ocupados buscando mejora continua

### Comportamiento Digital
- **Redes favoritas:** Instagram, LinkedIn, YouTube
- **Horarios activos:** 7-9 AM, 12-1 PM, 7-10 PM
- **Tipo de contenido:** Videos educativos, posts inspiracionales

## 🎯 PUNTOS DE DOLOR
1. Falta de claridad en objetivos profesionales
2. Procrastinación y falta de disciplina
3. Síndrome del impostor
4. Dificultad para equilibrar vida personal y profesional

## 💡 SOLUCIONES QUE BUSCAN
- Metodologías probadas de productividad
- Estrategias de mindset y confianza
- Planes de acción claros y medibles
- Comunidad de apoyo y accountability

## 📱 ESTRATEGIA DE CONTENIDO
### Temas que resuenan:
- "Cómo superar la procrastinación en 5 pasos"
- "El método que uso para duplicar mi productividad"
- "Por qué el 90% fracasa en sus objetivos"
- "La rutina matutina de personas exitosas"`,

    'customer-journey': (data) => `# MAPA DEL CUSTOMER JOURNEY

## 🎯 ETAPAS DEL RECORRIDO
### 1. CONCIENCIA
**Situación:** ${data.awareness || 'El cliente identifica un problema'}
**Touchpoints:** Redes sociales, Google, recomendaciones
**Contenido:** Posts educativos, videos explicativos, testimonios

### 2. CONSIDERACIÓN  
**Situación:** ${data.consideration || 'Evalúa diferentes opciones'}
**Touchpoints:** Website, webinars, lead magnets, email
**Contenido:** Comparativas, casos de estudio, demos gratuitas

### 3. DECISIÓN
**Touchpoints:** Página de ventas, consultoría, chat en vivo
**Contenido:** Propuestas personalizadas, garantías, urgencia

### 4. COMPRA
**Experiencia:** Proceso simple, confirmación inmediata, bienvenida

### 5. POST-COMPRA
**Objetivos:** Onboarding, soporte, upsells, referidos

## 📊 MÉTRICAS POR ETAPA
- **Conciencia:** Reach, impresiones, tráfico web
- **Consideración:** Leads generados, engagement  
- **Decisión:** Tasa de conversión, valor promedio
- **Compra:** Abandono de carrito, tiempo de proceso
- **Post-compra:** NPS, LTV, tasa de referidos`,

    'product-ladder': (data) => `# ESCALERA DE PRODUCTOS ESTRATÉGICA

## 📋 ESTRUCTURA DE OFERTA
**Producto de Entrada:** ${data.entry || 'Lead magnet gratuito'}
**Producto Principal:** ${data.core || 'Oferta core'}

## 🎯 NIVELES DE LA ESCALERA

### NIVEL 1: PRODUCTO GRATUITO (Lead Magnet)
- **Precio:** $0
- **Objetivo:** Captar leads y generar confianza
- **Ejemplos:** Ebook, checklist, mini-curso, plantillas
- **Valor percibido:** $50-100

### NIVEL 2: PRODUCTO TRIPWIRE
- **Precio:** $7-27  
- **Objetivo:** Convertir leads en clientes
- **Ejemplos:** Mini-curso, template premium, consulta express
- **Valor percibido:** $200-500

### NIVEL 3: PRODUCTO CORE
- **Precio:** $97-497
- **Objetivo:** Producto principal de ingresos  
- **Ejemplos:** Curso completo, programa de coaching
- **Valor percibido:** $2000-5000

### NIVEL 4: PRODUCTO PREMIUM
- **Precio:** $997-2997
- **Objetivo:** Maximizar valor por cliente
- **Ejemplos:** Masterclass, coaching 1:1, certificación
- **Valor percibido:** $10000+

### NIVEL 5: PRODUCTO VIP
- **Precio:** $5000+
- **Objetivo:** Clientes de alto valor
- **Ejemplos:** Mentoría exclusiva, done-with-you, retainer

## 📈 ESTRATEGIA DE ASCENSO
1. **Secuencia de emails** para cada nivel
2. **Upsells automáticos** en el checkout
3. **Webinars de promoción** para productos premium
4. **Segmentación** por comportamiento de compra`,

    'promotions': (data) => `# DISEÑO DE PROMOCIONES IRRESISTIBLES

## 🎯 INFORMACIÓN DE LA OFERTA
**Producto/Servicio:** ${data.product || 'No especificado'}
**Elemento de Urgencia:** ${data.urgency || 'Tiempo limitado'}

## 🔥 ESTRUCTURA DE LA PROMOCIÓN

### OFERTA PRINCIPAL
- **Producto core:** ${data.product || 'Tu producto principal'}
- **Precio regular:** $497
- **Precio promocional:** $197 (60% descuento)

### BONOS AGREGADOS
1. **Bonus #1:** Plantillas exclusivas ($97 valor)
2. **Bonus #2:** Sesión de Q&A grupal ($197 valor)  
3. **Bonus #3:** Acceso a comunidad privada ($97 valor)
4. **Bonus #4:** Checklist de implementación ($47 valor)

### GARANTÍA
- **Tipo:** 30 días de garantía total
- **Condiciones:** Sin preguntas, reembolso completo
- **Mensaje:** "Si no ves resultados en 30 días, te devolvemos todo"

## ⏰ ELEMENTOS DE URGENCIA
- **Tiempo:** ${data.urgency || 'Solo 48 horas'}
- **Cantidad:** Limitado a 100 personas
- **Bonus:** Los primeros 50 reciben bonus extra

## 💰 CÁLCULO DE VALOR
- Producto principal: $497
- Bonus combinados: $438  
- **Valor total:** $935
- **Precio promocional:** $197
- **Ahorro:** $738 (79% descuento)

## 📢 COPY DE PROMOCIÓN
"🔥 OFERTA LIMITADA: Obtén [PRODUCTO] por solo $197 (valor $935)
✅ Incluye 4 bonos exclusivos
✅ Garantía de 30 días  
✅ Solo por 48 horas
⏰ Quedan [X] cupos disponibles"`,

    'sales-letter': (data) => `# CARTA DE VENTAS DE ALTA CONVERSIÓN

## 📝 INFORMACIÓN BASE
**Titular:** ${data.headline || 'Transforma tu negocio'}
**Puntos de Dolor:** ${data['pain-points'] || 'Problemas del cliente'}

## 🎯 ESTRUCTURA DE LA CARTA

### 1. TITULAR MAGNÉTICO
"${data.headline || 'Descubre el Sistema Exacto que Usé para [RESULTADO ESPECÍFICO] en Solo [TIEMPO]'}"

**Subtítulo:** "Sin experiencia previa, sin inversión inicial, sin conocimientos técnicos"

### 2. APERTURA EMPÁTICA
"Si estás leyendo esto, probablemente te sientes frustrado porque..."
- ${data['pain-points']?.split(',')[0] || 'Las ventas están estancadas'}
- Has probado múltiples estrategias sin éxito
- Sientes que pierdes tiempo y dinero
- Te preguntas si realmente es posible lograrlo

### 3. HISTORIA DE TRANSFORMACIÓN
"Hace [X] años, yo estaba exactamente en tu lugar..."
- Situación inicial similar al cliente
- Momento de quiebre o descubrimiento
- Proceso de transformación
- Resultados actuales específicos

### 4. PRESENTACIÓN DE LA SOLUCIÓN
**El Sistema [NOMBRE]:**
- Módulo 1: Fundamentos y mindset
- Módulo 2: Estrategia paso a paso  
- Módulo 3: Implementación práctica
- Módulo 4: Optimización y escalamiento

### 5. PRUEBA SOCIAL
- 500+ estudiantes exitosos
- Testimonios específicos con resultados
- Casos de estudio detallados
- Reconocimientos y certificaciones

### 6. OFERTA IRRESISTIBLE
- Precio con descuento limitado
- Bonos de alto valor agregado
- Garantía sin riesgo
- Urgencia real y creíble

### 7. LLAMADA A LA ACCIÓN
"Haz clic en el botón de abajo AHORA y transforma tu [ÁREA] para siempre"`,

    'post-ideas': (data) => `# IDEAS PARA PUBLICACIONES VIRALES

## 🎯 INFORMACIÓN BASE
**Nicho:** ${data.niche || 'No especificado'}
**Formato:** ${data.format || 'Tips y consejos'}

## 💡 IDEAS DE CONTENIDO POR CATEGORÍA

### EDUCATIVO (40% del contenido)
1. "5 errores que cometes en ${data.niche || 'tu área'} (y cómo evitarlos)"
2. "El método paso a paso que uso para [RESULTADO]"
3. "Todo lo que necesitas saber sobre [TEMA] en 60 segundos"
4. "Comparación: [OPCIÓN A] vs [OPCIÓN B] - ¿Cuál elegir?"
5. "Las 3 herramientas que cambiaron mi [ÁREA DE TRABAJO]"

### INSPIRACIONAL (25% del contenido)  
6. "Hace 2 años estaba [SITUACIÓN INICIAL], hoy [SITUACIÓN ACTUAL]"
7. "Por qué el fracaso fue lo mejor que me pasó"
8. "La lección más valiosa que aprendí en ${data.niche || 'mi carrera'}"
9. "Si yo pude, tú también puedes: Mi historia de transformación"
10. "El día que decidí cambiar mi vida para siempre"

### ENTRETENIMIENTO (20% del contenido)
11. "Expectativa vs Realidad en ${data.niche || 'mi trabajo'}"
12. "Cosas que solo entienden los de ${data.niche || 'mi industria'}"
13. "Mi día típico en 30 segundos (versión honesta)"
14. "Reaccionando a consejos de ${data.niche || 'mi área'} en TikTok"
15. "Behind the scenes: Así trabajo realmente"

### PERSONAL (15% del contenido)
16. "Por qué dejé [TRABAJO ANTERIOR] para dedicarme a esto"
17. "Mi mayor miedo cuando empecé (y cómo lo superé)"
18. "Pregúntame cualquier cosa sobre ${data.niche || 'mi experiencia'}"
19. "Los libros que cambiaron mi perspectiva"
20. "Mi rutina matutina para ser más productivo"

## 📱 FORMATOS RECOMENDADOS
- **Carrusel:** Para tips y listas
- **Video corto:** Para tutoriales rápidos  
- **Historia:** Para contenido personal
- **Live:** Para Q&A y interacción
- **Reel:** Para entretenimiento`,

    'editorial-lines': (data) => `# LÍNEAS EDITORIALES ESTRATÉGICAS

## 🎯 INFORMACIÓN DE MARCA
**Marca:** ${data.brand || 'No especificado'}
**Valores:** ${data.values || 'No especificado'}

## 📋 PILARES DE CONTENIDO

### PILAR 1: EDUCATIVO (40%)
**Objetivo:** Posicionar como experto
**Temas:**
- Tutoriales paso a paso
- Tips y consejos prácticos
- Explicación de conceptos
- Análisis de tendencias
- Herramientas recomendadas

**Formatos:** Carruseles, videos explicativos, posts largos

### PILAR 2: INSPIRACIONAL (25%)
**Objetivo:** Motivar y conectar emocionalmente
**Temas:**
- Historias de éxito personales
- Superación de obstáculos
- Reflexiones y aprendizajes
- Citas motivacionales
- Transformaciones de clientes

**Formatos:** Historias, videos testimoniales, posts reflexivos

### PILAR 3: PERSONAL/BEHIND THE SCENES (20%)
**Objetivo:** Humanizar la marca
**Temas:**
- Día a día del trabajo
- Proceso creativo
- Equipo y colaboradores
- Momentos personales
- Errores y aprendizajes

**Formatos:** Stories, videos casuales, fotos espontáneas

### PILAR 4: PROMOCIONAL (15%)
**Objetivo:** Generar ventas
**Temas:**
- Lanzamientos de productos
- Ofertas especiales
- Testimonios de clientes
- Casos de éxito
- Llamadas a la acción

**Formatos:** Posts de venta, videos promocionales

## 📅 CALENDARIO EDITORIAL SEMANAL
- **Lunes:** Motivación (Inspiracional)
- **Martes:** Tutorial (Educativo)  
- **Miércoles:** Behind the scenes (Personal)
- **Jueves:** Tip rápido (Educativo)
- **Viernes:** Reflexión semanal (Personal)
- **Sábado:** Contenido ligero (Entretenimiento)
- **Domingo:** Preparación semana (Inspiracional)

## 🎨 TONO Y ESTILO
- **Voz de marca:** ${data.values?.includes('profesional') ? 'Profesional pero cercana' : 'Amigable y conversacional'}
- **Personalidad:** Experta, confiable, motivadora
- **Lenguaje:** Claro, directo, sin tecnicismos
- **Emociones:** Inspiración, confianza, cercanía`
};

const createPrompt = (moduleKey, formData) => {
    if (promptTemplates[moduleKey]) {
        return promptTemplates[moduleKey](formData);
    }
    
    return `# PROMPT PROFESIONAL PARA ${moduleKey.toUpperCase()}

## 📋 INFORMACIÓN PROPORCIONADA
${Object.entries(formData).map(([key, value]) => `**${key.charAt(0).toUpperCase() + key.slice(1)}:** ${value || 'No especificado'}`).join('\n')}

## 🎯 ESTRATEGIA RECOMENDADA
### 1. ANÁLISIS SITUACIONAL
- Evaluación del estado actual
- Identificación de oportunidades  
- Análisis de la competencia

### 2. PLAN DE ACCIÓN
- Objetivos SMART claros
- Tácticas específicas
- Cronograma de implementación

### 3. MÉTRICAS Y SEGUIMIENTO
- KPIs principales
- Herramientas de medición
- Reportes periódicos

**PRÓXIMOS PASOS:** Implementar las estrategias sugeridas de manera gradual.`;
};
