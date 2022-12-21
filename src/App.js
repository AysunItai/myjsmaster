import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo.js'
import Download from './components/Download/Download';
import Signin from './components/Signin/Signin.js';
import Register from './components/Register/Register.js';
import Home from './components/Home/Home';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      route:'home',
      isSignedIn:false
    }
  }
  
  onRouteChange=(route)=>{
    if(route==='signout'){
      this.setState({isSignedIn:false})
    }else if(route==='download'){
      this.setState({isSignedIn:true})
    
  }
    this.setState({route:route});
  }
  render(){
    const {isSignedIn,route } = this.state
  return (
    <div className="App">
     <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange}/>
     
     
     
     {route==='home' ? <Home onRouteChange={this.onRouteChange}/>
     :(
      route==='signin' ?
      <Signin onRouteChange={this.onRouteChange}/> 
      :(route==='register'?
      <Register onRouteChange={this.onRouteChange}/>
      :
        
        <Download/>
      
        
      )

     )
       }
     
    </div>
  );
  }
}

export default App;
