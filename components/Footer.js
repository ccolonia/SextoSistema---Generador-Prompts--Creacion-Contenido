function Footer() {
    try {
        return (
            <footer className="cosmic-card mt-16 py-6" data-name="footer" data-file="components/Footer.js">
                <div className="container mx-auto px-4">
                    <div className="text-center text-gray-300">
                        <p className="text-sm">
                            © 2025 SextoSistema / carlaincolonia@gmail.com / Todos los derechos reservados.
                        </p>
                    </div>
                </div>
            </footer>
        );
    } catch (error) {
        console.error('Footer component error:', error);
        reportError(error);
    }
}
