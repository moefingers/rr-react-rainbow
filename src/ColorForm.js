import React, { useState } from 'react'

function ColorForm(props){
    let [input, setInput] = useState('')

    const handleSubmit = (e) => {
        // We still want to eliminate the default behavior of our form submittal
        e.preventDefault()
        // addColor, the function we just built, should be available within props.
        if (props.validateColor(input)) {
            props.addColor(input)
            e.target.reset()
        } else {
            alert('Please fix your input, ' + input + ' is not a valid color!')
        }
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                onChange={(e) => setInput(e.target.value)} />
                <button type="submit">Submit!</button>
            </form>
        </div>
    )
}


export default ColorForm