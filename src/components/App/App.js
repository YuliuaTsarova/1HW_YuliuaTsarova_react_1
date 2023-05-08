
import { Banner } from '../Banner/Banner';
import { Header } from '../Header/Header';
import { Navigation } from '../Navigation/Navigation';
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.container}>
     <Header/>
     <Banner/>
     <Navigation/>
    </div>
  );
}

export default App;
