import Rodape from 'components/Rodape';
import styles from './Inicio.module.css';
import Cabecalho from 'components/Cabecalho';
import Banner from 'components/Banner';
import Categoria from 'components/Categoria';

const Inicio = () => {
    return(
       <>
        <Cabecalho />
        <Banner />
        <Categoria>
            Front end
        </Categoria>
        <Rodape />
       </>
    )
}

export default Inicio;
