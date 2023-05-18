import { useState, useEffect } from "react"

const Contador = () => {
    
    const [counter, setCounter] = useState(0)
    const [hola, setHola] = useState(true)
    

    const handleClick = () => {
        setCounter( counter + 1)
        
    }
    
    const handleHola = () => {
        setHola(!hola)
    }

    

    useEffect(() => {
        // efecto de montaje
        console.log("Componente montado");
    }, [])

    useEffect(() => {
        // efecto de dependencias
        console.log("Estado actualizado");
    }, [counter, hola])

    
    return (
        <div className="container m-5">
            <button onClick={handleClick} className="btn btn-primary">Click me!</button>
            <p>Clicks: {counter}</p>
            <hr/>

            <p>Fecha y Hora: {new Date().toLocaleDateString() } - {new Date().toLocaleTimeString()}</p>

            <hr/>
            <button onClick= {handleHola} className="btn btn-success">
                { hola ? "Hola mundo!" : "Chau mundo" }

            </button>
        </div>
    )
}

export default Contador