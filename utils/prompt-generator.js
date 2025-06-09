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

    'customer-journey': (data) => `# MAPA DEL CUSTOMER JOURNEY COMPLETO

## 🎯 INFORMACIÓN DEL PROYECTO
${Object.entries(data).map(([key, value]) => `**${key.charAt(0).toUpperCase() + key.slice(1)}:** ${value || 'No especificado'}`).join('\n')}

## 📊 ETAPAS DEL RECORRIDO
### 1. CONCIENCIA → 2. CONSIDERACIÓN → 3. DECISIÓN → 4. COMPRA → 5. RETENCIÓN

**Métricas clave:** CTR, CPM, Conversiones, LTV, NPS`
};

const createPrompt = (moduleKey, formData) => {
    // Check if we have a specific template for this module
    if (promptTemplates[moduleKey]) {
        return promptTemplates[moduleKey](formData);
    }
    
    // Default template for modules without specific templates
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

**PRÓXIMOS PASOS:**
Implementar las estrategias sugeridas de manera gradual y medir resultados constantemente.`;
};
