import styles from './CampoAreaTexto.module.css';

const CampoAreaTexto = ({ label, valor, obrigatorio = true, placeholder, aoAlterar }) => {
    return(
        <div className={styles.textarea}>
            <label>{label}</label>
            <textarea 
                value={valor} 
                onChange={evento => aoAlterar(evento.target.value)} 
                required={obrigatorio} 
                placeholder={placeholder}
            /> 
        </div>
    );
}

export default CampoAreaTexto;