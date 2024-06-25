import styles from './ModalEditar.module.css';
import fechar from './cross.png';

const ModalEditar = ({ mostrar, aoFechar, video, aoAlterar, aoEnviar }) => {
    return(
        <>
            {mostrar && <>
                <div className={styles.overlay}>
                    <div className={styles.container}>
                        <button onClick={aoFechar}><img src={fechar} alt='fechar'/></button>
                        <h2>Editar card:</h2>
                        <form onSubmit={aoEnviar}>
                            <div>
                                <label for='nome'>Título</label>
                                <input type='text' id='nome' name='titulo' value={video.titulo} onChange={aoAlterar} placeholder='ex.: o que é javascrip?'/>
                            </div>
                            <div>
                                <label>Categoria</label>
                                <select>
                                    <option>frontend</option>
                                    <option>backend</option>
                                    <option>mobile</option>
                                    <option>inovação</option>
                                    <option>gestão</option>
                                </select>
                            </div>
                            <div>
                                <label for='imagem'>Imagem</label>
                                <input type='text' id='imagem' name='urlImagem' value={video.urlImagem} onChange={aoAlterar} placeholder='https//:...'/>
                            </div>
                            <div>
                                <label for='video'>Vídeo</label>
                                <input type='text' id='video' name='urlVideo' value={video.urlVideo} onChange={aoAlterar} placeholder='https//:...'/>
                            </div>
                            <div>
                                <label for='descricao'>Descrição</label>
                                <textarea id='descricao' name='descricao' value={video.descricao} onChange={aoAlterar} placeholder='Cole ou escreva aqui a descrição do vídeo'/>
                            </div>
                            <button>Guardar</button>
                            <input type='reset' value='Limpar'/>
                        </form>
                    </div>
                </div>
            </>}
        </>
    )
}

export default ModalEditar;
