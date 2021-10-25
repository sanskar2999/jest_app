import React from "react";
import './button.css'

 function Button({label}:{label:any}){
    return (
    <div data-testid="button" className="button-style">{label}</div>
    );
 }
 export default Button; 