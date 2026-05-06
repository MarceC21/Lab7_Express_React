// 
// Muestra el valor actual o "0" si está vacío

function Display({ value }) {
    return (
        <div className="display">
            {value || "0"} 
        </div>
    );
}

export default Display;