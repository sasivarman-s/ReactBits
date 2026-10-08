import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Particles from './Particles'






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="bg-black" style={{ width: '100%', height: '800px', position: 'relative' }}>
      <Particles
        particleColors={["#ffffff"]}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover
        alphaParticles={false}
        disableRotation={false}
        pixelRatio={1}
      />
    </div>
  </StrictMode>,
)
