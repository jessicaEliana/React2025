import { useState } from "react";

function Ejercicio2 () {

    const errorMinMsj = "El valor minimo es 0, no se puede realizar la accion";
    const errorMaxMsj = "El valor maximo es 100, no se puede realizar la accion";

    const [count, setCount] = useState(0);
    const [error, setError] = useState("");

    function handleReset() {
        setCount(0);
        setError("");
    }

    function handlePlus10() {
        if (count + 10 > 100) {
            setError(errorMaxMsj);
            return;
        }
        setCount(count + 10);
        setError("");
    }

    function handlePlus1() {
        if (count + 1 > 100) {
            setError(errorMaxMsj);
            return;
        }
        setCount(count + 1);
        setError("");
    }

    function handleMinus1() {
        if (count - 1 < 0) {
            setError(errorMinMsj);
            return;
        }
        setCount(count - 1);
        setError("");
    }

    function handleMinus10() {
        if (count - 10 < 0) {
            setError(errorMinMsj);
            return;
        }
        setCount(count - 10);
        setError("");
    }

    if (count < 0) {
        // el valor minimo es 0, no se puede realizar la accion

    }

    return (
        <div>
            <div>
                <p>Contador = {count}</p>
            </div>
            <div>            
                <button onClick={handleReset}>Reset</button>
                <button onClick={handlePlus10}>+10</button>
                <button onClick={handlePlus1}>+1</button>
                <button onClick={handleMinus1}>-1</button>
                <button onClick={handleMinus10}>-10</button>
                <p style={{ color: "red" }}>{error}</p>
            </div>
        </div>
    )
}

export default Ejercicio2