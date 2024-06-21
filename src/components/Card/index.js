import styles from './Card.module.css';
import lixo from './trash.png';
import lapis from './pencil.png';

const Card = (props) => {
    return(
        <div className={styles.container}>
            <img src='https://i.pinimg.com/564x/ac/02/07/ac02073cc739700e575b96b95ecb619f.jpg' alt='Capa do vídeo' className={styles.capa} style={{border: props.borda}}/>
            <div style={{boxShadow: props.contorno, border: props.borda }}>
                <p><img src={lixo}/> Deletar</p> <p><img src={lapis}/> Editar</p>
            </div>
        </div>
    )
}

export default Card;
