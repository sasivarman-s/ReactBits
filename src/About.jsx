import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

function About(){
    return(
        <>
        <div className="max-w-[800px] mx-auto bg-gray-400">
        <h1 className="text-center text-4xl bg-green-500 text-white p-3 rounded-lg m-2">Hello world</h1>
        </div>
        </>
    )
}

export default About;