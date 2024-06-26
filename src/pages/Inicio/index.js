import styles from './Inicio.module.css';
import Banner from 'components/Banner';
import Categoria from 'components/Categoria';
import ModalEditar from 'components/ModalEditar';
import { useState } from 'react';
import videoData from '../../json/db.json';

const Inicio = () => {
    const [categorias, setCategorias] = useState(videoData);
    const [videoAtual, setVideoAtual] = useState(null);
    const [mostrarEditar, setMostrarEditar] = useState(false);    

    const aoFechar = () => {
        setMostrarEditar(false);
        setVideoAtual(null);
    }

    return(
       <>
        <Banner />
        {categorias.map(categoria => (
            <Categoria 
                key={categoria.categoriaId} 
                categoria={categoria} 
                videos={categoria.videos}
                aoEditar={(video) => {
                    setVideoAtual(video); 
                    setMostrarEditar(true);
                }}
            />
        ))}
        {videoAtual && 
            <ModalEditar 
                mostrar={mostrarEditar} 
                aoFechar={() => {
                    setMostrarEditar(false); 
                    setVideoAtual(null);
                }} 
                video={videoAtual}  
                aoEnviar={(videoAtualizado) => { 
                    setCategorias(categorias.map(categoria => ({
                        ...categoria, 
                        videos: categoria.videos.map(video => video.id === videoAtualizado.id ? videoAtual : video)
                    }
                    ))) 
                    aoFechar();
                }}
                categorias={categorias.map(cat => cat.nome)}
                />
        }
       </>
    )
}

export default Inicio;
