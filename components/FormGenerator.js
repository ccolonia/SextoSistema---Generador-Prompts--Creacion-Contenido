function FormGenerator({ selectedModule, onGenerate, onReset, isLoading }) {
    try {
        const [formData, setFormData] = React.useState({});

        const handleInputChange = (field, value) => {
            setFormData(prev => ({ ...prev, [field]: value }));
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            onGenerate(selectedModule, formData);
        };

        const handleReset = () => {
            setFormData({});
            onReset();
        };

        React.useEffect(() => {
            setFormData({});
        }, [selectedModule]);

        if (!selectedModule) {
            return (
                <div className="text-center py-12" data-name="form-placeholder" data-file="components/FormGenerator.js">
                    <i className="fas fa-hand-pointer text-6xl text-purple-300 mb-4"></i>
                    <h3 className="text-xl text-white">Selecciona un módulo para comenzar</h3>
                </div>
            );
        }

        const fields = getFieldsForModule(selectedModule.key);

        return (
            <div className="cosmic-card rounded-xl p-6" data-name="form-generator" data-file="components/FormGenerator.js">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold text-white">{selectedModule.title}</h2>
                    <button
                        type="button"
                        onClick={handleReset}
                        className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-500 text-sm"
                    >
                        <i className="fas fa-refresh mr-2"></i>
                        Limpiar
                    </button>
                </div>
                <form onSubmit={handleSubmit}>
                    {fields.map((field, index) => (
                        <div key={index} className="mb-4">
                            <label className="block text-sm font-medium text-gray-300 mb-2">
                                {field.label}
                            </label>
                            {field.type === 'textarea' ? (
                                <textarea
                                    className="cosmic-input w-full p-3 rounded-lg"
                                    rows="3"
                                    placeholder={field.placeholder}
                                    value={formData[field.key] || ''}
                                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                                />
                            ) : (
                                <input
                                    type="text"
                                    className="cosmic-input w-full p-3 rounded-lg"
                                    placeholder={field.placeholder}
                                    value={formData[field.key] || ''}
                                    onChange={(e) => handleInputChange(field.key, e.target.value)}
                                />
                            )}
                        </div>
                    ))}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="cosmic-btn w-full text-white py-3 px-6 rounded-lg font-semibold disabled:opacity-50"
                    >
                        {isLoading ? (
                            <span className="flex items-center justify-center">
                                <i className="fas fa-spinner fa-spin mr-2"></i>
                                Generando...
                            </span>
                        ) : (
                            'Generar Prompt'
                        )}
                    </button>
                </form>
            </div>
        );
    } catch (error) {
        console.error('FormGenerator component error:', error);
        reportError(error);
    }
}
