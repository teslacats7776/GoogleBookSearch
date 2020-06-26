import React from "react";

// This file exports the Input

export function Input(props){
    
    return (
        <div class="input-group-prepend">
            <input {...props} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
        </div>
    );
}