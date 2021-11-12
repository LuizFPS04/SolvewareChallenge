import React from 'react';

import './style.css';
import { footerComponent } from './footerComponents/index';
import Logo from '../../assets/doctoralia-logo-blue.png';
import { Facebook, Instagram, LinkedIn, PhoneIphone } from '@material-ui/icons';


export function Footer(){
    return ( 
        <>
            <div className='app-footer-container'>
                <div className='app-footer-serivces'>
                    {footerComponent(
                        'Serviço',
                        [
                            'Privacidade e cookies', 
                            'Quem Somos', 
                            'Contato', 
                            'Vagas', 
                            'Termos e Condições', 
                            'Imprensa'
                        ]
                    )}
                </div>
                
                <div className='app-footer-pacients'> 
                    {footerComponent(
                        'Pacientes',
                        [
                            'Especialistas', 
                            'Clínicas e Hospitais', 
                            'Pergunte ao especialista', 
                            'Medicamentos', 
                            'Serviços', 
                            'Perguntas frequentes', 
                            'Aplicações móveis', 
                            'Diagnóstico por imagem'
                        ]
                    )}
                </div>

                <div className='app-footer-health'> 
                    {footerComponent(
                        'Especialistas da saúde',
                        [
                            'Blog', 
                            'Counteúdos para especialistas', 
                            'Serviços', 
                            'Biblioteca Virtual', 
                            'Widget para site', 
                            'Conteúdos para clínicas', 
                            'Termos de uso do perfil profissional', 
                            'Alerta de segurança',
                            'Teleconsulta'
                        ]
                    )}
                </div>
                
                <div className='app-footer-links'>
                    {footerComponent(
                        <img src={Logo} style={{width:'24px', height:'24px'}} alt='logo'/>,
                        [
                            'Doctoralia Brasil Serviços Online e Software Ltda', 
                            'Rua Visconde do Rio Branco, 1488 - 2º andar - Batel', 
                            '80420-210 Curitiba (Paraná), Brasil'
                        ],
                        <h4 style={{margin: '0px 0px 0px 5px', color: '#01C4A6', fontSize: '24px'}}>Doctoralia</h4>
                    )} 

                    <div> 
                        <a href='https://www.facebook.com/doctoralia.br/'><Facebook style={{color: '#98a1ab', fontSize: 30, marginRight: '5px'}}/></a>
                        <a href='https://www.instagram.com/doctoralia_br/'><Instagram style={{color: '#98a1ab', fontSize: 30, marginRight: '5px'}}/></a>
                        <a href='https://www.linkedin.com/company/doctoralia-brasil/'><LinkedIn style={{color: '#98a1ab', fontSize: 30, marginRight: '5px'}}/></a>
                        <a href='https://www.facebook.com/doctoralia.br/'><PhoneIphone style={{color: '#98a1ab', fontSize: 30, marginRight: '5px'}}/></a>
                    </div>
                </div>
                
            </div>
            
            <footer className='footer'>
                <p>
                    www.doctoralia.com.br © 2021 - Agende agora sua consulta
                </p>
            </footer>
        </>
     );
}