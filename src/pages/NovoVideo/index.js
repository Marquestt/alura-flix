import Form from 'components/Form';
import styles from './NovoVideo.module.css';
import videoData from '../../json/db.json';
import { useState } from 'react';

const NovoVideo = () => {

    const [categorias, setCategorias] = useState(videoData || []);
    const [video, setVideo] = useState();
    const nomesCategorias = categorias.map(categoria => categoria.nome);

    return(
        <main className={styles.container}>
            <h2>Novo vídeo</h2>
            <h4>Complete o formulário para criar um novo card de vídeo.</h4>
            <Form aoGuardar={data => console.log('Dados do formulário:', data)} categorias={nomesCategorias} video={video}/>
        </main>
    )
}

export default NovoVideo;
