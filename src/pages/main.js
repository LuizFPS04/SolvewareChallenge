import React, { useState } from "react";
import './style.css';

import { Link } from "react-router-dom";
import { Button, Autocomplete, TextField, Rating } from "@material-ui/core";
import { Business, VideocamRounded, Search, LocalHospital, ArrowRight, EventAvailable, Schedule, ThumbUpAlt } from "@material-ui/icons";

import { Widgets } from '../components/Widgets/index';
import { nDoctors } from '../components/Doctors/index';

import { city } from '../services/city-mock';
import { speciality } from '../services/speciality-mock';

import avatar1 from '../assets/avatar-medico-1.png';
import avatar2 from '../assets/avatar-medico-2.png';
import avatar3 from '../assets/avatar-medico-3.png';
import avatar4 from '../assets/avatar-medico-4.png';
import avatar5 from '../assets/avatar-medico-5.png';

export const Main = ({selectCity, setSelectCity, selectSpeciality, setSelectSpeciality,setCheckCrm}) => {
    const [variant, setVariant] = useState('btn-local');

    return (
        <>
          {setCheckCrm('')}
          <div className='app-main-container'>
            <div className='app-main-container-text'>
              <h1 className='title-text'>Agende Agora Sua Consulta</h1>
              <h2 style={{ paddingTop: '5px', margin: '0' }}>
                Mais de 700 mil especialistas de saúde estão prontos para te ajudar
              </h2>
            </div>
            <div className='app-main-container-search'>
              <div className='types'>
                <div className='app-main-container-a'>
                  <Button
                    variant={variant === 'btn-local' ? 'contained' : 'outlined'}
                    style={{
                      marginRight: '10px',
                      height: '40px',
                      color: '#FDFDFD',
                      borderRadius: '20px'
                    }}
                    startIcon={<Business style={{color: '#FDFDFD'}}/>}
                    onClick={() => setVariant('btn-local')}
                  >
                    No local
                  </Button>
                  <Button
                    
                    variant={variant === 'btn-tele' ? 'contained' : 'outlined'}
                    style={{
                      marginRight: '10px',
                      height: '40px',
                      color: '#FDFDFD',
                      borderRadius: '20px'
                    }}
                    startIcon={<VideocamRounded style={{color: '#FDFDFD'}}/>}
                    onClick={() => setVariant('btn-tele')}
                  >
                    Teleconsulta
                  </Button>
                </div>
                <div className='app-main-container-autocomp'>
                  <Autocomplete
                    style={{ padding: '5px 5px 5px 0px'}}
                    mode=''
                    disablePortal
                    id='combo-box-demo'
                    options={speciality}
                    sx={{ width: '100%' }}
                    renderInput={(params) => (
                      <TextField
                        style={{ backgroundColor: 'ghostwhite', color: 'black' }}
                        {...params}
                        onClick={setSelectSpeciality(params.inputProps.value)}
                        label='nome, especialidade, serviço'
                      />
                    )}
                    />
    
                  {variant === 'btn-local' && (
                    <Autocomplete
                      style={{ padding: '5px 5px 5px 0px' }}
                      disablePortal
                      id='combo-box-demo'
                      options={city}
                      sx={{ width: '100%' }}
                      renderInput={(params) => (
                        <TextField
                          style={{ backgroundColor: 'ghostwhite', color: 'black' }}
                          {...params}
                          onClick={setSelectCity(params.inputProps.value)}
                          label='p. ex. Belo Horizonte'
                        />
                      )}
                    />
                  )}
    
                  <Link
                    to={
                      selectCity === '' && selectSpeciality === '' ? '/' : '/doctors'
                    }
                    style={{
                      textDecoration: 'none',
                      cursor:
                        selectCity === '' && selectSpeciality === ''
                          ? 'default'
                          : 'pointer',
                    }}
                  >
                    <Button
                      variant='contained'
                      disabled={selectCity === '' && selectSpeciality === ''}
                      style={{ height: '60px', marginLeft: "10px", width: '140px' }}
                      startIcon={<Search />}
                    >
                      Pesquisar
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='app-main-container-help'>
              <div className='app-main-container-card1'>
                <LocalHospital style={{ paddingLeft: '15px' }} />
                <p style={{ paddingLeft: '5px', fontWeight: 'bold' }}>
                  Cuide de sua saúde durante a pandemia
                </p>
              </div>
              <div className='app-main-container-card2'>
                <p className='text'>
                  Atendimento médico seguro e sem filas
                </p>
                <p className='help'>
                  <Link to='/'>
                    Receba a ajuda que precisa 
                  </Link>
                  <ArrowRight style={{color: '#9A41EC'}}/>
                </p>
              </div>
            </div>
          </div>
          <div className='geral-main-bottom'>
            <div className='app-main-container-list'>
              <div className='sides'>
                  <ul>
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    Ginecologista
                    </Link>
                    <li />
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    Psiquiatra
                    </Link>
                    <li />
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    Psicólogo
                    </Link>
                    <li />
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    Dermatologista
                    </Link>
                    <li />
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    Ortopedista
                    </Link>
                    <li />
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    Endocrinologista
                    </Link>
                    <li />
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    Oftalmologista
                    </Link>
                    <li />
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    {' '}
                    Cardiologista
                    </Link>
                  </ul>
                
              </div>
              <div className='sides'>
                  <ul>
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    Dentista
                    </Link>
                    <li />
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    Neurologista
                    </Link>
                    <li />
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    Nutricionista
                    </Link>
                    <li />
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    Urologista
                    </Link>
                    <li />
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    Homeopata
                    </Link>
                    <li />
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    Educador Físico
                    </Link>
                    <li />
                    <Link to='/' className='list-options' style={{color: '#1B2734', textDecoration: 'none'}}>
                    Radiologista
                    </Link>
                  </ul>
              </div>
            </div>
            <div className='app-main-container-widgets'>
              {Widgets(
                <Search style={{ color: '#01C4A6', fontSize: 35 }} />,
                'Encontre Especialistas',
                'Busque por especialistas de saúde em sua região. Filtre por planos de saúde, tratamentos ou disponibilidade.'
              )}
              {Widgets(
                <EventAvailable style={{ color: '#01C4A6', fontSize: 35 }} />,
                'Marque Consultas',
                'Escolha o profissional, dia e horário que desejar, agendando sua consulta em até dois minutos. Sem complicação.'
              )}
              {Widgets(
                <Schedule style={{ color: '#01C4A6', fontSize: 35 }} />,
                'Receba lembretes',
                'Confirmamos tudo imediatamente pelo email informado e, antes da consulta, um lembrete será enviado via celular.'
              )}
              {Widgets(
                <ThumbUpAlt style={{ color: '#01C4A6', fontSize: 35 }} />,
                'Avalie o serviço',
                'Após a consulta você poderá deixar sua opinião sobre o serviço. Tudo isso de forma gratuita, simples e rápida.'
              )}
            </div>
            <div className='app-main-container-comments'>
              <div className='left-comment'>
                <h3>Respostas de especialistas</h3>
                <p style={{ fontSize: '15px' }}>
                Eu tomei os 2 comprimidos de fluconazol eu posso beber?
                Já não sinto mais coceira nem nada da candidíase
                </p>
                <p
                  style={{
                    color: '#C9C9C9',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  RESPOSTA DO ESPECIALISTA DA SAÚDE:{' '}
                </p>
                {nDoctors(
                  avatar1,
                  'Dr. Fabricio Benvenutti',
                  'Quanto à bebida, sem problemas. Vale lembrar que é importante as medidas de cuidados após tratamento da candidiase, para que não recidive. Procure no meu canal no YouTube e nas minhas redes sociais sobre esse assunto, que será bastante esclarecedor.'
                )}
                <p style={{ fontSize: '15px' }}>
                  Quais são os cuidados do pós operatório de uma fístula Liquorica
                  pelo nariz, e quanto tempo dura a recuperação?
                </p>
                <p
                  style={{
                    color: '#C9C9C9',
                    fontSize: '12px',
                    fontWeight: 'bold',
                  }}
                >
                  RESPOSTA DO ESPECIALISTA DA SAÚDE:{' '}
                </p>
                {nDoctors(
                  avatar2,
                  'Dr. Adolpho Baamonde',
                  'Não há problema em ingerir ovos nessa fase do pós operatório.'
                )}
              </div>

              <div className='right-comment'>
                <h3>Opiniões mais recentes</h3>
                {nDoctors(
                  avatar3,
                  'Monica Paes Vieira Martins',
                  'Sempre maravilhosa no atendimento. Prestimosa, atenciosa, observadora e detalhista nas instruções ao paciente.',
                  <Rating name='read-only' value={5} readOnly style={{color: '#01c4a6'}}/>,
                  'Pedro Landim'
                )}
                {nDoctors(
                  avatar4,
                  'Felipe Cerqueira Matheus',
                  'Excelente médico e ser humano maravilhoso. Foi brilhante no tratamento da minha filha. Posso afirmar que sua atenção e cuidado foi fundamental. Gratidão.',
                  <Rating name='read-only' value={5} readOnly style={{color: '#01c4a6'}}/>,
                  'Eunice Pessanha'
                )}
                {nDoctors(
                  avatar5,
                  'Claudio Lerer',
                  'Muito atencioso, ágil e educado. Transmite confiança e segurança. Fui atendida no horário e a secretária tb é muito simpática e gentil.',
                  <Rating name='read-only' value={5} readOnly style={{color: '#01c4a6'}}/>,
                  'Anna Christina Moura'
                )}
              </div>
            </div>
          </div>
        </>
      );
    };