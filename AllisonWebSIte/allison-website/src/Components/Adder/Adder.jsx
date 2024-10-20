import React, { useState } from 'react'

const Adder = () => {
    const [state, setState] = useState(0)
    function add(){
setState(state +1)
    }
    function sub(){
        setState(state -1)
    }
const [mollySays,setMollySays]= useState(" ")
    function sheSaid(){
        setMollySays(mollySays +" bark" )
    }
  return (
    <div>
        <h1>Our number is: {state}</h1>
        <button onClick={add}>Click Me</button>
        <button onClick={sub}>Too Much</button>


<p>Molly Says: {mollySays}</p>
        <button onClick={sheSaid}>Talk to Molly</button>
    </div>
  )
}


export default Adder