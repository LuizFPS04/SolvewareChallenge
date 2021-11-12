import React from 'react';

import { Rating } from '@material-ui/core';
import { Note, Room, Healing, Info, LocalAtm, School, Group } from '@material-ui/icons';

import './style.css'
import { doctors } from '../../services/doctor-mock';
import { nDoctors } from '../../components/Doctors';

export const Doctors = ({selectSpeciality, selectCity, checkCrm, setCheckCrm}) => {
    return (
        checkCrm === ''
        ?
            selectCity === '' || selectSpeciality === '' ?
                (
                    <div className='app-doctor-container'>
                        <h2>{selectSpeciality} {selectCity}</h2>
                        <div className='app-doctor-container-result'>
                            <div className='all'>
                            {doctors.map((doctor) => (
                                (doctor.speciality === selectSpeciality || doctor.city === selectCity)
                                &&
                                <>
                                        <div className='left-result'>
                                            <h4>
                                                {
                                                    nDoctors(
                                                        doctor.photo,
                                                        doctor.name,
                                                        doctor.speciality,
                                                        <Rating sx={{fontSize: '20px'}} readOnly value='5' precision={0.5} style={{color: '#01c4a6', marginLeft: '40px'}}/>,
                                                        doctor.contact,
                                                        setCheckCrm,
                                                        doctor.crm
                                                    )
                                                }
                                            </h4>
                                            <div className='result-bottom'>
                                                <h4>
                                                    <Note className='icon-iten' style={{color: '#BEBEBE', alignItems: 'center'}}/>
                                                    CRM: {(doctor.crm)}
                                                </h4>
                                                <p>
                                                    <Room className='icon-iten' style={{color: '#BEBEBE', alignItems: 'center'}}/>
                                                    <b>Endereço: </b> <i>{(doctor.addres)}, {(doctor.city)}</i>
                                                </p>
                                            </div>
                                
                                        </div>
                                </>
                            ))}
                            </div>
                            <div className='map'>
                                <iframe 
                                    title='brazil-map'
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15776131.713631691!2d-44.36179123094367!3d-15.125652629652688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1636673237800!5m2!1spt-BR!2sbr'
                                    width='350' 
                                    height='450'
                                    allowfullscreen=''
                                    loading='lazy'>
                                </iframe>
                            </div>
                        </div>
                    </div>
                
                )
            :
                (
                    <div className='app-doctor-container'>
                        <h2>{selectSpeciality} - {selectCity}</h2>
                        <div className='app-doctor-container-result'>
                            <div className='all'>
                            {doctors.map((doctor) => (
                                (doctor.speciality === selectSpeciality && doctor.city === selectCity)
                                &&
                                <>
                                        <div className='left-result'>
                                            <h4>
                                                {
                                                    nDoctors(
                                                        doctor.photo,
                                                        doctor.name,
                                                        doctor.speciality,
                                                        <Rating sx={{fontSize: '20px'}} readOnly value='5' precision={0.5} style={{color: '#01c4a6', marginLeft: '40px'}}/>,
                                                        doctor.contact,
                                                        setCheckCrm,
                                                        doctor.crm
                                                    )
                                                }
                                            </h4>
                                            <div className='result-bottom'>
                                                <h4>
                                                    <Note className='icon-iten' style={{color: '#BEBEBE', alignItems: 'center'}}/>
                                                    CRM: {(doctor.crm)}
                                                </h4>
                                                <p>
                                                    <Room className='icon-iten' style={{color: '#BEBEBE', alignItems: 'center'}}/>
                                                    <b>Endereço: </b> <i>{(doctor.addres)}, {(doctor.city)}</i>
                                                </p>
                                            </div>
                                
                                        </div>
                                </>
                            ))}
                            </div>
                            <div className='map'>
                                <iframe 
                                    title='brazil-map'
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15776131.713631691!2d-44.36179123094367!3d-15.125652629652688!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9c59c7ebcc28cf%3A0x295a1506f2293e63!2sBrasil!5e0!3m2!1spt-BR!2sbr!4v1636673237800!5m2!1spt-BR!2sbr'
                                    width='350' 
                                    height='450'
                                    allowfullscreen=''
                                    loading='lazy'>
                                </iframe>
                            </div>
                        </div>
                    </div>
                )
        :
            <div className='app-doctor-container'>
                <h2>{selectSpeciality} - {selectCity}</h2>
                <div className='app-doctor-container-result'>
                    {doctors.map((doctor) => (
                        (doctor.crm === checkCrm)
                        &&
                        <>
                            <div className='all-check'>
                                <div className='left-result-check'>
                                    <h4>
                                        {
                                            nDoctors(
                                                doctor.photo,
                                                doctor.name,
                                                doctor.speciality,
                                                <Rating sx={{fontSize: '20px'}} readOnly value='5' precision={0.5} style={{color: '#01c4a6', marginLeft: '40px'}}/>,
                                                doctor.contact,
                                                setCheckCrm,
                                                doctor.crm
                                            )
                                        }
                                    </h4>
                                    <div className='result-bottom'>
                                        <h4>
                                            <Note className='icon-iten' style={{color: '#BEBEBE', alignItems: 'center'}}/>
                                            CRM: {(doctor.crm)}
                                        </h4>
                                        <p>
                                            <Room className='icon-iten' style={{color: '#BEBEBE', alignItems: 'center'}}/>
                                            <b>Endereço: </b> <i>{(doctor.addres)}, {(doctor.city)}</i>
                                        </p>   
                                        <p>
                                            <Info className='icon-iten' style={{color: '#BEBEBE', alignItems: 'center'}}/>
                                            <b>Atende: </b> <i>{(doctor.about)}</i>
                                        </p>
                                        <p>
                                            <LocalAtm className='icon-iten' style={{color: '#BEBEBE', alignItems: 'center'}}/>
                                            <b><i>{(doctor.pay)}</i></b>
                                        </p>
                                        <p>
                                            <School className='icon-iten' style={{color: '#BEBEBE', alignItems: 'center'}}/>
                                            <b><i>{(doctor.formation)}</i></b>
                                        </p>
                                    </div>
                                
                                </div>
                                <div className='right-result-check'>
                                    <div className='top-right-result'>
                                        <h3>Agendar Consulta</h3>
                                    </div>
                                    <div className='rest'>
                                        <p>
                                            <Room className='icon-iten' style={{color: '#BEBEBE', alignItems: 'center'}}/>
                                            <b>Endereço: </b> <i>{(doctor.addres)}, {(doctor.city)}</i>
                                        </p>
                                        <p>
                                            <Healing className='icon-iten' style={{color: '#BEBEBE', alignItems: 'center'}}/>
                                            <b>Tipo de visita: </b> <i>Consulta {(doctor.speciality)}</i>
                                        </p>
                                        <h4 style={{borderTop: 'solid 1px #008874', marginTop: '5px'}}>
                                            <Group className='icon-iten' style={{color: '#BEBEBE', alignItems: 'center'}}/>Opiniões: 
                                        </h4>
                                        <p>
                                            <i>{(doctor.opinion)}</i>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
    )
}
    