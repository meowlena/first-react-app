/* eslint-disable import/no-anonymous-default-export */
import React from "react";

function First() {
    return (
        <div>
            <p><i>abuble</i></p>
        </div>
    );
}

export default First;
/*
another way to do the same thing (arrow):

export default () => 
    <div>
        <p><i>abuble</i></p>
    </div>
*/