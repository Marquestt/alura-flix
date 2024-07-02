import Card from 'components/Card';
import styles from './Categoria.module.css';

const Categoria = ({ categoria, videos, aoEditar, aoDeletar }) => {
    return(
        videos.length > 0 && (
            <section className={styles.container}>
                <h2 style={{backgroundColor: categoria.corPrincipal}}>{categoria.nome}</h2>
                <div className={styles.containerCards}>
                    <div className={styles.cards}>
                        {videos.map(video => (
                            <Card 
                                contorno={categoria.contorno} 
                                borda={categoria.borda} 
                                key={video.id} 
                                video={video} 
                                aoEditar={aoEditar}
                                aoDeletar={aoDeletar}
                            />
                        ))}
                    </div>
                </div>
            </section>
        )
    )
}

export default Categoria;
