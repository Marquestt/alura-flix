import Card from 'components/Card';
import styles from './Categoria.module.css';

const Categoria = (props) => {
    return(
        <section className={styles.container}>
            <h2 style={{backgroundColor: props.corPrincipal}}>{props.nome}</h2>
            <div className={styles.cards}>
                <Card contorno={props.contorno} borda={props.borda}/>
            </div>
        </section>
    )
}

export default Categoria;
