import React from 'react'
import './App.css'
import logo from './assets/logo.svg';
import paw from './assets/persona.svg';
import FormUpload from './components/FormUpload/FormUpload.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h2>Imaging Diagnosis of Pneumonia</h2>
        <img src={logo} className="App-logo" alt="logo"/> 
      </header>
      <body className="App-body">
        <h3>Upload a X-ray chest imagen to diagnose pneumonia</h3>
        <FormUpload />
        </body>
        <footer className="App-footer">
        <img src={paw} className="App-logo2" alt="logo"/> 
      <h5>Autor: Byron Jimenez Borja</h5>
    </footer>
    </div>
  
   
  );
  
    
}
export default App;
