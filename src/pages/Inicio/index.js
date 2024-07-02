import styles from './Inicio.module.css';
import Banner from 'components/Banner';
import Categoria from 'components/Categoria';
import ModalEditar from 'components/ModalEditar';
import { useEffect, useState } from 'react';
import videoData from '../../json/db.json';

const Inicio = () => {
    const [categorias, setCategorias] = useState(videoData || []);
    const [videoAtual, setVideoAtual] = useState(null);
    const [mostrarEditar, setMostrarEditar] = useState(false);
    const [ultimoVideo, setUltimoVideo] = useState(null);
    const [ultimaCategoria, setUltimaCategoria] = useState(null);    

    useEffect(() => {
        setCategorias(videoData);

        const ultimaCategoria = videoData.reduce((a, b) => {
            const ultimoVideoA = a.videos[a.videos.length - 1];
            const ultimoVideoB = b.videos[b.videos.length - 1];
            return ultimoVideoA.id > ultimoVideoB.id ? a : b;
        });

        const ultimoVideo = ultimaCategoria.videos[ultimaCategoria.videos.length - 1];

        setUltimaCategoria(ultimaCategoria);
        setUltimoVideo(ultimoVideo);
    }, []);

    const aoFechar = () => {
        setMostrarEditar(false);
        setVideoAtual(null);
    }

    return(
       <>
        {ultimoVideo && <Banner video={ultimoVideo} categoria={ultimaCategoria}/>}
        {Array.isArray(categorias) && categorias.map(categoria => (
            <Categoria 
                key={categoria.categoriaId} 
                categoria={categoria} 
                videos={categoria.videos}
                aoEditar={(video) => {
                    setVideoAtual(video); 
                    setMostrarEditar(true);
                }}
                aoDeletar={(videoId) => {
                    setCategorias(categorias.map(categoria => (
                        {
                            ...categoria,
                            videos: categoria.videos.filter(video => video.id !== videoId)
                        }
                    )))
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
