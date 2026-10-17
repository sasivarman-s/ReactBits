import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
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
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/ama" element={<Ama />} />
        <Route path="/contact" element={<Navigate to="/ama" replace />} />
        <Route path="/index.html" element={<Navigate to="/" replace />} />
        <Route path="/about.html" element={<Navigate to="/about" replace />} />
        <Route path="/projects.html" element={<Navigate to="/projects" replace />} />
        <Route path="/resume.html" element={<Navigate to="/resume" replace />} />
        <Route path="/tools.html" element={<Navigate to="/tools" replace />} />
        <Route path="/ama.html" element={<Navigate to="/ama" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
