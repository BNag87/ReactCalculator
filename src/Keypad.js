import React from 'react';
import "./Keypad.css"

function Keypad(props) 
    {
        return(
            <div className="Keypad">
                {props.children}
            </div>
        )
    }

    export default Keypad;