// Se importa UseSate
// Se importan los componentes Display y ButtonPanel
import { useState } from "react";
import Display from "./components/Display";
import ButtonPanel from "./components/ButtonPanel";
import "./App.css";

function App() {
    const [input, setInput] = useState('');

    const handleButtonClick = (value) => {

        // NUEVO: botón clear
        if (value === 'C') {
            setInput('');
            return;
        }

        if (value === '=') {
            // evita evaluar vacío (esto sí es necesario)
            if (!input.trim()) return;

            try {
                setInput(eval(input).toString());
            } catch (error) {
                setInput('Error');
            }
        } else {
            //pequeño arreglo, si hay "Error" reinicia
            if (input === 'Error') {
                setInput(value);
            } else {
                setInput(input + value);
            }
        }
    };

    return (
        <div className="calculator">
            <Display value={input} />
            <ButtonPanel onButtonClick={handleButtonClick} />
        </div>
    );
}


export default App;