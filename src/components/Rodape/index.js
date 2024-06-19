import logo from '../../assets/logoMain.png';
import styles from './Rodape.module.css';

const Rodape = () => {
    return(
        <footer className={styles.rodape}>
            <img src={logo} alt='Logo AluraFlix'/>
            {/* <p>Desenvolvido por Thatyane Marques</p> */}
        </footer>
    )
}

export default Rodape;