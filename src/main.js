import React, {useRef} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import Header from "./components/Header.js";



ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    {/* <div className='homeOverlay'></div> */}
    <Header/>
    <App />
  </React.StrictMode>,
)
