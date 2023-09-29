import React, { useState } from 'react'
import './Toggle.scss';

function Toggle() {
  const [on,setOn] = useState(true)
  console.log(on);
  return (
    <div>      
      <div className={`toggle ${on ? 'active' : ''}`} onClick={()=>setOn(!on)}>
        {/* <h1>Toggle {on ? 'ON' : 'OFF'}</h1> */}
        <div className={`spinner ${on ? 'active' : ''}`}></div>
      </div>
      {/* <h1>
          {on ? 'ON' : 'OFF'}
      </h1> */}
      {/* <div className="toggle-control">  
        <div className="toggle-on" onClick={()=>setOn(true)}>On</div>
        <div className="toggle-off" onClick={()=>setOn(false)}>Off</div>
      </div> */}

    </div>
  )
}

export default Toggle
