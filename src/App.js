import './App.css';

import ColorBlock from './ColorBlock';

import ColorForm from './ColorForm';

import React, { useState } from 'react'

function App(){
    let [colors, setColors] = useState(['violet', 'blue', 'lightblue', 'green', 'greenyellow', 'yellow', 'orange', 'red'])
    
    let elementsFromMappedColors = colors.map((color, i) => <ColorBlock  key={i} color={color} />)
    
    const validateColor = (color) => {
        const style = new Option().style;
        style.color = color;

        return (style.color == color) //returns true or false
    }


    const addColor = (newColor) => {
        setColors([...colors, newColor])
    }
    return (
        <div className="App">
          {elementsFromMappedColors}
          <ColorForm addColor = {addColor} validateColor = {validateColor}></ColorForm>
        </div>
    )
}

export default App;
