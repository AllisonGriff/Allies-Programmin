import React from 'react'
import { useState } from 'react'
const ColorChanger = () => {


    const [color, setColor] = useState("purple")
    const [divSize, setDivSize] = useState("300px")
  return (
    <div style={{ backgroundColor:color, transition: "3s", height: divSize}}>

        <h1>The current color is {color}</h1>
        {/* useState is a react hook that lets you set the state variable to your component. In the example above, color is the state, setColor is how you change the state. The function works like-- color starts inially as "purple". The function that is written below starts with() ** this is just pulling the intial color/purple** the => is telling the code to run this line of code. setColor changes the input to the redefined variable value. onClick is the built in function of the button*/}

        <button onClick={()=>{setColor("red")}}>Red</button>
        <button onClick={()=>{setColor("blue")}}>Blue</button>
        <button onClick={()=>{setColor ("green")}}>Green</button>
<br></br>
    <h2> Size does matter. Currently the box size is {divSize}</h2>
        <button onClick= {()=>{setDivSize("110px")}}>small</button>
        <button onClick= {() => {setDivSize("300px")}}>Medium</button>
        <button onClick= {() => {setDivSize("600px")}}>Large</button>
        </div>
  )
}

export default ColorChanger