import React from 'react'
import Nav from '../Components/Nav/Nav'
import Adder from '../Components/Adder/Adder'
import Who from '../Components/Who/Who'
import ColorChanger from '../Components/ColorChanger/ColorChanger'
import { useState } from 'react'
import Recipes from '../Components/Recipes/Recipes'
const Home = () => {

const[section,setSection] = useState( <div></div>)
  return (
    <div>
      <button onClick={ () => setSection( <Nav></Nav>)}>Show NavBar</button>
      <button onClick={() => setSection( <Adder></Adder>)}>Show Molly</button>
      <button onClick={() => setSection(<ColorChanger></ColorChanger>)}>Show Color Changer</button>
      <button onClick={() => setSection( <Recipes></Recipes>)}>Recipes</button>
    {section}
    </div>
  )


}


export default Home