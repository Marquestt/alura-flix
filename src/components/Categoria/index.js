import styles from './Categoria.module.css';

const Categoria = ({ children }) => {
    return(
        <section className={styles.container}>
            <h2>{children}</h2>
        </section>
    )
}

export default Categoria;
