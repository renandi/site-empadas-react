import { useState } from "react";
import styles from './Contador.module.css'

function Contador () {

    const [contador, setContador] = useState(0);

    function acrescentarValorContador () {
        setContador(contador+1)
    }

    return(
        <div>
        <h1 className={styles['text-black']}>Ola Mundo</h1>
        <p className={styles['text-black']}>Contador: {contador}</p>
        <button onClick={acrescentarValorContador}>Acrescentar</button>
        </div>

    )
}

export default Contador;
