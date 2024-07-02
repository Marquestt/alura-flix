import styles from './Botao.module.css';

const Botao = ({ valor, type }) => {
    return(
        <input className={styles.botao} value={valor} type={type}/>
    )
}

export default Botao;
