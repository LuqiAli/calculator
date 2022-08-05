import React from "react";

export default function Button(props) {
    return (
    <div className="button" onClick={() => props.returnValue(props.value)}>
        <p>{props.value}</p>
    </div>
    )
}