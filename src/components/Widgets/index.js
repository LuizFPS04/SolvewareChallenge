import React from 'react';

import './style.css';

export function Widgets (img ,title, text) {
    return ( 
        <>
            <div className = 'app-widget-container'>
                <div className='top-widget'>
                    <>
                        {img} 
                    </>
                    <>
                        {title}
                    </>
                </div>
                <p className='bottom-widget'>{text}</p>
            </div>
        </>
     );
}