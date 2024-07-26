import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import ContextProvider from './context/MeshContext.jsx';
import  { BrowserRouter as Router} from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  

 <ContextProvider>
  <Router>
    <App />
    </Router>
    </ContextProvider>
  
)
