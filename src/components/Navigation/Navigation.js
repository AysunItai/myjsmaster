import React from 'react';
import Logo from '../Logo/Logo';
import bg from './bg.png';

const Navigation = ({onRouteChange,isSignedIn}) =>{
    console.log(onRouteChange)
        
        if(isSignedIn){
            return(
           <nav style={{display:'flex ', alignItems:'center',justifyContent:'space-around',color:'white',background:`url(${bg}) center`,padding:'5px'}}>
            <Logo onRouteChange={onRouteChange}/>
             <div style={{display:'flex ', alignItems:'center'}}>
            <p onClick={()=>onRouteChange('signout')} className='f3 link dim black underline pa3 pointer'>Sign Out</p>
           </div>
           </nav>
            )

        }else{
            return(
                

            <nav style={{display:'flex ', alignItems:'center',justifyContent:'space-around',color:'white',background:`url(${bg}) center`,padding:'5px'}}>
            <Logo onRouteChange={onRouteChange}/>
            <div style={{display:'flex ', alignItems:'center'}}>
            <p onClick={()=>onRouteChange('signin')}  className='f3 link dim white underline pa3 pointer'>Sign In</p>
            <p onClick={()=>onRouteChange('register')} className='f3 link dim white underline pa3 pointer'>Register</p>
           </div>
           </nav>
           
            )

        }
        
    
}
export default Navigation;