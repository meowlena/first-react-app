import React from "react";

function Parent (props) 
{
    return (
        <>
            <h2 className="Title">Com filhos:</h2>
            {/** props.children refers to the things that are inside the tag Parent */}
            <div className="Content">
            {props.children}
            </div>
        </>
    )
}

export default Parent;