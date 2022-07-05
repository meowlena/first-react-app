import React from "react";

function UsingParameter (props) 
{
    return(
        <div className="Content">
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </div>
    )
}

export default UsingParameter;