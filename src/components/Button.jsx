import React from "react";
import './Button.css'

// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    return(
        <button 
            onClick={e => props.click && props.click(props.label)}
            className={`
                button
                ${props.double ? 'double' : ''}
                ${props.triple ? 'triple' : ''}
                ${props.operation ? 'operation' : ''}
            
            `}>
            {props.label}
        </button>
    
    )
}
    
