import React from 'react'
import './App.css'
import logo from './assets/logo.svg';
import FormUpload from './components/FormUpload/FormUpload.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h1>Imaging Diagnosis of Pneumonia</h1>
        <img src={logo} className="App-logo" alt="logo"/> 
      </header>
      <body className="App-body">
        <FormUpload />
        </body>
        <footer className="App-footer">
      <h5>Autor: Byron Jimenez Borja</h5>
    </footer>
    </div>
  
   
  );
  
    
}
export default App;
