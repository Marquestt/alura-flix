import styles from './Botao.module.css';

const Botao = ({ valor, type }) => {
    return(
        <input className={`${styles}.botao${type}`}  value={valor} type={type}/>
    )
}

export default Botao;
