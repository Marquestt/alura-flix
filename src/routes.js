import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Cabecalho from 'components/Cabecalho';
import Rodape from 'components/Rodape';
import NovoVideo from 'pages/NovoVideo';

function AppRoutes() {
    return(
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path='/' element={<Inicio/>}></Route>
                <Route path='/novo-video' element={<NovoVideo/>}></Route>
            </Routes>
            <Rodape />
        </BrowserRouter>
    )
}

export default AppRoutes;
