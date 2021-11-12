import React from 'react';

import { Link  } from 'react-router-dom';
import Logo from '../../assets/doctoralia-logo.png';
import './style.css'

export const Header = () => {
    return ( 
        <>
            <header className='app-header'>
                <div className='app-header-container'>
                    <div className='app-header-container-logo'>
                        <img src={ Logo } className='app-header-logo' alt='doctoralia-logo'></img>
                        <h1>Doctoralia</h1>
                    </div>
                    <div className='app-container-others'>
                        <Link to='/doctors' className='app-header-container-others-options' style={{backgroundColor: '#04A58D', padding: '10px'}}>Especialistas</Link>
                        <Link to='/' className='app-header-container-others-options' style={{padding: '10px'}}>Exames</Link>
                        <Link to='/' className='app-header-container-others-options'>Segurança de dados</Link>
                        <Link to='/' className='app-header-container-others-options'>Pergunte ao especialista</Link>
                        <Link to='/' className='app-header-container-others-options'>
                            Inscrever-se
                        </Link>
                        <Link to='/' className='app-header-container-others-options'>Entrar</Link>
                        <button className='app-header-button'>Você é Profissional da Saúde?</button>
                    </div>
                </div>
                
            </header>
        </>
     );
}
 