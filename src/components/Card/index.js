import styles from './Card.module.css';
import lixo from './trash.png';
import lapis from './pencil.png';

const Card = ({ video, aoEditar, aoDeletar, contorno, borda }) => {
    return(
        <div className={styles.container}>
            <iframe 
                width="432" 
                height="260" 
                src={video.video} 
                title="YouTube video player" 
                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen></iframe>
            <div style={{boxShadow: contorno, border: borda }}>
                <button
                    onClick={() => aoDeletar(video)}>
                    <img 
                        src={lixo} 
                        alt='lixeira'
                    /> 
                Deletar</button> 
                <button 
                    onClick={() => aoEditar(video)}>
                    <img 
                        src={lapis} 
                        alt='lapis'
                    /> 
                Editar</button>
            </div>
        </div>
    )
}

export default Card;
