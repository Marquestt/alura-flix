import styles from './CampoTexto.module.css';

const CampoTexto = ({ label, type='text', valor, obrigatorio = true, placeholder, aoAlterar }) => {
    return(
        <div className={styles.campoInput}>
            <label>{label}</label>
            <input 
                type={type} 
                value={valor} 
                onChange={evento => aoAlterar(evento.target.value)} 
                required={obrigatorio} 
                placeholder={placeholder}
            /> 
        </div>
    );
}

export default CampoTexto;
