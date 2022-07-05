import React from "react";
import './Card.css'

/** How to implement style in a component */

function Card(props) {
    return (
        <div className="Card Content">
            <p>{props.children}</p>
        </div>
    )
}

export default Card;