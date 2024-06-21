import Rodape from 'components/Rodape';
import styles from './Inicio.module.css';
import Cabecalho from 'components/Cabecalho';
import Banner from 'components/Banner';
import Categoria from 'components/Categoria';

const Inicio = () => {
    const categorias = [
        {
            nome: 'Front end',
            corPrincipal: '#6BD1FF',
            contorno: 'inset 0px 0px 10px 2px #6BD1FF',
            borda: '.22rem solid #68D1FF'
        },
        {
            nome: 'Back end',
            corPrincipal: '#00C86F',
            contorno: 'inset 0px 0px 10px 2px #00C86F',
            borda: '.22rem solid #00C86F'
        },
        {
            nome: 'Mobile',
            corPrincipal: '#FFBA05',
            contorno: 'inset 0px 0px 10px 2px #FFBA05',
            borda: '.22rem solid #FFB405'
        },
        {
            nome: 'Inovação',
            corPrincipal: '#FB24FF',
            contorno: 'inset 0px 0px 10px 2px #FB24FF',
            borda: '.22rem solid #FB24FF'
        },
        {
            nome: 'Gestão',
            corPrincipal: '#FF6A38',
            contorno: 'inset 0px 0px 10px 2px #FF6A38',
            borda: '.22rem solid #FF6A38'
        }
    ];
    return(
       <>
        <Banner />
        {categorias.map(categoria => <Categoria key={categoria.nome} nome={categoria.nome} corPrincipal={categoria.corPrincipal} contorno={categoria.contorno} borda={categoria.borda}/>)}
       </>
    )
}

export default Inicio;
