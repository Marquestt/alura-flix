import styles from './Card.module.css';
import lixo from './trash.png';
import lapis from './pencil.png';

const Card = ({ video, aoEditar, contorno, borda }) => {
    return(
        <div className={styles.container}>
            <img 
                src={video.capa} 
                alt={video.nome} 
                className={styles.capa} 
                style={{border: borda}}/>
            <div style={{boxShadow: contorno, border: borda }}>
                <p><img 
                        src={lixo} 
                        alt='lixeira'
                    /> 
                Deletar</p> 
                <p><img 
                        src={lapis} 
                        alt='lapis' 
                        onClick={() => aoEditar(video)}
                    /> 
                Editar</p>
            </div>
        </div>
    )
}

export default Card;
