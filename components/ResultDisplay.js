function ResultDisplay({ output, isVisible, onNewPrompt }) {
    try {
        const [copied, setCopied] = React.useState(false);

        const copyToClipboard = async () => {
            try {
                await navigator.clipboard.writeText(output);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            } catch (err) {
                console.error('Error copying to clipboard:', err);
            }
        };

        if (!isVisible || !output) return null;

        return (
            <div className="cosmic-card rounded-xl p-6 fade-in" data-name="result-display" data-file="components/ResultDisplay.js">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">Prompt Generado</h3>
                    <div className="flex gap-2">
                        <button
                            onClick={copyToClipboard}
                            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-500"
                        >
                            <i className={`fas ${copied ? 'fa-check' : 'fa-copy'} mr-2`}></i>
                            {copied ? 'Copiado!' : 'Copiar'}
                        </button>
                        <button
                            onClick={onNewPrompt}
                            className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-500"
                        >
                            <i className="fas fa-plus mr-2"></i>
                            Nuevo
                        </button>
                    </div>
                </div>
                <div className="cosmic-input p-4 rounded-lg">
                    <pre className="whitespace-pre-wrap text-sm text-white font-mono">
                        {output}
                    </pre>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ResultDisplay component error:', error);
        reportError(error);
    }
}
