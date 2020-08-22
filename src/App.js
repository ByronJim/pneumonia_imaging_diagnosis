import React from 'react'
import './App.css'
import logo from './logo.svg';
import FormUpload from './components/FormUpload/FormUpload.jsx'

function App() {
  return (
    <div className="App">
      <header className="App-header">
         <h1>Pneumonia Imaging Diagnosis</h1>
        <img src={logo} className="App-logo" alt="logo"/> 
      </header>
      <body className="App-body">
        <FormUpload />
        </body>
    </div>
   
  );
  
    
}
export default App;
