import { Link } from 'react-router-dom';
import logo from '../../assets/logoMain.png';
import styles from './Cabecalho.module.css';
import NavLinks from 'components/NavLinks';

const Cabecalho = () => {
    return(
        <header className={styles.cabecalho}>
        <Link to='/'>
            <img src={logo} alt='Logo AluraFlix' />
        </Link>
        <nav>
            <NavLinks src='/'>
                Home
            </NavLinks>
            <NavLinks src='/novo-video'>
                Novo vídeo
            </NavLinks>
        </nav>
    </header>
    )
}

export default Cabecalho;
