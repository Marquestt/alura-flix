import { useEffect, useState } from 'react';
import styles from './Form.module.css';
import CampoTexto from 'components/CampoTexto';
import CampoAreaTexto from 'components/CampoAreaTexto';
import ListaSuspensa from 'components/ListaSuspensa';
import Botao from 'components/Botao';

const Form = ({ aoGuardar, categorias, video }) => {

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
        <form className={styles.formulario} onSubmit={aoEnviar}>
            <h3>Criar Card</h3>
            <div className={styles.container}>
                <CampoTexto 
                    obrigatorio
                    label='Título'
                    placeholder='insira o título'
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
                    placeholder='insira a url da imagem'
                    valor={capa}
                    aoAlterar={valor => setCapa(valor)}
                />
                <CampoTexto 
                    obrigatorio
                    label='Vídeo'
                    placeholder='insira o link do vídeo'
                    valor={linkVideo}
                    aoAlterar={valor => setLinkVideo(valor)}
                />
                <CampoAreaTexto 
                    obrigatorio
                    label='Descrição'
                    placeholder='sobre o que é esse vídeo?'
                    valor={descricao}
                    aoAlterar={valor => setDescricao(valor)}
                />
                <Botao type='button' valor='Guardar'/>
                <Botao type='reset' valor='Limpar'/>
            </div>
        </form>
    )
}

export default Form;
