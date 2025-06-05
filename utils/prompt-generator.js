const createPrompt = async (moduleKey, formData) => {
    const defaultPrompt = `# PROMPT GENERADO PARA ${moduleKey.toUpperCase()}

## Información proporcionada:
${Object.entries(formData).map(([key, value]) => `- ${key}: ${value}`).join('\n')}

## Prompt estructurado:
Actúa como un experto en marketing digital especializado en ${moduleKey}.

Basándote en la información proporcionada, genera contenido detallado y actionable que incluya:
1. Análisis de la situación actual
2. Estrategias específicas
3. Pasos de implementación
4. Métricas de seguimiento
5. Recomendaciones adicionales

Formato: Presenta la información de manera clara y estructurada.`;

    try {
        if (typeof invokeAIAgent === 'function') {
            const systemPrompt = `Actúa como un experto en marketing digital especializado en ${moduleKey}. Genera un prompt estructurado y detallado.`;
            const userPrompt = `Información: ${JSON.stringify(formData)}`;
            return await invokeAIAgent(systemPrompt, userPrompt);
        }
        return defaultPrompt;
    } catch (error) {
        console.error('AI Agent error:', error);
        return defaultPrompt;
    }
};
