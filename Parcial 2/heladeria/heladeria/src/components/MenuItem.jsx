import styles from "./MenuItem.module.css"

const formatPrice = (price) => {
    new Intl.NumberFormat("es-EC", {
        currency: "USD",
    }).format(price);
};

const MenuItem = ({menuItem}) => {
    return(
        <article className={styles.card}>
        <img src={menuItem.iceCream.imagePath} alt="" />
        <h3>{menuItem.iceCream.name}</h3>
        <p>{menuItem.description}</p>
        <p>{formatPrice(menuItem.price)}</p>
        <p>{menuItem.stock}</p>
        </article>
    );
};

export default MenuItem;