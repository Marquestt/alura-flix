import Form from 'components/Form';
import styles from './NovoVideo.module.css';
import { useContext } from 'react';
import { VideoContext } from 'contexto';

const NovoVideo = () => {

    const { categorias, aoAdicionarVideo } = useContext(VideoContext);
    const nomesCategorias = categorias.map(categoria => categoria.nome);

    const aoGuardar = (video) => {
        aoAdicionarVideo(video);
    };

    return(
        <main className={styles.container}>
            <h2>Novo vídeo</h2>
            <h4>Complete o formulário para criar um novo card de vídeo.</h4>
            <Form aoGuardar={aoGuardar} categorias={nomesCategorias}/>
        </main>
    )
}

export default NovoVideo;
