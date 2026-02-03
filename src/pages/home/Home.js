import React, { useState } from 'react'
import Spline from '@splinetool/react-spline';
import './Home.css'

function Home() {

    const [consoleHover, setConsoleHover] = useState(false);

  return (
    <div className='home'>
      {
        window.screen.width < 400 ? <Spline scene="https://prod.spline.design/qwGgDWyFt2PTfF2F/scene.splinecode?v=4" /> : 
        <Spline style={{position: "absolute"}} scene="https://prod.spline.design/5JKZvXJq8yYHDh-o/scene.splinecode?v=14"/>

      }
        <button onClick={()=>{document.location.href="https://console.overseas.dev/"}} className='to-console' onMouseEnter={()=>setConsoleHover(true)} onMouseLeave={()=>setConsoleHover(false)} >{consoleHover ? "→" : "To Console"}</button>
        <h1 className='main-title typing gradient-text'>Overseas.</h1>
        <p className='description'>
            {"Microservices Management Platform. \
            \n- Create new ready to use microservices. \
            \n- Manage comunication between microservices. \
            \n- Visualize architecture clearly."}
        </p>
    </div>
  )
}

export default Home