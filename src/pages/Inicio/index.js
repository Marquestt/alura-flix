import Card from 'components/Card';
import styles from './Inicio.module.css';
import Banner from 'components/Banner';
import Categoria from 'components/Categoria';
import ModalEditar from 'components/ModalEditar';
import { useState } from 'react';

const Inicio = () => {
    const categorias = [
        {   
            id: '1',
            nome: 'Front end',
            corPrincipal: '#6BD1FF',
            contorno: 'inset 0px 0px 10px 2px #6BD1FF',
            borda: '.22rem solid #68D1FF'
        },
        {
            id: '2',
            nome: 'Back end',
            corPrincipal: '#00C86F',
            contorno: 'inset 0px 0px 10px 2px #00C86F',
            borda: '.22rem solid #00C86F'
        },
        {
            id: '3',
            nome: 'Mobile',
            corPrincipal: '#FFBA05',
            contorno: 'inset 0px 0px 10px 2px #FFBA05',
            borda: '.22rem solid #FFB405'
        },
        {
            id: '4',
            nome: 'Inovação',
            corPrincipal: '#FB24FF',
            contorno: 'inset 0px 0px 10px 2px #FB24FF',
            borda: '.22rem solid #FB24FF'
        },
        {
            id: '5',
            nome: 'Gestão',
            corPrincipal: '#FF6A38',
            contorno: 'inset 0px 0px 10px 2px #FF6A38',
            borda: '.22rem solid #FF6A38'
        }
    ];

    const [videoAtual, setVideoAtual] = useState(null);
    const [mostrarEditar, setMostrarEditar] = useState(false);

    

    return(
       <>
        <Banner />
        {categorias.map(categoria => <Categoria key={categoria.nome} nome={categoria.nome} corPrincipal={categoria.corPrincipal} contorno={categoria.contorno} borda={categoria.borda}><Card key={video.id} video={video} aoEditar={}/></Categoria>)}
        {videoAtual && 
            <ModalEditar show={mostrarEditar} aoFechar={() => {setMostrarEditar(false); setVideoAtual(null);}} video={videoAtual} aoAlterar={(e) => {const { nome, value} = e.target; setVideoAtual({...videoAtual, [nome]: value})}} aoEnviar={(e) => {e.preventDefault(); }}/>
        }
       </>
    )
}

export default Inicio;
