import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import { Fragment } from 'react';
import { AuthProvider } from '../Js/contexts/auth';
import useAuth from '../Js/hooks/useAuth';
const Private = ({Item}) => {
    const {logado} = useAuth();
    return logado > 0 ? <Item/> : <Login />;
};

function App () {
    return(
        <AuthProvider>
            <Router>
                <Fragment>  
                    <Routes>
                        <Route path='/' element={<Login/>}/>
                        <Route exact path='/cadastro' element={<Cadastro/>}/>
                        <Route exact path='/home' element={<Private Item={Home}/>}/>
                        <Route path='*' element={<Login/>}/>
                    </Routes>
                </Fragment>
            </Router>
        </AuthProvider>
        
    )
}
export default App