
import Form from 'components/Form';
import styles from './NovoVideo.module.css';

const NovoVideo = () => {
    return(
        <main className={styles.container}>
            <h2>Novo vídeo</h2>
            <h4>Complete o formulário para criar um novo card de vídeo.</h4>
            <Form/>
        </main>
    )
}

export default NovoVideo;
