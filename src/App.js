import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo.js'
import Download from './components/Download/Download';
import Signin from './components/Signin/Signin.js';
import Register from './components/Register/Register.js';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      route:'signin',
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
     <Logo/>
     {route==='download' ? <Download/>
     :(
      route==='signin' ?
      <Signin onRouteChange={this.onRouteChange}/> 
      :
      <Register onRouteChange={this.onRouteChange}/>

     )
       }
     
    </div>
  );
  }
}

export default App;
