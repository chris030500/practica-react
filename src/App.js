import React, { useState } from 'react';
import './App.css';
import MaterialTable from 'material-table'
import GetAppIcon from '@material-ui/icons/GetApp';
import AddIcon from '@material-ui/icons/Add';
import Table from './Components/Table';
import LoginForm from './Components/Login'
import {Container, Button} from 'semantic-ui-react';

function App() {
  const [showLogin, setShowLogin]= useState(true);
    return(
        <Container fluid className="auth">

            <div className="container-form">
                {showLogin ? ( 
                <LoginForm/>
                ): (
                <Table setShowLogin={setShowLogin}/>
                )}
            </div>

            <div className="change-form">
                <p>
                    {showLogin ? (
                        <>
                        <br />
                        <Button type="button" className='btn-submit' onClick={()=> setShowLogin(!showLogin)}>Iniciar Sesion</Button>
                        </>
                    ): (
                        <>
                        <br />
                        <Button type="button" className='btn-submit' onClick={()=> setShowLogin(!showLogin)}>Login</Button>
                        </>
                    )}
                </p>
            </div>

        </Container>
    )
}

export default App;
