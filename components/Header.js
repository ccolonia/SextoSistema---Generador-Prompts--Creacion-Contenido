function AppHeader() {
    try {
        return (
            <header className="cosmic-bg text-white py-12" data-name="header" data-file="components/Header.js">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-3">
                            <i className="fas fa-rocket mr-4"></i>
                            SextoSistema
                        </h1>
                        <p className="text-2xl opacity-90 mb-2">Generador de Super Prompts</p>
                        <p className="text-lg opacity-75">
                            Herramientas avanzadas para marketing digital y creación de contenido
                        </p>
                    </div>
                </div>
            </header>
        );
    } catch (error) {
        console.error('Header component error:', error);
        reportError(error);
    }
}
