import React from 'react';
import './Logo.css'
const Logo = (props) =>{
    console.log(props)
    return (
        <h1 className='logo-h1' style={{cursor:'pointer',fontSize:'30px'}} onClick={()=>props.onRouteChange('home')} >
            MYJSMASTER
        </h1>

        
        
    );
}
export default Logo;