import CampoTexto from 'components/CampoTexto';
import styles from './ModalEditar.module.css';
import fechar from './cross.png';
import Botao from 'components/Botao';
import CampoAreaTexto from 'components/CampoAreaTexto';
import ListaSuspensa from 'components/ListaSuspensa';
import { useContext, useEffect, useState } from 'react';
import { VideoContext } from 'contexto';

const ModalEditar = ({ mostrar, aoFechar, video }) => {
    
    const { categorias, aoEnviar } = useContext(VideoContext);
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [capa, setCapa] = useState('');
    const [linkVideo, setLinkVideo] = useState('');
    const [descricao, setDescricao] = useState('');

    useEffect(() => {
        if (video) {
            setNome(video.nome);
            setCategoria(video.categoria);
            setCapa(video.capa);
            setLinkVideo(video.video);
            setDescricao(video.descricao);
        }
    }, [video]);

    const aoEnviarForm = (evento) => {
        evento.preventDefault();
        aoEnviar({
            ...video,
            nome: nome,
            categoria: categoria,
            capa: capa,
            video: linkVideo,
            descricao: descricao
        });

        limparFormulario();
        aoFechar();
    }

    const limparFormulario = () => {
        setNome('');
        setCategoria('');
        setCapa('');
        setLinkVideo('');
        setDescricao('');
    };
    
    return(
        <>
            {mostrar && <>
                <div className={styles.overlay}>
                    <div className={styles.container}>
                        <button className={styles.fechar} onClick={aoFechar}><img src={fechar} alt='fechar'/></button>
                        <h2>Editar card:</h2>
                        <form onSubmit={aoEnviarForm}>
                            <CampoTexto 
                                obrigatorio
                                label='Título'
                                valor={nome}
                                aoAlterar={valor => setNome(valor)}
                            />
                            <ListaSuspensa 
                                obrigatorio
                                label='Categoria'
                                items={categorias.map(cat => cat.nome)}
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
                                valor={linkVideo} /* Corrigir aqui */
                                aoAlterar={valor => setLinkVideo(valor)}
                            />
                            <CampoAreaTexto 
                                obrigatorio
                                label='Descrição'
                                valor={descricao}
                                aoAlterar={valor => setDescricao(valor)}
                            />
                            <div className={styles.containerBotao}>
                                <Botao type='submit' valor='Guardar'/>
                                <Botao type='reset' valor='Limpar' onClick={limparFormulario}/>
                            </div>
                        </form>
                    </div>
                </div>
            </>}
        </>
    )
}

export default ModalEditar;
