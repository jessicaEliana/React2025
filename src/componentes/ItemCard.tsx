import { useState } from "react";
import styles from "./itemCardStyles.module.css";

type ItemProps = {
    titulo: string,
    descripcion: string,
    precio?: number,
    src: string
}

function ItemCard(props: ItemProps) {
    const { titulo, descripcion, precio = 0, src } = props;
    const [liked, setLiked] = useState(false);
    const [count, setCount] = useState(0);

    function toggleLike() {
        setLiked(!liked);
    }

    function countLike() {
        setCount(count + 1);
    }

    function handleclick() {
        console.log(titulo)
    }

    return (
    <section className={styles.fondo}>
        <img className={styles.imagen} width="150" height="150" src={src} />
        <div>
            <h2>{titulo}</h2>
            <p>{descripcion}</p>
            {precio>0 && (<p>${precio}</p>)}
            <button onClick={handleclick}>Comprar</button>
            <button onClick={toggleLike}>{liked ? "❤️" : "🤍"}</button>
            <button onClick={countLike}>{count}</button>
            
        </div>
    </section>
    );
}

export default ItemCard