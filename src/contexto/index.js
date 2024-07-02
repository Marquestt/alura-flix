import React, { createContext, useState, useEffect } from 'react';

export const VideoContext = createContext();

const VideoProvider = ({ children }) => {
    const [carregando, setCarregando] = useState(true);
    const [categorias, setCategorias] = useState([]);
    const [videoAtual, setVideoAtual] = useState(null);
    const [mostrarEditar, setMostrarEditar] = useState(false);
    const [ultimoVideo, setUltimoVideo] = useState(null);
    const [ultimaCategoria, setUltimaCategoria] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://my-json-server.typicode.com/Marquestt/alura-flix-api/categoriasVideos');
                if (!response.ok) {
                    throw new Error('Erro ao carregar os dados');
                }
                const dados = await response.json();
                setCategorias(dados);
                setCarregando(false);

                let ultimaCategoria = null;
                let ultimoVideo = null;

                dados.forEach(categoria => {
                    const ultimoVideoCategoria = categoria.videos[categoria.videos.length - 1];
                    if (!ultimoVideo || ultimoVideoCategoria.id > ultimoVideo.id) {
                        ultimaCategoria = categoria;
                        ultimoVideo = ultimoVideoCategoria;
                    }
                });

                setUltimaCategoria(ultimaCategoria);
                setUltimoVideo(ultimoVideo);
            } catch (error) {
                console.error('Erro ao carregar os dados:', error);
            }
        };

        fetchData();
    }, []);

    const aoFechar = () => {
        setMostrarEditar(false);
        setVideoAtual(null);
    };

    const aoEditar = (video) => {
        setVideoAtual(video);
        setMostrarEditar(true);
    };

    const aoDeletar = (videoId) => {
        setCategorias(categorias.map(categoria => ({
            ...categoria,
            videos: categoria.videos.filter(video => video.id !== videoId)
        })));
    };

    const aoEnviar = (videoAtualizado) => {
        setCategorias(categorias.map(categoria => ({
            ...categoria,
            videos: categoria.videos.map(video => (video.id === videoAtualizado.id ? videoAtualizado : video))
        })));
        aoFechar();
    };

    const aoAdicionarVideo = (novoVideo) => {
        setCategorias(prevCategorias => {
            return prevCategorias.map(categoria => {
                if (categoria.nome === novoVideo.categoria) {
                    return {
                        ...categoria,
                        videos: [...categoria.videos, novoVideo]
                    };
                }
                return categoria;
            });
        });
    };

    return (
        <VideoContext.Provider value={{
            categorias,
            videoAtual,
            mostrarEditar,
            ultimoVideo,
            ultimaCategoria,
            aoFechar,
            aoEditar,
            aoDeletar,
            aoEnviar,
            aoAdicionarVideo,
            carregando
        }}>
            {children}
        </VideoContext.Provider>
    );
};

export default VideoProvider;
