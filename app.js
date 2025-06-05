function SuperPromptApp() {
    try {
        const [selectedModule, setSelectedModule] = React.useState(null);
        const [generatedOutput, setGeneratedOutput] = React.useState('');
        const [isLoading, setIsLoading] = React.useState(false);
        const [error, setError] = React.useState('');

        React.useEffect(() => {
            const createStars = () => {
                const starsContainer = document.getElementById('stars');
                if (starsContainer && starsContainer.children.length === 0) {
                    for (let i = 0; i < 100; i++) {
                        const star = document.createElement('div');
                        star.className = 'star';
                        star.style.left = Math.random() * 100 + '%';
                        star.style.top = Math.random() * 100 + '%';
                        star.style.animationDelay = Math.random() * 3 + 's';
                        starsContainer.appendChild(star);
                    }
                }
            };
            createStars();
        }, []);

        const handleModuleSelect = (module) => {
            setSelectedModule(module);
            setGeneratedOutput('');
            setError('');
        };

        const handleGenerate = async (module, formData) => {
            setIsLoading(true);
            setError('');
            
            try {
                const output = await createPrompt(module.key, formData);
                setGeneratedOutput(output);
            } catch (err) {
                setError('Error al generar el prompt. Intenta nuevamente.');
                console.error('Generation error:', err);
            } finally {
                setIsLoading(false);
            }
        };

        const handleReset = () => {
            setGeneratedOutput('');
            setError('');
        };

        const handleNewPrompt = () => {
            setGeneratedOutput('');
            setError('');
        };

        return (
            <div className="min-h-screen" data-name="app" data-file="app.js">
                <AppHeader />
                
                <div className="container mx-auto px-4 py-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        {marketingModules.map((module) => (
                            <ModuleSelector
                                key={module.key}
                                title={module.title}
                                description={module.description}
                                icon={module.icon}
                                isActive={selectedModule?.key === module.key}
                                onClick={() => handleModuleSelect(module)}
                            />
                        ))}
                    </div>

                    {error && (
                        <div className="cosmic-card border-red-400 text-red-300 px-4 py-3 rounded-lg mb-6">
                            <i className="fas fa-exclamation-triangle mr-2"></i>
                            {error}
                        </div>
                    )}

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <FormGenerator
                            selectedModule={selectedModule}
                            onGenerate={handleGenerate}
                            onReset={handleReset}
                            isLoading={isLoading}
                        />
                        
                        <ResultDisplay
                            output={generatedOutput}
                            isVisible={!!generatedOutput}
                            onNewPrompt={handleNewPrompt}
                        />
                    </div>
                </div>
                
                <Footer />
            </div>
        );
    } catch (error) {
        console.error('App component error:', error);
        reportError(error);
        return <div className="p-4 text-red-400">Error loading application</div>;
    }
}

ReactDOM.render(React.createElement(SuperPromptApp), document.getElementById('root'));
