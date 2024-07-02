import styles from './Inicio.module.css';
import Banner from 'components/Banner';
import Categoria from 'components/Categoria';
import ModalEditar from 'components/ModalEditar';
import { VideoContext } from 'contexto';
import { useContext } from 'react';

const Inicio = () => {
    const {
        categorias,
        videoAtual,
        mostrarEditar,
        ultimoVideo,
        ultimaCategoria,
        aoFechar,
        aoEditar,
        aoDeletar,
        aoEnviar,
        carregando
    } = useContext(VideoContext);

    if (carregando) {
        return <p>Carregando...</p>;
    }

    return(
       <>
        {ultimoVideo && <Banner video={ultimoVideo} categoria={ultimaCategoria}/>}
        {Array.isArray(categorias) && categorias.map(categoria => (
            <Categoria 
                key={categoria.categoriaId} 
                categoria={categoria} 
                videos={categoria.videos}
                aoEditar={aoEditar}
                aoDeletar={aoDeletar}
            />
        ))}
        {videoAtual && 
            <ModalEditar 
                mostrar={mostrarEditar} 
                aoFechar={aoFechar} 
                video={videoAtual}  
                aoEnviar={aoEnviar}
                categorias={categorias.map(cat => cat.nome)}
                />
        }
       </>
    )
}

export default Inicio;
