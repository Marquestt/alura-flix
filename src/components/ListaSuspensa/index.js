import styles from './ListaSuspensa.module.css';

const ListaSuspensa = ({ label, items, valor, aoAlterar, obrigatorio = true }) => {
    return(
        <div className={styles.categorias}>
            <label>{label}</label>
            <select required={obrigatorio} value={valor} onChange={evento => aoAlterar(evento.target.value)}>
                <option>
                    {items.map(item => <option key={item}>{item}</option>)}
                </option>
            </select>
        </div>
    )
}

export default ListaSuspensa;
