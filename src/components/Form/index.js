import styles from './Form.module.css';

const Form = () => {
    return(
        <form className={styles.formulario}>
            <h3>Criar Card</h3>
            <label for='titulo'>Titulo</label>
            <input type='text' id='titulo' placeholder='insira o titulo'/>
            <label>Categoria</label>
            <select>
                <option>Front end</option>
                <option>Back end</option>
                <option>Mobile</option>
                <option>Inovação</option>
                <option>Gestão</option>
            </select>
            <label>Imagem</label>
            <input placeholder='insira a url da imagem'/>
            <label>Vídeo</label>
            <input placeholder='insira o link do vídeo'/>
            <label>Descrição</label>
            <textarea placeholder='sobre o que é esse vídeo?'/>
            <button className={styles.botao}>Guardar</button>
            <input type='reset' value='Limpar' className={styles.botao}/>
        </form>
    )
}

export default Form;
