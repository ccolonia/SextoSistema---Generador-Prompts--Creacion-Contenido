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
- **Tipo de contenido:** Videos educativos, posts inspiracionales, casos de éxito

## 🎯 PUNTOS DE DOLOR
1. Falta de claridad en objetivos profesionales
2. Procrastinación y falta de disciplina
3. Síndrome del impostor
4. Dificultad para equilibrar vida personal y profesional
5. Estancamiento en el crecimiento profesional

## 💡 SOLUCIONES QUE BUSCAN
- Metodologías probadas de productividad
- Estrategias de mindset y confianza
- Planes de acción claros y medibles
- Comunidad de apoyo y accountability
- Herramientas prácticas de organización

## 📱 ESTRATEGIA DE CONTENIDO
### Temas que resuenan:
- "Cómo superar la procrastinación en 5 pasos"
- "El método que uso para duplicar mi productividad"
- "Por qué el 90% fracasa en sus objetivos (y cómo ser del 10%)"
- "La rutina matutina de personas exitosas"

### Formatos efectivos:
- Carruseles educativos en Instagram
- Videos cortos con tips prácticos
- Historias con behind the scenes
- Lives de Q&A semanales`,

    'customer-journey': (data) => `# MAPA DEL CUSTOMER JOURNEY

## 🎯 ETAPAS DEL RECORRIDO DEL CLIENTE

### 1. CONCIENCIA (Awareness)
**Situación:** ${data.awareness || 'El cliente identifica un problema o necesidad'}

**Touchpoints:**
- Redes sociales (contenido orgánico)
- Búsquedas en Google
- Recomendaciones de amigos
- Publicidad en Facebook/Instagram

**Contenido necesario:**
- Posts educativos sobre el problema
- Videos explicativos
- Infografías con estadísticas
- Testimonios de clientes

### 2. CONSIDERACIÓN (Consideration)
**Situación:** ${data.consideration || 'El cliente evalúa diferentes opciones y soluciones'}

**Touchpoints:**
- Website y blog
- Webinars gratuitos
- Lead magnets
- Email marketing
- Redes sociales

**Contenido necesario:**
- Comparativas de soluciones
- Casos de estudio detallados
- Demos y pruebas gratuitas
- FAQ y objeciones comunes

### 3. DECISIÓN (Decision)
**Touchpoints:**
- Página de ventas
- Llamadas de consultoría
- Chat en vivo
- Email de seguimiento

**Contenido necesario:**
- Propuestas personalizadas
- Garantías y testimonios
- Urgencia y escasez
- Bonos y descuentos

### 4. COMPRA (Purchase)
**Experiencia:**
- Proceso de pago simple
- Confirmación inmediata
- Bienvenida personalizada
- Acceso rápido al producto

### 5. POST-COMPRA (Post-Purchase)
**Objetivos:**
- Onboarding efectivo
- Soporte continuo
- Upsells y cross-sells
- Referidos y testimonios

## 📊 MÉTRICAS POR ETAPA
- **Conciencia:** Reach, impresiones, tráfico web
- **Consideración:** Leads generados, engagement
- **Decisión:** Tasa de conversión, valor promedio
- **Compra:** Abandono de carrito, tiempo de proceso
- **Post-compra:** NPS, LTV, tasa de referidos`,

    'default': (moduleKey, data) => `# PROMPT PROFESIONAL PARA ${moduleKey.toUpperCase()}

## 📋 INFORMACIÓN PROPORCIONADA
${Object.entries(data).map(([key, value]) => `**${key.charAt(0).toUpperCase() + key.slice(1)}:** ${value}`).join('\n')}

## 🎯 PROMPT ESTRUCTURADO

Actúa como un experto consultor en marketing digital especializado en ${moduleKey}.

**CONTEXTO:**
Trabajas con un negocio que necesita desarrollar estrategias específicas para ${moduleKey}. Tu experiencia incluye más de 10 años en marketing digital, growth hacking y optimización de conversiones.

**TAREA:**
Basándote en la información proporcionada, desarrolla un plan detallado que incluya:

### 1. ANÁLISIS SITUACIONAL
- Evaluación del estado actual
- Identificación de oportunidades
- Análisis de la competencia
- Fortalezas y debilidades

### 2. ESTRATEGIA ESPECÍFICA
- Objetivos SMART claros
- Tácticas recomendadas
- Canales prioritarios
- Presupuesto sugerido

### 3. PLAN DE IMPLEMENTACIÓN
- Cronograma de 90 días
- Recursos necesarios
- Responsabilidades
- Hitos importantes

### 4. MÉTRICAS Y KPIs
- Indicadores de rendimiento
- Herramientas de medición
- Frecuencia de reportes
- Benchmarks de la industria

### 5. RECOMENDACIONES ADICIONALES
- Mejores prácticas
- Errores comunes a evitar
- Recursos complementarios
- Siguientes pasos

**FORMATO:**
Presenta toda la información de manera estructurada, actionable y fácil de implementar. Incluye ejemplos específicos y casos prácticos cuando sea relevante.`
};

const createPrompt = async (moduleKey, formData) => {
    try {
        // Try AI agent first if available
        if (typeof invokeAIAgent === 'function') {
            const systemPrompt = `Actúa como un experto en marketing digital especializado en ${moduleKey}. Genera un prompt estructurado y detallado con estrategias específicas y actionables.`;
            const userPrompt = `Información del cliente: ${JSON.stringify(formData)}. Genera un prompt completo y profesional.`;
            const aiResult = await invokeAIAgent(systemPrompt, userPrompt);
            if (aiResult && aiResult.length > 200) {
                return aiResult;
            }
        }
    } catch (error) {
        console.error('AI Agent not available:', error);
    }

    // Use detailed templates as fallback
    const template = promptTemplates[moduleKey] || promptTemplates.default;
    return template(formData, moduleKey);
};
