function ModuleSelector({ title, description, icon, onClick, isActive }) {
    try {
        return (
            <div 
                className={`cosmic-card rounded-xl p-6 cursor-pointer ${
                    isActive ? 'ring-2 ring-purple-400' : ''
                }`}
                onClick={onClick}
                data-name="module-selector"
                data-file="components/ModuleSelector.js"
            >
                <div className="text-center">
                    <div className={`text-4xl mb-4 ${isActive ? 'text-purple-300' : 'text-white'}`}>
                        <i className={icon}></i>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 text-white">{title}</h3>
                    <p className="text-gray-300 text-sm">{description}</p>
                </div>
            </div>
        );
    } catch (error) {
        console.error('ModuleSelector component error:', error);
        reportError(error);
    }
}
