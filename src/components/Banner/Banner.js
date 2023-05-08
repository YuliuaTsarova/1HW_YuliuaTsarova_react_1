import styles from "./Banner.module.css";

export function Banner() {
    return (

        <div className={styles.banner}>
            <div className={styles.banner__textWrapper}>
                <h1 className={styles.banner__text}>ДОСТАВКА ВКУСНЕЙШИХ БЛЮД ЗА 60 МИНУТ</h1>
                <div className={styles.banner__subText}>Ещё не пробовал?</div>
            </div>
        </div>

    );
}