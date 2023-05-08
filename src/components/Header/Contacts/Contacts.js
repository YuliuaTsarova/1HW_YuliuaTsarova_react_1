import styles from "./Contacts.module.css";
import calling from "./../../../assets/images/calling.svg";

export function Contacts() {
    return (
        <div className={styles.contacts}>
            <div className={styles.round}>
                <img className={styles.contact__image} src={calling} alt='calling' />
            </div>
            <div className={styles.contact__info}>
                <span className={styles.contact__text}>Контакты:</span>
                <span className={styles.contact__namber}>+7 (917) 510-57-59</span>
            </div>
        </div>
    );
}