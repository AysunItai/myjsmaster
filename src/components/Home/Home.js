import React from 'react';
import hero from './hero.jpg';
import Typed from 'react-typed';
import './Home.css';



const Home = (props) =>{
    //https://www.youtube.com/watch?v=1rTaNzjGOek
    
    return (
        <div style={{display:'flex',justifyContent:'center',height:'80vh',paddingLeft:'3rem',paddingRight:'3rem',gap:'5rem'}}>
            <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}} className="left">
                <h1 style={{color:'white',fontSize:'34px'}}>WELCOME TO MYJSMASTER....</h1>
                <h3 style={{color:'white',fontSize:'34px'}}>Get Your Free Web Developer Road Maps Now!</h3>
                
               
                    
                
                
                <button className="glow-on-hover"  onClick={()=>props.onRouteChange('register')}>REGISTER</button>
            </div>
            <div style={{display:'flex',alignItems:'center',position:'relative'}} className="right">
                <img style={{boxShadow:'rgba(0, 60, 230, 0.25) 0px 54px 55px, rgba(0, 60, 230, 0.12) 0px -12px 30px, rgba(0, 60, 230, 0.12) 0px 4px 6px, rgba(0, 60, 230, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',height:'90%',width:'100%',objectFit:'cover',borderRadius:'40px'}}src={hero}/>
                <p style={{fontSize:'25px',top:'50%',left:'50%',transform: 'translate(-50%,-50%)',position:'absolute'}}>
                        <Typed
                    strings={['Do you want to become a Web Developer?',
                    "But you don't know where to start from?",
                "You can download my free ebooks...",
                "Basic HTML, CSS and JavaScript",
            "Just Register! Good Luck With Your Journey!!!" ]}
                    typeSpeed={60}
                    backSpeed={50}
                    loop
                />
                
                   
                

                    </p>
            </div>

        </div>
        
        
    );
}
export default Home;