import React from 'react';

export function footerComponent(title, text, sideimage){
    return(
        <div className = 'content-footer-box'>
            <div className='top-side-footer'>
                <h4 style={{
                    margin: '0px 0px 10px 0px', 
                    fontWeight: 'normal', 
                    color: '#000000', 
                    fontSize: '16px', 
                    fontFamily: 'Lato', 
                    display:'flex', 
                    alignItems:'center'}}>
                    {title} {sideimage}
                </h4>
                {text.map((text) => (
                    <p style={{
                        margin:'5px 0px 5px 0px', 
                        opacity: '0.9', 
                        fontSize: '15px', 
                        textAlign:'start', 
                        color:'#98A1AB', 
                        fontFamily:'Lato', 
                        textDecoration:'none', 
                        cursor: 'pointer'}}>
                        {text}
                    </p>
                ))}

            </div>

        </div>
    )
}