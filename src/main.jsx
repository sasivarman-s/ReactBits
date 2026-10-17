import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css';
import '../assets/WEB/css/satoshi.css'
import Index from './Index';
import About from './About';
import Projects from './Projects';
import Tools from './Tools';
import Ama from './Ama';
import Resume from './Resume';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>hello, world</h1>
    <Index/>
    <About/>
    <Projects/>
    <Resume/>
    <Tools/>
    <Ama/>
  </StrictMode>,
)
