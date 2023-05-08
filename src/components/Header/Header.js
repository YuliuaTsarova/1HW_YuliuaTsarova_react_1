import { Logo } from "../Logo/Logo";
import styles from "./Header.module.css";
import { Location } from "./../Header/Location/Location";
import { Contacts } from "./../Header/Contacts/Contacts";
import { BasketButton} from "./BasketButton/BasketButton";



export function Header() {
	return (
		<header className={styles.header}>
			<Logo />
			<Location/>
			<Contacts/>
			<BasketButton/>
			
		</header>
	);
}
