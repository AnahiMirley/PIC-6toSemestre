import { useState } from "react";
import styles from "./MenuItem.module.css"

const formatPrice = (price) =>
    new Intl.NumberFormat("es-EC", {
        style: "currency",
        currency: "USD",
    }).format(price);

const MenuItem = ({menuItem}) => {
    const [soldOut, setSoldOut] = useState(!menuItem.inStock);

    const handleSoldOut = () => {
        setSoldOut(true);
    };

    return(
        <article className={styles.card} aria-labelledby={`menu-item-${menuItem.id}-name`}>
        <img src={menuItem.iceCream.imagePath} alt="" />
        <h3 id={`menu-item-${menuItem.id}-name`}>{menuItem.iceCream.name}</h3>
        <p>{menuItem.description}</p>
        <p>{formatPrice(menuItem.price)}</p>
        <p aria-live="polite">
            {soldOut ? "Agotado" : "Disponible hoy"}
        </p>
        <button type="button" onClick={handleSoldOut} disabled={soldOut}>
            Marcar como agotado
        </button>
        </article>
    );
};

export default MenuItem;
