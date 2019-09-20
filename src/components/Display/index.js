import React from "react";

const Display = props =>  (
    <div className="card-title">
        <p>{props.display.history}</p>
        <p>{props.display.current}</p>
    </div>
)
export default Display;