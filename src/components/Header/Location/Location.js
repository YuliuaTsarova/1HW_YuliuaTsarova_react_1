import styles from './Location.module.css'
export function Location () {
	return (
		// <div className={styles.delivery}>
		// 	<img className={styles.location} src={location}></img>

			<input className={styles.search}
				type="text"
				placeholder="  Введите адрес доставки" 	>
            </input>

			// <button className={styles.button} type="submit">
			// 	<img src={magnifier}></img>
			// </button>
		// </div>
	);
}