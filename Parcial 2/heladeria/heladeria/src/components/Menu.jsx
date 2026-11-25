import styles from "./Menu.module.css"

const Menu = ({children}) => {
    return(
        <section className={styles.menu}>
        <h2>Sabores de hoy</h2>
        {children}
        </section>
    );
};

export default Menu;