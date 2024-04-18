import React from "react";
import classes from './Button.module.css'
const Button = ({children, ...props}) =>{

    return(
        <button {...props} className={classes.form__btn}>
            {children}
        </button>
    )
}

export default Button;

