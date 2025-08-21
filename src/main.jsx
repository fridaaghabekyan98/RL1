import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {navMenuData} from "./data.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App nav={navMenuData}/>
  </StrictMode>,
)
