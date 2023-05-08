import styles from './BasketButton.module.css'
import {Link} from "react-router-dom"

export function BasketButton() {
    return (
        <Link to="basket" className={styles.basket}>
            <span className={styles.basket__text}>Корзина</span>
            <div className={styles.vl} />
            <div className={styles.round1} />
        </Link>
    );
}