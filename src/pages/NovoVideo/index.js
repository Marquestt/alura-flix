import Form from 'components/Form';
import styles from './NovoVideo.module.css';
import videoData from '../../json/db.json';
import { useState } from 'react';

const NovoVideo = () => {

    const [categorias, setCategorias] = useState(videoData || []);
    const [videos, setVideos] = useState([]);
    const nomesCategorias = categorias.map(categoria => categoria.nome);

    const aoGuardar = (video) => {
        setVideos([...videos, video])
    }

    return(
        <main className={styles.container}>
            <h2>Novo vídeo</h2>
            <h4>Complete o formulário para criar um novo card de vídeo.</h4>
            <Form aoGuardar={video => aoGuardar(video)} categorias={nomesCategorias} video={videos}/>
        </main>
    )
}

export default NovoVideo;
