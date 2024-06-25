import Card from 'components/Card';
import styles from './Categoria.module.css';

const Categoria = (props, { categoria, aoEditar }) => {
    return(
        <section className={styles.container}>
            <h2 style={{backgroundColor: props.corPrincipal}}>{props.nome}</h2>
            <div className={styles.cards}>
                {categoria.videos.map(video => (
                    <Card contorno={props.contorno} borda={props.borda} key={video.id} video={video} aoEditar={aoEditar}/>
                ))}
            </div>
        </section>
    )
}

export default Categoria;
