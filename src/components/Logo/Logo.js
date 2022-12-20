import React from 'react';
import Navigation from '../Navigation/Navigation'
import myjsmasterlogo from './myjsmasterlogo.svg';

const Logo = (props) =>{
    console.log(props)
    return (
        <h1 style={{cursor:'pointer',fontSize:'30px'}} onClick={()=>props.onRouteChange('home')} >
            MYJSMASTER
        </h1>

        
        
    );
}
export default Logo;