import { useContext, useState } from 'react';
import CampoTexto from 'components/CampoTexto';
import CampoAreaTexto from 'components/CampoAreaTexto';
import ListaSuspensa from 'components/ListaSuspensa';
import Botao from 'components/Botao';
import { VideoContext } from 'contexto';
import styles from './Form.module.css';

const Form = () => {
    const { categorias, aoAdicionarVideo } = useContext(VideoContext);
    const [nome, setNome] = useState('');
    const [categoria, setCategoria] = useState('');
    const [capa, setCapa] = useState('');
    const [linkVideo, setLinkVideo] = useState('');
    const [descricao, setDescricao] = useState('');

    const aoEnviar = (evento) => {
        evento.preventDefault();
        const novoVideo = {
            id: Date.now(),
            nome,
            categoria,
            capa,
            video: linkVideo,
            descricao,
        };
        aoAdicionarVideo(novoVideo);
        limparFormulario();
    };

    const limparFormulario = () => {
        setNome('');
        setCategoria('');
        setCapa('');
        setLinkVideo('');
        setDescricao('');
    };

    return (
        <form className={styles.formulario} onSubmit={aoEnviar}>
            <h3>Criar Card</h3>
            <div className={styles.container}>
                <CampoTexto 
                    obrigatorio
                    label='Título'
                    placeholder='insira o título'
                    valor={nome}
                    aoAlterar={setNome}
                />
                <ListaSuspensa 
                    obrigatorio
                    label='Categoria'
                    items={categorias.map(cat => cat.nome)}
                    valor={categoria}
                    aoAlterar={setCategoria}
                />
                <CampoTexto 
                    obrigatorio
                    label='Imagem'
                    placeholder='insira a url da imagem'
                    valor={capa}
                    aoAlterar={setCapa}
                />
                <CampoTexto 
                    obrigatorio
                    label='Vídeo'
                    placeholder='insira o link do vídeo'
                    valor={linkVideo}
                    aoAlterar={setLinkVideo}
                />
                <CampoAreaTexto 
                    obrigatorio
                    label='Descrição'
                    placeholder='sobre o que é esse vídeo?'
                    valor={descricao}
                    aoAlterar={setDescricao}
                />
                <div className={styles.containerBotao}>
                    <Botao type='submit' valor='Guardar'/>
                    <Botao type='reset' valor='Limpar' onClick={limparFormulario}/>
                </div>
            </div>
        </form>
    );
};

export default Form;
