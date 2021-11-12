import React from 'react';

import './style.css';
import { Link  } from 'react-router-dom';

export function nDoctors(avatar, name, comment, rating, description, setCheckCrm, crm){
    return(
        <div className='all-comment'>
            <div className='img-avatar'>
                <img src={!! avatar ? avatar : null} className='img' alt='avatar'></img>
            </div>
            <div className='all-text'>
                <div className='text-name'>
                    <Link 
                        to='/doctors'
                        onClick={() => {setCheckCrm(crm)}}
                        className='link-name-doctor'
                    >
                        {name}
                    </Link>  

                    {!! rating ?  rating : null}
                    
                </div>
                <p style={{padding: '5px', fontSize: '14px', margin: '0'}}>{comment}</p> 
                {!! description ? (<p style={{fontSize: '12px', padding: '5px', fontWeight: 'lighter', color: 'rgba(0,0,0,0.7)', margin: '0'}}>{description}</p>) : null}
            </div>
        </div>
    )
}