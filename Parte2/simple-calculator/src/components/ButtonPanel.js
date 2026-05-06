// Componente para el panel de botones de la calculadora
// Define todos los botoncitos

function ButtonPanel({ onButtonClick }) {
    const buttons = [
        '7', '8', '9', '/',
        '4', '5', '6', '*',
        '1', '2', '3', '-',
        '0', '.', '=', '+',
        'C'
    ];

    return (
        <div className="button-panel">
            {buttons.map((btn) => (
                <button
                    key={btn}
                    // Asigna clases específicas para estilos a cada tipo de botón
                    className={
                        btn === 'C' ? 'clear-btn' :
                        btn === '=' ? 'equals' :
                        ['+', '-', '*', '/'].includes(btn) ? 'operator' :
                        ''
                    }
                    onClick={() => onButtonClick(btn)}
                >
                    {btn === 'C' ? 'CLEAR' : btn} {/* Solo para poner texto completo */}
                </button>
            ))}
        </div>
    );
}

export default ButtonPanel;