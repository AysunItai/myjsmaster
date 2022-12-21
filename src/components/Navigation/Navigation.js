import React from 'react';
import Logo from '../Logo/Logo';
import bg from './bg.png';
import './Navigation.css'

const Navigation = ({onRouteChange,isSignedIn}) =>{
    console.log(onRouteChange)
        
        if(isSignedIn){
            return(
           <nav style={{display:'flex ', alignItems:'center',justifyContent:'space-around',color:'white',background:`url(${bg}) center`,padding:'5px'}}>
            <Logo onRouteChange={onRouteChange}/>
             <div style={{display:'flex ', alignItems:'center'}}>
            <p onClick={()=>onRouteChange('home')} className='signout-p f3 link dim white underline pa3 pointer'>Sign Out</p>
           </div>
           </nav>
            )

        }else{
            return(
                

            <nav style={{display:'flex ', alignItems:'center',justifyContent:'space-around',color:'white',background:`url(${bg}) center`,padding:'5px'}}>
            <Logo onRouteChange={onRouteChange}/>
            <div style={{display:'flex ', alignItems:'center'}}>
            <p  onClick={()=>onRouteChange('signin')}  className='signin-p f3 link dim white underline pa3 pointer'>Sign In</p>
            <p  onClick={()=>onRouteChange('register')} className='register-p f3 link dim white underline pa3 pointer'>Register</p>
           </div>
           </nav>
           
            )

        }
        
    
}
export default Navigation;