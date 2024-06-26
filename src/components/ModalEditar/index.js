import CampoTexto from 'components/CampoTexto';
import styles from './ModalEditar.module.css';
import fechar from './cross.png';
import Botao from 'components/Botao';
import CampoAreaTexto from 'components/CampoAreaTexto';
import ListaSuspensa from 'components/ListaSuspensa';
import { useEffect, useState } from 'react';

const ModalEditar = ({ mostrar, aoFechar, video, aoGuardar, categorias }) => {
    const [titulo, setTitulo] = useState('');
    const [categoria, setCategoria] = useState('');
    const [capa, setCapa] = useState('');
    const [linkVideo, setLinkVideo] = useState('');
    const [descricao, setDescricao] = useState('');
    
    useEffect(() => {
        if (video) {
            setTitulo(video.nome);
            setCategoria(video.categoria);
            setCapa(video.capa);
            setLinkVideo(video.video);
            setDescricao(video.descricao);
        }
    }, [video]);

    const aoEnviar = (evento) => {
        evento.preventDefault();
        aoGuardar([
            titulo,
            categoria,
            capa,
            linkVideo,
            descricao
        ])
    }
    
    return(
        <>
            {mostrar && <>
                <div className={styles.overlay}>
                    <div className={styles.container}>
                        <button className={styles.fechar} onClick={aoFechar}><img src={fechar} alt='fechar'/></button>
                        <h2>Editar card:</h2>
                        <form onSubmit={aoEnviar}>
                            <CampoTexto 
                                obrigatorio
                                label='Título'
                                valor={titulo}
                                aoAlterar={valor => setTitulo(valor)}
                            />
                            <ListaSuspensa 
                                obrigatorio
                                label='Categoria'
                                items={categorias}
                                valor={categoria}
                                aoAlterar={valor => setCategoria(valor)}
                            />
                            <CampoTexto 
                                obrigatorio
                                label='Imagem'
                                valor={capa}
                                aoAlterar={valor => setCapa(valor)}
                            />
                            <CampoTexto 
                                obrigatorio
                                label='Vídeo'
                                valor={video}
                                aoAlterar={valor => setLinkVideo(valor)}
                            />
                            <CampoAreaTexto 
                                obrigatorio
                                label='Descrição'
                                valor={descricao}
                                aoAlterar={valor => setDescricao(valor)}
                            />
                            <Botao onClick={aoEnviar} type='submit' valor='Guardar'/>
                            <Botao type='reset' valor='Limpar'/>
                        </form>
                    </div>
                </div>
            </>}
        </>
    )
}

export default ModalEditar;
